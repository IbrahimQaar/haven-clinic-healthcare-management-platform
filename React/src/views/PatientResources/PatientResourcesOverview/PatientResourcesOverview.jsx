import { Link } from "react-router-dom";
import styles from "./PatientResourcesOverview.module.css";
import Footer from "../../Footer/Footer";
import ResourcesInfo from "../../../assets/ResourcesInfo.jpg";

export default function PatientResourcesPage() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.patientHero}>
          <div className={styles.patientHeroText}>
            <p className={styles.patientHeroTitle}>Patient Resources</p>
            <p className={styles.patientHeroSubtitle}>
              The information you need for your health
            </p>
          </div>

          <div className={styles.patientHeroImageWrapper}>
            <img
              src={ResourcesInfo}
              alt="Doctor and patient discussing"
              className={styles.patientHeroImage}
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
          <span className={styles.breadcrumbCurrent}>Patient Resources</span>
        </div>
      </div>

      <div className={styles.middleDescriptions}>
        <p>
          Welcome to Haven Clinic Health, where you, your family, and friends
          receive expert medical care and compassionate healing.
        </p>
        <p>
          You may have many questions about your stay with us, such as where to
          go, how much a procedure may cost, or how to communicate with your
          doctors, nurses, and hospital staff. In this section, you will find a
          variety of tools to help make your time with us easier.
        </p>

        <p>
          All of your questions can be answered through our online resources or
          by a compassionate staff member who will prioritize your physical,
          emotional, and spiritual needs.
        </p>
      </div>

      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h2 className={styles.resourceTitle}>Helpful resources</h2>
          </div>
          <section className={styles.resourcesGrid}>
            <div className={styles.resourceCard}>
              <Link to="/prepare" className={styles.cardTitleLink}>
                Preparing for Your Visit
              </Link>
              <p className={styles.cardDescription}>
                Start your journey prepared. Access pre-visit forms, insurance
                information, what to bring checklists, and everything you need
                for a seamless appointment experience.
              </p>
            </div>

            <div className={styles.resourceCard}>
              <Link to="/visitors-resource" className={styles.cardTitleLink}>
                Visitor Information
              </Link>
              <p className={styles.cardDescription}>
                Essential details for family and friends. Find visiting hours,
                parking locations, amenities, and guidelines to support your
                loved ones.
              </p>
            </div>

            <div className={styles.resourceCard}>
              <Link to="/after-your-visit" className={styles.cardTitleLink}>
                After Your Visit
              </Link>
              <p className={styles.cardDescription}>
                Continue your care journey with confidence. Access discharge
                instructions, medication guides, follow-up scheduling, and
                recovery resources.
              </p>
            </div>

            <div className={styles.resourceCard}>
              <Link to="/mychart#login" className={styles.cardTitleLink}>
                MyChart Portal
              </Link>
              <p className={styles.cardDescription}>
                View test results, message your care team, schedule
                appointments, and manage prescriptions online, anytime.
              </p>
            </div>

            <div className={styles.resourceCard}>
              <Link to="/billing-info" className={styles.cardTitleLink}>
                Billing & Insurance
              </Link>
              <p className={styles.cardDescription}>
                Understand your costs, explore payment plans, check insurance
                coverage, and learn about financial assistance programs.
              </p>
            </div>

            <div className={styles.resourceCard}>
              <Link to="/patient-rights" className={styles.cardTitleLink}>
                Patient Rights
              </Link>
              <p className={styles.cardDescription}>
                Learn about privacy policies, informed consent, how to voice
                concerns, and your role in healthcare decisions.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}
