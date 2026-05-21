import styles from "./WhyChooseUs.module.css";
import { HeartPulse, Stethoscope, Handshake, Smile } from "lucide-react";
import { InsuranceSection } from "../Insurances/InsuranceSection";
import Testimonials from "../Testimonials/Testimonials";

export default function WhyChooseUs() {
  return (
    <>
      <div className={styles.whyChooseSection}>
        {/* Title centered above the grid */}
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>What Sets Havenwell Health Apart</h2>
          <div className={styles.textContainer}>
            <p className={styles.subtitle}>
              Havenwell Health brings together experienced physicians and
              compassionate care teams dedicated to providing trusted medical
              care close to home.
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.textContainer}>
            <div className={styles.features}>
              <div className={styles.feature}>
                <Stethoscope className={styles.icon} />
                <div>
                  <h3>Care That Listens</h3>
                  <p>
                    Our physicians take time to understand your concerns and
                    provide care that reflects your health needs.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <Handshake className={styles.icon} />
                <div>
                  <h3>Trusted by Families</h3>
                  <p>
                    Families across our communities rely on Havenwell Health for
                    dependable care delivered with respect and compassion.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <HeartPulse className={styles.icon} />
                <div>
                  <h3>Advanced Yet Personal</h3>
                  <p>
                    We combine modern medical technology with a personal
                    approach that keeps patients at the center of care.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <Smile className={styles.icon} />
                <div>
                  <h3>Care Made Simple</h3>
                  <p>
                    Convenient locations and easy scheduling make it easier for
                    patients to access the care they need.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.imageArea}>
            <img
              src="/images/GroupsOfDoctors.png"
              alt="Havenwell Health physicians and care team"
            />
          </div>
        </div>
      </div>

      <Testimonials />
      <InsuranceSection />
    </>
  );
}
