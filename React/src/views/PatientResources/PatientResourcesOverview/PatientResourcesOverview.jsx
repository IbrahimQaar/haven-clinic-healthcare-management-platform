import { Link } from "react-router-dom";
import styles from "./PatientResourcesOverview.module.css";
import { useEffect } from "react";
import Footer from "../../Footer/Footer";

export default function PatientResourcesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      {/* Page hero section */}
      <div className={styles.mainContainer}>
        <div className={styles.heroPattern} aria-hidden="true" />
        <div className={styles.patientHero}>
          <div className={styles.patientHeroText}>
            <p className={styles.patientHeroTitle}>Patient Resources</p>
            <p className={styles.patientHeroSubtitle}>
              The information you need for your health
            </p>
          </div>

          {/* Hero image */}
          <div className={styles.patientHeroImageWrapper}>
            <img
              src="/images/DocAndPatient.jpg"
              alt="Doctor and patient discussing"
              className={styles.patientHeroImage}
            />
          </div>
        </div>
      </div>

      {/* Breadcrumb navigation */}
      <div className={styles.breadcrumbSection}>
        <div className={styles.breadcrumbNav}>
          <Link to="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>Patient Resources</span>
        </div>
      </div>

      {/* Introductory page content */}
      {/* Introductory page content */}
      <div className={styles.middleDescriptions}>
        <p>
          Welcome to <strong>Havenwell Health</strong>, a regional healthcare
          system dedicated to providing exceptional care to patients and the
          communities we serve. Our physicians, nurses, and care teams work
          together across multiple locations to deliver compassionate,
          high-quality medical services in a supportive environment.
        </p>

        <p>
          We understand that navigating healthcare can raise important
          questions— whether you are looking for information about appointments,
          medical records, billing, or how to stay connected with your care
          team. This section is designed to provide clear guidance and helpful
          resources.
        </p>

        <p>
          Many common questions can be answered through the resources below. Our
          care teams are also available to support you every step of the way,
          ensuring your experience with Havenwell Health is informed,
          respectful, and centered on your well-being.
        </p>
      </div>

      {/* Resources section */}
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h2 className={styles.resourceTitle}>Patient resources</h2>
          </div>

          {/* Resource cards grid */}
          <section className={styles.resourcesGrid}>
            <div className={styles.resourceCard}>
              <Link to="/medical-records" className={styles.cardTitleLink}>
                Medical records
              </Link>
              <p className={styles.cardDescription}>
                Learn how to request your medical records, access important
                health information, and understand how Havenwell Health protects
                your privacy and personal data.
              </p>
            </div>

            <div className={styles.resourceCard}>
              <Link to="/visitor-information" className={styles.cardTitleLink}>
                Visitor information
              </Link>
              <p className={styles.cardDescription}>
                Find helpful guidance for planning a visit to one of our
                Havenwell Health locations, including visitor policies and
                important information for patients and families.
              </p>
            </div>

            <div className={styles.resourceCard}>
              <Link
                to="/patient-rights-responsibilities"
                className={styles.cardTitleLink}
              >
                Patient rights and responsibilities
              </Link>
              <p className={styles.cardDescription}>
                Review your rights as a patient and the shared responsibilities
                that help ensure respectful, safe, and high-quality care.
              </p>
            </div>

            <div className={styles.resourceCard}>
              <Link to="/language-services" className={styles.cardTitleLink}>
                Language and translation services
              </Link>
              <p className={styles.cardDescription}>
                Havenwell Health provides free language assistance and
                interpretation services for patients who prefer to communicate
                in a language other than English.
              </p>
            </div>

            <div className={styles.resourceCard}>
              <Link to="/spiritual-care" className={styles.cardTitleLink}>
                Spiritual care
              </Link>
              <p className={styles.cardDescription}>
                Spiritual care services are available to support patients and
                families of all faiths and belief systems, recognizing the
                importance of caring for the whole person.
              </p>
            </div>

            <div className={styles.resourceCard}>
              <Link to="/provide-feedback" className={styles.cardTitleLink}>
                Provide feedback
              </Link>
              <p className={styles.cardDescription}>
                Share your feedback, suggestions, or concerns. Your input helps
                Havenwell Health continue improving the care and services we
                provide to our communities.
              </p>
            </div>

            <div className={styles.resourceCard}>
              <Link to="/send-ecard" className={styles.cardTitleLink}>
                Send an eCard
              </Link>
              <p className={styles.cardDescription}>
                Send a thoughtful electronic message to a patient to let them
                know you are thinking of them during their stay or visit.
              </p>
            </div>

            <div className={styles.resourceCard}>
              <Link to="/policies" className={styles.cardTitleLink}>
                Policies
              </Link>
              <p className={styles.cardDescription}>
                Review important Havenwell Health policies and guidelines that
                support a safe, respectful, and welcoming care environment for
                patients, visitors, and staff.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Page footer */}
      <Footer />
    </>
  );
}
