import styles from "./Footer.module.css";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
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
                  Schedule Appointment
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
                <Link to="/prepare" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Preparing for Your Visit
                </Link>
              </li>
              <li>
                <Link to="/visitors-resource" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Visitor Information
                </Link>
              </li>
              <li>
                <Link to="/mychart" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  MyChart
                </Link>
              </li>
              <li>
                <Link to="/billing-insurance" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Billing & Insurance
                </Link>
              </li>
              <li>
                <Link to="/medical-records" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Medical Records
                </Link>
              </li>
            </ul>
          </div>

          {/* About / Help */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>About</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link to="/about" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  About Haven Clinic
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/our-policy" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Privacy & Site Policy
                </Link>
              </li>
              <li>
                <Link to="/patient-rights" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Patient Rights
                </Link>
              </li>
              <li>
                <Link to="/login" className={styles.footerLink}>
                  <ChevronRight className={styles.footerLinkIcon} />
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Help / Assistance */}
          <div className={styles.footerColumn}>
            <h3 className={styles.footerColumnTitle}>Help & Assistance</h3>

            <p className={styles.footerHelpText}>
              Helpful resources and support links.
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
        </div>

        {/* Legal Row */}
        <div className={styles.footerLegalRow}>
          <span>
            &copy; {new Date().getFullYear()} HavenClinic. All rights reserved.
          </span>

          <span className={styles.divider}>|</span>
          <Link to="/our-policy">Privacy & Site Policy</Link>
        </div>
      </div>
    </footer>
  );
}
