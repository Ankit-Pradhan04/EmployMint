import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa"; // Leaf icon

const NAVBAR_HEIGHT = "70px";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <nav
        className={show ? "navbar show_navbar" : "navbar"}
        style={{
          height: NAVBAR_HEIGHT,
          minHeight: NAVBAR_HEIGHT,
          maxHeight: NAVBAR_HEIGHT,
          display: "flex",
          alignItems: "center",
          padding: "0 40px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            fontSize: "2rem",
            fontWeight: 700,
            color: "#2ecc71",
            whiteSpace: "nowrap",
          }}
        >
          <span>Employ</span>
          <FaLeaf style={{ margin: "0 6px", fontSize: "1.5rem", color: "#2ecc71" }} />
          <span>Mint</span>
        </div>

        <div className="links">
          <ul>
            <li>
              <Link to={"/"} onClick={() => setShow(!show)}>
                HOME
              </Link>
            </li>
            <li>
              <Link to={"/jobs"} onClick={() => setShow(!show)}>
                JOBS
              </Link>
            </li>
            {isAuthenticated ? (
              <li>
                <Link to={"/dashboard"} onClick={() => setShow(!show)}>
                  DASHBOARD
                </Link>
              </li>
            ) : (
              <li>
                <Link to={"/login"} onClick={() => setShow(!show)}>
                  LOGIN
                </Link>
              </li>
            )}
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>

      <style>
        {`
          @media (max-width: 700px) {
            nav .logo-text, nav span {
              font-size: 1.4rem !important;
            }
          }
          @media (max-width: 400px) {
            nav .logo-text, nav span {
              font-size: 1.1rem !important;
            }
            nav svg {
              font-size: 1.2rem !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
