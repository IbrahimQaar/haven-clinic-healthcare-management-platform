import styles from "./VirtualCare.module.css";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import { FiMapPin, FiChevronRight } from "react-icons/fi";
import { FaUserMd } from "react-icons/fa";
import {
  //   FiClock,
  FiVideo,
  //   FiShield,
  //   FiUserCheck,
  FiDollarSign,
} from "react-icons/fi";
import Footer from "../../Footer/Footer";

export default function VirtualCare() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className={styles.virtualCareContainer}>
        <div className={styles.virtualCarePattern} aria-hidden="true" />

        <div className={styles.virtualCareHero}>
          <div className={styles.virtualCareText}>
            <p className={styles.virtualCareHeroTitle}>
              Virtual Care When You Need It
            </p>
            <p className={styles.virtualCareSubtitle}>
              Convenient care from the comfort of your home.
            </p>
          </div>

          <div className={styles.virtualCareImageWrapper}>
            <img
              src="/images/LookingIpad.jpg"
              alt="Virtual care consultation"
              className={styles.virtualCareImage}
            />
          </div>
        </div>
      </div>

      <div className={styles.virtualCareQuickLinks}>
        <Link to="/services" className={styles.virtualCareLink}>
          <FaUserMd className={styles.virtualCareIcon} />
          <span>Find a doctor</span>
          <FiChevronRight className={styles.virtualCareArrow} />
        </Link>

        <Link to="/locations" className={styles.virtualCareLink}>
          <FiMapPin className={styles.virtualCareIcon} />
          <span>Find a location</span>
          <FiChevronRight className={styles.virtualCareArrow} />
        </Link>
      </div>

      <div className={styles.virtualCareBreadcrumb}>
        <div className={styles.virtualCareBreadcrumbNav}>
          <Link to="/" className={styles.virtualCareBreadcrumbLink}>
            Home
          </Link>
          <span className={styles.virtualCareBreadcrumbSeparator}>/</span>
          <Link className={styles.virtualCareBreadcrumbLink}>
            Virtual On-Demand Care
          </Link>
        </div>
      </div>

      <section className={styles.virtualCare}>
        <div className={styles.virtualCareSection}>
          <p className={styles.virtualCareTitle}>Our Virtual Care Approach</p>

          <p className={styles.virtualCareText}>
            When you&apos;re not feeling well, getting care should be simple.
          </p>

          <p className={styles.virtualCareText}>
            With Havenwell Health Virtual Care, you can connect with a trusted
            healthcare provider through a secure video visit from the comfort of
            your home. Our virtual visits are available 24 hours a day, seven
            days a week, giving you convenient access to care whenever you need
            it.
          </p>

          <p className={styles.virtualCareText}>
            During your appointment, you&apos;ll speak directly with a provider
            in real time to discuss your symptoms, receive a professional
            evaluation, and get a personalized treatment plan.
          </p>

          <p className={styles.virtualCareText}>
            Our virtual care providers can help with a variety of common
            conditions, including:
          </p>

          <ul className={styles.virtualCareList}>
            <li>Allergies</li>
            <li>Asthma</li>
            <li>Bronchitis</li>
            <li>Cold and flu symptoms</li>
            <li>Sinus infections</li>
            <li>Sore throat</li>
            <li>Headaches</li>
            <li>Skin rashes</li>
          </ul>

          <Link to="/services" className={styles.startVisitBtn}>
            Start your visit
          </Link>

          <p className={styles.virtualCareTitle}>
            Why choose Havenwell Health on-demand virtual care?
          </p>

          <p className={styles.virtualCareText}>
            Havenwell Health Virtual Care provides a convenient way to receive
            medical care when and where it works best for you.
          </p>

          <p className={styles.virtualCareText}>
            When you or a family member experiences non-emergency symptoms, you
            can connect with a trusted provider online using your computer,
            smartphone, or tablet.
          </p>
          <p className={styles.virtualCareText}>
            It&apos;s a simple and reliable way to access quality care that is
            both convenient and affordable.
          </p>

          <ul className={styles.virtualCareBenefits}>
            {/* <li>
              <FiClock className={styles.benefitsIcon} />
              <div>
                <strong>Urgent Virtual Care, Anytime</strong>
                <p>
                  Virtual visits are available 24/7, giving you access to care
                  whenever health concerns arise.
                </p>
              </div>
            </li> */}

            <li>
              <FiVideo className={styles.benefitsIcon} />
              <div>
                <strong className={styles.benefitTitle}>
                  High-Quality Online Visits
                </strong>
                <p className={styles.benefitsText}>
                  Meet with a trusted healthcare provider through a secure video
                  appointment from the comfort of your home.
                </p>
              </div>
            </li>

            <li>
              <FiMapPin className={styles.benefitsIcon} />
              <div>
                <strong className={styles.benefitTitle}>
                  Access Care From Anywhere
                </strong>
                <p className={styles.benefitsText}>
                  Connect with a provider using your smartphone, tablet, or
                  computer from wherever you are.
                </p>
              </div>
            </li>
            <li>
              <FiDollarSign className={styles.benefitsIcon} />
              <div>
                <strong className={styles.benefitTitle}>
                  Affordable Care Options
                </strong>
                <p className={styles.benefitsText}>
                  Virtual care offers a convenient and cost-effective way to
                  receive medical guidance for many common conditions.
                </p>
              </div>
            </li>
          </ul>
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
