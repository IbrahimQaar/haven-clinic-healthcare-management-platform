import styles from "./HomeView.module.css";
import GetCareNow from "../GetCare/GetCareNow/GetCareNow";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Footer from "../Footer/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function HomeView() {
  const { user } = useContext(UserContext);

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroGrid}>
          {/* LEFT SIDE */}
          <div className={styles.leftSide}>
            <div className={styles.content}>
              <h1 className={styles.heroTitle}>
                <span>Trusted Care for Our Community</span>
              </h1>

              <p className={styles.heroSubText}>
                Connect with trusted physicians and specialists across the
                Havenwell Health network and schedule care with confidence.
              </p>

              <div className={styles.buttonRow}>
                <Link
                  to={user ? "/my-appointments" : "/login"}
                  className={styles.primaryBtn}
                >
                  Schedule Now <ArrowRight />
                </Link>

                <Link to="/services" className={styles.secondaryBtn}>
                  Meet Our Doctors
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={styles.rightSide}>
            <img src="/images/NursingAssessPatient.png" alt="patient" />
          </div>
        </div>
      </section>

      <GetCareNow />
      <WhyChooseUs />
      <Footer />
    </>
  );
}
