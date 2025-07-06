import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="account_components">
      <h3>My Profile</h3>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          disabled
          value={user && user.name}
          onChange={(e) => e.target.value}
        />
      </div>
      <div>
        <label>Email Address</label>
        <input
          type="email"
          disabled
          value={user && user.email}
          onChange={(e) => e.target.value}
        />
      </div>
      {user && user.role === "Job Seeker" && (
        <div>
          <label>My Preferred Job Niches</label>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="text"
              disabled
              value={user && user.niches.firstNiche}
              onChange={(e) => e.target.value}
            />
            <input
              type="text"
              disabled
              value={user && user.niches.secondNiche}
              onChange={(e) => e.target.value}
            />
            <input
              type="text"
              disabled
              value={user && user.niches.thirdNiche}
              onChange={(e) => e.target.value}
            />
          </div>
        </div>
      )}
      <div>
        <label>Phone Number</label>
        <input
          type="number"
          disabled
          value={user && user.phone}
          onChange={(e) => e.target.value}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          disabled
          value={user && user.address}
          onChange={(e) => e.target.value}
        />
      </div>
      <div>
        <label>Role</label>
        <input
          type="text"
          disabled
          value={user && user.role}
          onChange={(e) => e.target.value}
        />
      </div>
      <div>
        <label>Joined On</label>
        <input
          type="text"
          disabled
          value={user && user.createdAt}
          onChange={(e) => e.target.value}
        />
      </div>
      {user && user.coverLetter && (
        <div>
          <label>Cover Letter</label>
          <textarea
            value={user.coverLetter}
            rows={5}
            disabled
            style={{
              background: "#f7f7fa",
              color: "#222",
              borderRadius: "7px",
              padding: "8px",
            }}
          />
        </div>
      )}
      {user && user.resume && user.resume.url && (
        <div>
          <label>Resume</label>
          <a
            href={user.resume.url}
            target="_blank"
            rel="noopener noreferrer"
            className="view-resume"
            style={{
              color: "#dfdf07",
              fontWeight: 600,
              textDecoration: "underline",
              fontSize: "1rem",
              marginTop: "8px",
              display: "inline-block",
            }}
          >
            View Uploaded Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default MyProfile;