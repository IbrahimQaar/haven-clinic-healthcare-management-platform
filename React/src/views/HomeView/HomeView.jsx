import styles from "./HomeView.module.css";
import GetCareNow from "../GetCareNow/GetCareNow";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Footer from "../Footer/Footer";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeView() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                <span className={styles.lineOne}>
                  Book trusted doctors and{" "}
                </span>
                <span className={styles.lineTwo}>
                  specialists in your area{" "}
                  <span className={styles.heroTitleHighlight}>anytime</span>
                </span>
              </h1>

              <p className={styles.heroSubText}>
                Finding the right care shouldn’t be complicated. HavenClinic
                lets you book appointments easily, with clear availability and
                secure scheduling.
              </p>

              <div className={styles.buttonRow}>
                <button className={styles.primaryBtn}>
                  Book Appointment <ArrowRight className={styles.btnIcon} />
                </button>

                <Link to="/services" className={styles.secondaryBtn}>Find a Doctor</Link>
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
