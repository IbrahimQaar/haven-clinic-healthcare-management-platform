import { Link } from "react-router-dom";
import styles from "./AboutUs.module.css";
import Footer from "../Footer/Footer";
import ProfessionalMeeting from "../../assets/Meeting.png";

export default function AboutUs() {
  return (
    <>
      <section className={styles.aboutUsSection}>
        {/* HERO SECTION */}
        <div className={styles.mainContainer}>
          <div className={styles.aboutUsHero}>
            <div className={styles.aboutUsText}>
              <p className={styles.aboutUsTitle}>About Us</p>
              <p className={styles.aboutUsSubtitle}>
                We inspire health in our communities
              </p>
            </div>

            <div className={styles.aboutUsImageWrapper}>
              <img
                src={ProfessionalMeeting}
                alt="Professional business Meeting"
                className={styles.aboutUsImage}
              />
            </div>
          </div>
        </div>

        {/* BREADCRUMB */}

        <div className={styles.container}>
          {/* CONTENT */}
          <div className={styles.aboutUsContent}>
            <div className={styles.breadcrumbWrapper}>
              <div className={styles.breadcrumb}>
                <Link to="/" className={styles.breadcrumbLink}>
                  Home
                </Link>
                <span className={styles.symbol}>/</span>

                <span className={styles.breadcrumbCurrent}>
                  About Haven Clinic
                </span>
              </div>
            </div>
            <div className={styles.aboutUsParagraph}>
              As a regional leader in high-quality care, and a mission-driven,
              physician-led integrated health system, our team is dedicated to
              delivering exceptional care for all – one patient, one community,
              one unique health care need at a time. From supporting lifelong
              wellness to providing nationally recognized, advanced specialty
              care, to being a deeply committed community partner, we are
              focused on improving health across Central Pennsylvania and
              Northern Maryland.
            </div>

            <div className={styles.aboutUsParagraph}>
              Our more than 23,000 team members "work as one," collaborating and
              innovating to provide exceptional care for all at an affordable
              price - and all close to home, so that our friends and neighbors
              can get the care they need when and where they need it.
            </div>

            <div className={styles.aboutUsParagraph}>
              As the region's largest employer, we’re proud to be recognized as
              a one of America's greatest workplaces.
            </div>

            <div className={styles.aboutUsParagraph}>
              We also understand that health care is more than medical care –
              which is why we are a deeply committed community partner,
              reinvesting millions of dollars each year to help foster healthy
              environments for our friends and neighbors.
            </div>

            <div className={styles.aboutUsParagraph}>
              By leading with compassion, hiring world-class team members, and
              continually innovating to bring cutting-edge technology and
              processes together to benefit our patients, we are dedicated to
              reimagining health care and transforming the communities we serve.
            </div>
          </div>

          {/* Cards */}
          <div className={styles.threeCardContainer}>
            <div className={styles.cardOne}>
              <h2 className={styles.cardTitle}>Our mission</h2>
              <p className={styles.cardBodyText}>
                Working as One to improve health through exceptional care for
                all, lifelong wellness, and healthy communities.
              </p>
            </div>

            <div className={styles.cardTwo}>
              <h2 className={styles.cardTitle}>Our vision</h2>
              <p className={styles.cardBodyText}>
                A Trusted Partner. Reimagining Healthcare. Inspired Health.
              </p>
            </div>

            <div className={styles.cardThree}>
              <h2 className={styles.cardTitle}>Our values</h2>
              <ul className={styles.valuesList}>
                <li>Respect for All</li>
                <li>Working as One</li>
                <li>Assume Positive Intent</li>
                <li>Do the Right Thing</li>
                <li>Find a Better Way</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
