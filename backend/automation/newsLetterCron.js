import cron from "node-cron";
import { Job } from "../models/jobSchema.js";
import { User } from "../models/userSchema.js";
import { sendEmail } from "../utils/sendEmail.js";

export const newsLetterCron = () => {
  cron.schedule("*/1 * * * *", async () => {
    console.log("Running Cron Automation");
    const jobs = await Job.find({ newsLettersSent: false });
    for (const job of jobs) {
      try {
        const filteredUsers = await User.find({
          $or: [
            { "niches.firstNiche": job.jobNiche },
            { "niches.secondNiche": job.jobNiche },
            { "niches.thirdNiche": job.jobNiche },
          ],
        });
        for (const user of filteredUsers) {
          const subject = `🚀 New Opportunity: ${job.title} Role in ${job.jobNiche}`;

          const message = `Hi ${user.name},\n\nExciting news! A job that matches your interests has just been posted on EmployMint.\n\nJob Details:\n- Position: ${job.title}\n- Company: ${job.companyName}\n- Location: ${job.location}\n- Salary: ${job.salary}\n- Niche: ${job.jobNiche}\n\nThis company is actively hiring — don’t miss your chance to apply early!\n\nWe’re always here to support your career journey.\n\nBest regards,\nEmployMint Team`;

          sendEmail({
            email: user.email,
            subject,
            message,
          });
        }
        job.newsLettersSent = true;
        await job.save();
      } catch (error) {
        console.log("ERROR IN NODE CRON CATCH BLOCK");
        return next(console.error(error || "Some error in Cron."));
      }
    }
  });
};
