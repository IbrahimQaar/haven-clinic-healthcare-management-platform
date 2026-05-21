import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "./AboutUs.module.css";
import Footer from "../Footer/Footer";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heroPattern} aria-hidden="true" />

        <div className={styles.aboutUsHero}>
          <div className={styles.aboutUsText}>
            <p className={styles.aboutUsTitle}>About Us</p>
            <p className={styles.aboutUsSubtitle}>
              We inspire health in our communities
            </p>
          </div>

          <div className={styles.aboutUsImageWrapper}>
            <img
              src="/images/Image1.jpg"
              alt="Havenwell Health care team collaborating"
              className={styles.aboutUsImage}
            />
          </div>
        </div>
      </div>

      <div className={styles.breadcrumbSection}>
        <div className={styles.breadcrumbNav}>
          <Link to="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link to="/about" className={styles.breadcrumbLink}>
            About Havenwell Health
          </Link>
        </div>
      </div>

      <section className={styles.aboutUsContainer}>
        <p className={styles.aboutUsParagraph}>
          Havenwell Health is a regional healthcare organization headquartered
          in Columbus, Ohio, dedicated to delivering high-quality care in a
          welcoming and patient-focused environment. As a physician-led health
          system, Havenwell Health provides accessible, personalized care that
          supports the everyday health needs of the communities we serve.
        </p>

        <p className={styles.aboutUsParagraph}>
          Our physicians, nurses, and care teams collaborate across our network
          of health centers and medical locations to provide coordinated and
          thoughtful care. By combining clinical expertise with strong
          communication and respect for every patient, we strive to create a
          healthcare experience that is both efficient and compassionate.
        </p>

        <p className={styles.aboutUsParagraph}>
          Headquartered in Columbus, Havenwell Health serves patients across the
          greater Central Ohio region through a growing network of conveniently
          located care centers. Our locations make it easier for patients and
          families to access trusted primary care, specialty services, and
          preventive health resources close to home.
        </p>

        <p className={styles.aboutUsParagraph}>
          We believe healthcare goes beyond treating illness. Our approach
          emphasizes preventive care, patient education, and long-term wellness
          to help individuals stay healthy and informed at every stage of life.
        </p>

        <p className={styles.aboutUsParagraph}>
          Guided by compassion, integrity, and a commitment to clinical
          excellence, Havenwell Health remains dedicated to strengthening the
          health of the communities we serve and providing care patients can
          trust today and for years to come.
        </p>

        <div className={styles.threeCardContainer}>
          <div className={styles.cardOne}>
            <h2 className={styles.cardTitle}>Our mission</h2>
            <p className={styles.cardBodyText}>
              Our mission is to improve the health and well-being of the
              communities we serve by providing high-quality, compassionate care
              and supporting lifelong wellness for every patient.
            </p>
          </div>

          <div className={styles.cardTwo}>
            <h2 className={styles.cardTitle}>Our vision</h2>
            <p className={styles.cardBodyText}>
              To be a trusted healthcare partner recognized for clinical
              excellence, innovative care, and a patient-centered experience
              across every community we serve.
            </p>
          </div>

          <div className={styles.cardThree}>
            <h2 className={styles.cardTitle}>Our values</h2>
            <ul className={styles.valuesList}>
              <li>Respect for All</li>
              <li>Working as One</li>
              <li>Assume Positive Intent</li>
              <li>Do the Right Thing</li>
              <li>Find a Better Way</li>
              <li>Commitment to Excellence</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
