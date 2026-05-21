import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "./PrimaryFamilyCare.module.css";
import { FiMapPin, FiChevronRight } from "react-icons/fi";
import { FaUserMd } from "react-icons/fa";
import Footer from "../../Footer/Footer";

export default function PrimaryFamilyCare() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className={styles.primaryCareContainer}>
        <div className={styles.primaryCarePattern} aria-hidden="true" />

        <div className={styles.primaryCareHero}>
          <div className={styles.primaryCareText}>
            <p className={styles.primaryCareTitle}>Primary Care Services</p>
            <p className={styles.primaryCareSubtitle}>
              Leading Expert Healthcare, Right Around the Corner.
            </p>
          </div>

          <div className={styles.primaryCareImageWrapper}>
            <img
              src="/images/PrimaryCareServices.jpg"
              alt="Primary family care consultation"
              className={styles.primaryCareImage}
            />
          </div>
        </div>
      </div>

      <div className={styles.primaryCareQuickLinks}>
        <Link to="/services" className={styles.primaryCareLink}>
          <FaUserMd className={styles.primaryCareIcon} />
          <span className={styles.primaryCareLinkText}>Find a doctor</span>
          <FiChevronRight className={styles.primaryCareArrow} />
        </Link>

        <Link to="/locations" className={styles.primaryCareLink}>
          <FiMapPin className={styles.primaryCareIcon} />
          <span className={styles.primaryCareLinkText}>Find a location</span>
          <FiChevronRight className={styles.primaryCareArrow} />
        </Link>
      </div>

      <div className={styles.primaryCareBreadcrumbSection}>
        <div className={styles.primaryCareBreadcrumbNav}>
          <Link to="/" className={styles.primaryCareBreadcrumbLink}>
            Home
          </Link>
          <span className={styles.primaryCareBreadcrumbSeparator}>/</span>
          <Link to="/about" className={styles.primaryCareBreadcrumbLink}>
            Primary Care Services
          </Link>
        </div>
      </div>

      <section className={styles.primaryCareContent}>
        <div className={styles.primaryCareSection}>
          <p className={styles.primaryCareTitle}>
            Our Proven Approach to Primary Care
          </p>
          <p className={styles.primaryText}>
            Our primary care teams deliver compassionate, patient-centered care
            across the region, creating personalized plans that support your
            long-term health and well-being.
          </p>
          <p className={styles.primaryCareText}>
            We offer well-rounded care for:
          </p>
          <ul className={styles.primaryCareList}>
            <li>
              Care for common illnesses such as colds, flu, allergies, and
              infections
            </li>
            <li>
              Support for chronic conditions like diabetes and high blood
              pressure
            </li>
            <li>
              Preventive services including physical exams and routine
              screenings
            </li>
          </ul>
          <p className={styles.primaryCareText}>
            Connect easily with expert care and support, including:
          </p>
          <ul className={styles.primaryCareList}>
            <li>Same-day or next-day appointments when you are feeling sick</li>
            <li>
              Convenient locations across our region, along with virtual visit
              options
            </li>
            <li>Coordinated care through our network of trusted specialists</li>
          </ul>
          <div className={styles.expertiseSection}>
            <p className={styles.areaOfExp}>Our Areas of Expertise</p>
            <ul className={styles.careGrid}>
              <li className={styles.careCard}>Family Medicine Services</li>
              <li className={styles.careCard}>Internal Medicine Services</li>
              <li className={styles.careCard}>Pediatric Care</li>
              <li className={styles.careCard}>Dermatology Services</li>
              <li className={styles.careCard}>Preventive & Wellness Care</li>
              <li className={styles.careCard}>Virtual On-Demand Care</li>
            </ul>
          </div>
          {/* Meet our expert */}
          <div className={styles.careTeamSection}>
            {/* <h2 className={styles.careTitle}>Meet Our Care Team</h2> */}

            <div className={styles.careTeamContent}>
              <div className={styles.careTeamText}>
                <h2 className={styles.careTitle}>Meet Our Care Team</h2>
                <p className={styles.careTeamDescription}>
                  Our network of skilled and compassionate family medicine,
                  internal medicine, and pediatric doctors across the region
                  ensures you and your family receive trusted, high-quality care
                  at Havenwell Health.
                </p>

                <Link to="/services" className={styles.findDoctorButton}>
                  Find a Doctor
                </Link>
              </div>

              <div className={styles.careTeamImage}>
                <img src="/images/Doctors.avif" alt="Our medical care team" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* next Steps */}
      <div className={styles.nextStepsSection}>
        <p className={styles.nextStepsTitle}>Next Steps</p>

        <div className={styles.nextStepsActions}>
          <Link to="/services" className={styles.nextStepItem}>
            <FaUserMd className={styles.nextStepsIcon} />
            Find a Doctor
          </Link>

          <Link to="/locations" className={styles.nextStepItem}>
            <FiMapPin className={styles.nextStepsIcon} />
            Find a Location
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
