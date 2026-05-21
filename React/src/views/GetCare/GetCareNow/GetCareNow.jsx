import styles from "./GetCareNow.module.css";
import { Link } from "react-router-dom";

export default function GetCareNow() {
  return (
    <section className={styles.getCareSection}>
      <Link to="/be-seen-soon" className={styles.sectionKicker}>
        BE SEEN SOON
      </Link>

      <h2 className={styles.sectionTitle}>Get Care Today</h2>

      <p className={styles.sectionDescription}>
        We offer convenient options to help you get the care you need, when you
        need it.
      </p>

      <div className={styles.careCardsGrid}>
        {/* Primary & Family Care */}
        <div className={styles.careCard}>
          <div className={`${styles.iconPanel} ${styles.primary}`}>
            <img src="/images/Stethoscope.png" alt="Primary and Family Care" />
          </div>

          <div className={styles.cardContent}>
            <h3>Primary & Family Care</h3>
            <p>
              Preventive care and routine visits for individuals and families.
            </p>
            <Link to="/primary-family-care" className={styles.learnBtn}>
              Learn More
            </Link>
          </div>
        </div>

        {/* Pediatric Care */}
        <div className={styles.careCard}>
          <div className={`${styles.iconPanel} ${styles.pediatric}`}>
            <img src="/images/BabyOutline.png" alt="Pediatric Care" />
          </div>

          <div className={styles.cardContent}>
            <h3>Pediatric Care</h3>
            <p>Dedicated care for infants, children, and adolescents.</p>
            <Link to="/pediatric-care" className={styles.learnBtn}>
              Learn More
            </Link>
          </div>
        </div>

        {/* Internal Medicine */}
        <div className={styles.careCard}>
          <div className={`${styles.iconPanel} ${styles.internal}`}>
            <img src="/images/HeartPulse.png" alt="Internal Medicine" />
          </div>

          <div className={styles.cardContent}>
            <h3>Internal Medicine</h3>
            <p>
              Comprehensive care focused on adult health and chronic conditions.
            </p>
            <Link to="/internal-medicine" className={styles.learnBtn}>
              Learn More
            </Link>
          </div>
        </div>

        {/* Dermatology */}
        <div className={styles.careCard}>
          <div className={`${styles.iconPanel} ${styles.dermatology}`}>
            <img src="/images/Dermatology.png" alt="Dermatology" />
          </div>

          <div className={styles.cardContent}>
            <h3>Dermatology</h3>
            <p>
              Evaluation and treatment for common and complex skin conditions.
            </p>
            <Link to="/services" className={styles.learnBtn}>
              Learn More
            </Link>
          </div>
        </div>

        {/* Virtual Care */}
        <div className={styles.careCard}>
          <div className={`${styles.iconPanel} ${styles.virtual}`}>
            <img src="/images/VirtualCare.png" alt="Virtual Care" />
          </div>

          <div className={styles.cardContent}>
            <h3>Virtual Care</h3>
            <p>Secure online visits with trusted healthcare providers.</p>
            <Link to="/virtual-care" className={styles.learnBtn}>
              Learn More
            </Link>
          </div>
        </div>

        {/* Schedule Online */}
        <div className={styles.careCard}>
          <div className={`${styles.iconPanel} ${styles.schedule}`}>
            <img src="/images/ScheduleOnline.png" alt="Schedule Online" />
          </div>

          <div className={styles.cardContent}>
            <h3>Schedule Online</h3>
            <p>Book appointments quickly using our online scheduling tools.</p>
            <Link to="/services" className={styles.learnBtn}>
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
