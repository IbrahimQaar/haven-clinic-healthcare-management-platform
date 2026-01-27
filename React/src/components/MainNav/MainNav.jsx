import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import styles from "./MainNav.module.css";
import logoImage from "../../assets/HavenClinci.png";

export default function MainNav() {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen((prev) => !prev);
  }

  function closeNav() {
    setIsOpen(false);
  }

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.logoLink}>
          <img
            src={logoImage}
            alt="Haven Clinic logo"
            className={styles.logoImg}
          />
        </Link>

        <nav className={`${styles.MainNav} ${isOpen ? styles.navOpen : ""}`}>
          <ul className={styles.mainNavList}>
            <li>
              <NavLink to="/" end onClick={closeNav}className={styles.mainNavLink}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={closeNav}
                className={styles.mainNavLink}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                onClick={closeNav}
                className={styles.mainNavLink}
              >
                Find Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/locations"
                onClick={closeNav}
                className={styles.mainNavLink}
              >
                Find Location
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/patient-resources"
                onClick={closeNav}
                className={styles.mainNavLink}
              >
                Patient Resources
              </NavLink>
            </li>

            <div className={styles.rightSection}>
              {user ? (
                <>
                  <NavLink
                    to="/userProfile"
                    className={styles.signInButton}
                    onClick={closeNav}
                  >
                    Profile
                  </NavLink>

                  <Link
                    to="/logout"
                    className={styles.registerButton}
                    onClick={closeNav}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <NavLink
                    to="/login"
                    className={styles.signInButton}
                    onClick={closeNav}
                  >
                    Login
                  </NavLink>

                  <NavLink
                    to="/register"
                    className={styles.registerButton}
                    onClick={closeNav}
                  >
                    Register
                  </NavLink>
                </>
              )}
            </div>
          </ul>
        </nav>

        <button
          className={styles.btnMobileNav}
          onClick={toggleNav}
          type="button"
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <span className={styles.iconMobileNav}>✕</span>
          ) : (
            <span className={styles.iconMobileNav}>☰</span>
          )}
        </button>
      </header>
    </>
  );
}
