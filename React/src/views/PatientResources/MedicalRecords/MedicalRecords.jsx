import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "./MedicalRecords.module.css";
import Footer from "../../Footer/Footer";

export default function MedicalRecords() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heroBackgroundPattern} aria-hidden="true" />

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroTitle}>Medical Records</p>
            <p className={styles.heroSubtitle}>
              View, change or share your medical records with others.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.breadcrumbSection}>
        <div className={styles.breadcrumbNav}>
          <Link to="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link to="/patient-resources" className={styles.breadcrumbLink}>
            Patient Resources
          </Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>Medical Records</span>
        </div>
      </div>
      <section className={styles.recordsAccessSection}>
        <h3 className={styles.sectionHeading}>
          Quick access to your medical records and more
        </h3>
        <p className={styles.sectionText}>
          Under federal privacy laws, including HIPAA, patients have the right
          to review their medical records and request corrections when
          appropriate. Protecting the privacy and accuracy of your health
          information is a priority.
        </p>

        <h3 className={styles.sectionHeading}>Secure Online Access</h3>
        <p className={styles.sectionText}>
          Our secure patient portal is coming soon and will provide convenient
          access to your health information at any time from a computer, tablet,
          or smartphone.
        </p>

        <div className={styles.myChartSection}>
          <a
            href="/patient-portal"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.accessBtn}
          >
            Patient Portal
          </a>
        </div>
      </section>

      <section className={styles.additionalAccessInfo}>
        <h3 className={styles.sectionHeading}>
          Request a change to your medical record
        </h3>

        <p className={styles.sectionText}>
          Patients have the right to review their medical records and request
          corrections as permitted by federal privacy laws, including HIPAA.
          Maintaining the accuracy, security, and confidentiality of health
          information is a priority.
        </p>

        <p className={styles.sectionText}>
          A secure patient portal is currently in development and will allow
          patients to view and manage portions of their medical record online.
          Until the portal becomes available, patients may contact their
          healthcare provider for assistance with medical record requests.
        </p>
      </section>
      <Footer />
    </>
  );
}
