import styles from "./WhyChooseUs.module.css";
import clinicImg from "../../assets/GroupsOfDoctors.png";
import { HeartPulse, Stethoscope, Handshake, Smile } from "lucide-react";
import { InsuranceSection } from "../Insurances/InsuranceSection";

export default function WhyChooseUs() {
  return (
    <>
      <div className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <h2 className={styles.title}>Why Patients Trust HavenClinic</h2>
            <p className={styles.subtitle}>
              At HavenClinic, trust begins with listening. Every patient is
              treated with respect, honesty, and personalized attention —
              because true care goes beyond treatment.
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <Stethoscope className={styles.icon} />
                <div>
                  <h3>Care That Listens</h3>
                  <p>
                    Our doctors take time to understand your story before
                    suggesting care.
                  </p>
                </div>
              </div>
              <div className={styles.feature}>
                <Handshake className={styles.icon} />
                <div>
                  <h3>Trusted by Families</h3>
                  <p>
                    Thousands of patients rely on HavenClinic for clear,
                    consistent, and compassionate care.
                  </p>
                </div>
              </div>
              <div className={styles.feature}>
                <HeartPulse className={styles.icon} />
                <div>
                  <h3>Advanced Yet Personal</h3>
                  <p>
                    Modern technology meets the warmth of real human connection
                    — in every visit.
                  </p>
                </div>
              </div>
              <div className={styles.feature}>
                <Smile className={styles.icon} />
                <div>
                  <h3>Your Comfort Matters</h3>
                  <p>
                    From online booking to in-person visits, everything feels
                    simple and reassuring.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE*/}
          <div className={styles.imageArea}>
            <img src={clinicImg} alt="Doctors smiling with patients" />
          </div>
        </div>

        <InsuranceSection />
      </div>
    </>
  );
}
