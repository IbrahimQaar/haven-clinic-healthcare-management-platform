import { Link } from "react-router-dom";
import { useEffect } from "react";
import { FiMapPin, FiChevronRight } from "react-icons/fi";
import { FaUserMd } from "react-icons/fa";
import Footer from "../../Footer/Footer";
import styles from "./PediatricCare.module.css";

export default function PediatricCare() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className={styles.pediatricContainer}>
        <div className={styles.pediatricPattern} aria-hidden="true" />
        <div className={styles.pediatricHero}>
          <div className={styles.pediatricText}>
            <p className={styles.pediatricHeroTitle}>Pediatric Primary Care</p>
            <p className={styles.pediatricSubtitle}>
              Your child&apos;s health is our highest priority.
            </p>
          </div>
          <div className={styles.pediatricImageWrapper}>
            <img
              src="/images/PediatricCare.jpg"
              alt="Pediatric care"
              className={styles.pediatricImage}
            />
          </div>
        </div>
      </div>

      <div className={styles.pediatricQuickLinks}>
        <Link to="/services" className={styles.pediatricLink}>
          <FaUserMd className={styles.pediatricIcon} />
          <span>Find a doctor</span>
          <FiChevronRight className={styles.pediatricArrow} />
        </Link>
        <Link to="/locations" className={styles.pediatricLink}>
          <FiMapPin className={styles.pediatricIcon} />
          <span>Find a location</span>
          <FiChevronRight className={styles.pediatricArrow} />
        </Link>
      </div>

      <div className={styles.pediatricBreadcrumb}>
        <div className={styles.pediatricBreadcrumbNav}>
          <Link to="/" className={styles.pediatricBreadcrumbLink}>
            Home
          </Link>
          <span className={styles.pediatricBreadcrumbSeparator}>/</span>
          <Link className={styles.pediatricBreadcrumbLink}>
            Pediatric Primary Care
          </Link>
        </div>
      </div>

      <section className={styles.pediatricContent}>
        <div className={styles.pediatricSection}>
          <p className={styles.pediatricTitle}>
            Our Pediatric Primary Care Approach
          </p>

          <p className={styles.pediatricDescription}>
            Your child&apos;s health and well-being are our highest priorities.
            At Havenwell Health, our pediatric care team provides compassionate,
            expert care designed to support your child at every stage of growth
            and development.
          </p>

          <div className={styles.whyChoose}>
            <ul className={styles.ourApproachList}>
              <li>
                <strong>Personalized care: </strong>
                We take time to understand your child&apos;s unique health needs
                and work with your family to create a care plan tailored
                specifically for them.
              </li>
              <li>
                <strong>Team-based care: </strong>
                Our physicians, nurses, and specialists work together to provide
                coordinated care and the support your child needs to stay
                healthy.
              </li>
              <li>
                <strong>Advanced care with compassion: </strong>
                Using proven medical practices and modern technology, we deliver
                high-quality care while always focusing on your child&apos;s
                comfort and well-being.
              </li>
              <li>
                <strong>Safety: </strong>
                We provide high-quality care designed to protect your
                child&apos;s health and ensure the safest possible experience.
              </li>
            </ul>

            <p className={styles.pediatricTitle}>
              Why choose Havenwell Health for pediatric primary care?
            </p>
            <p className={styles.whyChooseUs}>
              Families choosing a Havenwell Health pediatrician aren&apos;t just
              choosing a doctor — they are choosing a partner in their
              child&apos;s health care journey. We&apos;ll care for your child
              by learning their story, evaluating their unique needs, and
              crafting a personalized plan to help them thrive.
            </p>

            <p className={styles.pediatricTitle}>Expert Care, Close to Home</p>
            <p className={styles.ourExpert}>
              Havenwell Health&apos;s pediatric providers serve families across
              central Ohio, delivering trusted and compassionate care for
              children of all ages. With flexible scheduling and timely
              appointments available for sick visits, families can feel
              confident their child will receive the care they need when it
              matters most.
            </p>
          </div>

          <div className={styles.careSection}>
            <div className={styles.careContent}>
              <div className={styles.careImage}>
                <img
                  src="/images/bookAppointment.png"
                  alt="Schedule pediatric appointment"
                />
              </div>
              <div className={styles.careText}>
                <h2 className={styles.careTitle}>Schedule an appointment</h2>
                <p className={styles.careDescription}>
                  Our pediatric providers offer personalized care designed to
                  support your child&apos;s health and development. From routine
                  wellness visits to addressing concerns, our team is here to
                  help your child thrive.
                </p>
                <Link to="/my-appointments" className={styles.primaryButton}>
                  Schedule an appointment
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.careSection}>
            <div className={styles.careContent}>
              <div className={styles.careText}>
                <h2 className={styles.careTitle}>Meet our experts</h2>
                <p className={styles.careDescription}>
                  Our pediatric care team includes experienced physicians who
                  specialize in children&apos;s health and well-being. We work
                  closely with families to provide supportive, trusted medical
                  care at every stage of childhood.
                </p>
                <Link to="/services" className={styles.primaryButton}>
                  Find a Doctor
                </Link>
              </div>
              <div className={styles.careImage}>
                <img src="/images/ExpertDoctor.png" alt="Pediatric doctors" />
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
