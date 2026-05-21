import styles from "./Footer.module.css";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Footer() {
  const { user } = useContext(UserContext);

  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Services */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>Services</h3>

            <ul className={styles.footerLinks}>
              <li>
                <Link to="/services" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Find a Doctor
                </Link>
              </li>

              <li>
                <Link to="/services" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Schedule an Appointment
                </Link>
              </li>

              <li>
                <Link to="/locations" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Find a Location
                </Link>
              </li>

              <li>
                <Link to="/patient-resources" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Patient Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Patient Resources */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>Patient Resources</h3>

            <ul className={styles.footerLinks}>
              <li>
                <Link to="/visitor-information" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Visitor Information
                </Link>
              </li>

              <li>
                <Link to="/language-services" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Language & Translation Services
                </Link>
              </li>

              <li>
                <Link to="/medical-records" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Medical Records
                </Link>
              </li>

              <li>
                <Link to="/patient-portal" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Patient Portal
                </Link>
              </li>

              <li>
                <Link
                  to="/patient-rights-responsibilities"
                  className={styles.footerLink}
                >
                  <ChevronRight className={styles.footerLinkIcon} />
                  Patient Rights & Responsibilities
                </Link>
              </li>

              <li>
                <Link to="/spiritual-care" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Spiritual Care
                </Link>
              </li>

              <li>
                <Link to="/feedback-form" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Provide Feedback
                </Link>
              </li>

              <li>
                <Link to="/send-ecard" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Send an E-Card
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>About</h3>

            <ul className={styles.footerLinks}>
              <li>
                <Link to="/about" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  About Havenwell Health
                </Link>
              </li>

              <li>
                <Link to="/locations" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Our Locations
                </Link>
              </li>

              <li>
                <Link to="/services" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Care Services
                </Link>
              </li>

              <li>
                <Link to="/policies" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Patient Rights & Policies
                </Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>Help & Assistance</h3>

            <p className={styles.footerHelpText}>
              Helpful healthcare resources and support links.
            </p>

            <ul className={styles.footerLinks}>
              <li>
                <a
                  href="https://medicaid.ohio.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Ohio Medicaid
                </a>
              </li>

              <li>
                <a
                  href="https://www.benefits.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  Benefits Finder
                </a>
              </li>

              <li>
                <a
                  href="https://www.healthcare.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.footerLink}
                >
                  HealthCare.gov
                </a>
              </li>
            </ul>
          </div>

          {/* Account */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>My Account</h3>

            <ul className={styles.footerLinks}>
              <li>
                <Link to={user ? "#" : "/login"} className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to={user ? "#" : "/register"}
                  className={styles.footerLink}
                >
                  <ChevronRight className={styles.footerLinkIcon} />
                  Create Account
                </Link>
              </li>

              <li>
                <Link to="/my-appointments" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  My Appointments
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className={styles.footerLegalRow}>
          <span>
            &copy; {new Date().getFullYear()} Havenwell Health. All rights
            reserved.
          </span>

          <span className={styles.divider}>|</span>

          <Link to="/policies">Privacy & Site Policy</Link>
        </div>
      </div>
    </footer>
  );
}
