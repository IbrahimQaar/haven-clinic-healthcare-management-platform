import styles from "./SpiritualCare.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import Footer from "../../Footer/Footer";

export default function SpiritualCare() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Hero */}
      <div className={styles.mainContainer}>
        <div className={styles.heroPattern} aria-hidden="true" />

        <div className={styles.patientHero}>
          <div className={styles.patientHeroText}>
            <p className={styles.spiritualCareTitle}>Spiritual care</p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
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
          <span className={styles.breadcrumbCurrent}>Spiritual Care</span>
        </div>
      </div>

      {/* Content */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <p className={styles.sectionTitle}>
            Caring for Patients Beyond Medical Treatment
          </p>

          <p className={styles.bodyText}>
            At Havenwell Health, we believe healing involves more than physical
            care. Our spiritual care services provide compassionate support for
            patients, families, and loved ones during times of illness,
            recovery, and important life moments. We are committed to caring for
            the whole person with dignity, respect, and understanding.
          </p>

          <p className={styles.sectionTitle}>
            Spiritual care services may include:
          </p>

          <ul className={styles.rightsList}>
            <li>
              Emotional and spiritual support during treatment and recovery
            </li>

            <li>Support and guidance for patients, families, and loved ones</li>

            <li>Respectful care for individuals of all faiths and beliefs</li>

            <li>Compassionate listening during challenging moments</li>

            <li>
              Comfort and encouragement during hospitalization and recovery
            </li>

            <li>
              Personal reflection, prayer, and spiritual guidance upon request
            </li>
          </ul>

          {/* Support section */}
          <div className={styles.supportSection}>
            <div className={styles.supportText}>
              <p className={styles.sectionTitle}>
                Support When It Matters Most:
              </p>

              <p className={styles.bodyText}>
                Our spiritual care team is here to provide comfort,
                encouragement, and compassionate support throughout your
                healthcare journey. We strive to create a caring environment
                where every patient and family member feels respected, heard,
                and supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
