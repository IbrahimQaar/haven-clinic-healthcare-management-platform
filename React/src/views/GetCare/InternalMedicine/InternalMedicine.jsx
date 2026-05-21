import styles from "./InternalMedicine.module.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FiMapPin, FiChevronRight } from "react-icons/fi";
import { FaUserMd } from "react-icons/fa";
import Footer from "../../Footer/Footer";

export default function InternalMedicine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className={styles.internalMedicineContainer}>
        <div className={styles.internalMedicinePattern} aria-hidden="true" />

        <div className={styles.internalMedicineHero}>
          <div className={styles.internalMedicineText}>
            <p className={styles.internalMedicineHeroTitle}>
              Internal Medicine
            </p>
            <p className={styles.internalMedicineSubtitle}>
              Focused on your health and well-being.
            </p>
          </div>

          <div className={styles.internalMedicineImageWrapper}>
            <img
              src="/images/InternalMedicine.jpeg"
              alt="InternalMedicine"
              className={styles.internalMedicineImage}
            />
          </div>
        </div>
      </div>

      <div className={styles.internalMedicineQuickLinks}>
        <Link to="/services" className={styles.internalMedicineLink}>
          <FaUserMd className={styles.internalMedicineIcon} />
          <span className={styles.internalMedicineLinkText}>Find a doctor</span>
          <FiChevronRight className={styles.internalMedicineArrow} />
        </Link>

        <Link to="/locations" className={styles.internalMedicineLink}>
          <FiMapPin className={styles.internalMedicineIcon} />
          <span className={styles.internalMedicineLinkText}>
            Find a location
          </span>
          <FiChevronRight className={styles.internalMedicineArrow} />
        </Link>
      </div>

      <div className={styles.internalMedicineBreadcrumbSection}>
        <div className={styles.internalMedicineBreadcrumbNav}>
          <Link to="/" className={styles.internalMedicineBreadcrumbLink}>
            Home
          </Link>
          <span className={styles.internalMedicineBreadcrumbSeparator}>/</span>
          <Link className={styles.internalMedicineBreadcrumbLink}>
            Internal Medicine
          </Link>
        </div>
      </div>

      <section className={styles.internalMedicineContent}>
        <div className={styles.internalMedicineSection}>
          <p className={styles.internalMedicineTitle}>
            Our Internal Medicine Care Approach
          </p>

          <p className={styles.internalMedicineDescription}>
            Internal medicine focuses on the prevention, diagnosis, and
            management of health conditions affecting adults. Our physicians
            take a comprehensive approach to care, helping patients manage both
            short-term concerns and long-term health needs with personalized
            treatment and preventive care.
          </p>

          <div className={styles.whyChooseSection}>
            <p className={styles.internalMedicineTitle}>
              Why Choose Havenwell Health for Internal Medicine
            </p>

            <ul className={styles.whyChooseList}>
              <li>Same-day or next-day appointments when you need care</li>
              <li>
                Experienced physicians focused on adult health and long-term
                wellness
              </li>
              <li>
                Convenient locations across our region with virtual visit
                options
              </li>
              <li>
                Coordinated care through our trusted network of specialists
              </li>
            </ul>
          </div>

          <div className={styles.careTeamSection}>
            <div className={styles.careTeamContent}>
              <div className={styles.careTeamImage}>
                <img
                  src="/images/bookAppointment.png"
                  alt="Our medical care team"
                />
              </div>

              <div className={styles.careTeamText}>
                <h2 className={styles.careTitle}>Schedule an appointment</h2>

                <p className={styles.careTeamDescription}>
                  Our internal medicine physicians provide thoughtful,
                  patient-centered care focused on adult health and wellness.
                  From preventive screenings to managing ongoing conditions, our
                  care teams work with you to support your long-term health and
                  well-being.
                </p>

                <Link to="/my-appointments" className={styles.findDoctorButton}>
                  Schedule an appointment
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.careTeamSection}>
            <div className={styles.careTeamContent}>
              <div className={styles.careTeamText}>
                <h2 className={styles.careTitle}>Meet our experts</h2>

                <p className={styles.careTeamDescription}>
                  Our experienced internal medicine physicians are dedicated to
                  providing trusted, high-quality care for adults across our
                  region. By combining medical expertise with compassionate
                  attention to each patient’s needs, our providers help guide
                  individuals toward healthier lives.
                </p>

                <Link to="/services" className={styles.findDoctorButton}>
                  Find a Doctor
                </Link>
              </div>

              <div className={styles.careTeamImage}>
                <img
                  src="/images/ExpertDoctor.png"
                  alt="Our medical care team"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
