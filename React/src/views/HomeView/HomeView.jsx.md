import styles from "./HomeView.module.css";
import GetCareNow from "../GetCare/GetCareNow/GetCareNow";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Footer from "../Footer/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// WORKING ON IT
export default function HomeView() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                <span className={styles.lineOne}>Trusted Care for</span>
                <span className={styles.lineTwo}>Our Community</span>
              </h1>

              <p className={styles.heroSubText}>
                Connect with trusted physicians and specialists across the
                Havenwell Health network and schedule care with confidence.
              </p>

              <div className={styles.buttonRow}>
                <Link to="/services" className={styles.primaryBtn}>
                  Book Appointment <ArrowRight className={styles.btnIcon} />
                </Link>

                <Link to="/services" className={styles.secondaryBtn}>
                  Find a Doctor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GetCareNow />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
