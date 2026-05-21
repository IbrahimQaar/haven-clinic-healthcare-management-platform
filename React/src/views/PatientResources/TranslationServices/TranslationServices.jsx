import { Link } from "react-router-dom";
import styles from "./TranslationServices.module.css";
import { useEffect } from "react";
import Footer from "../../Footer/Footer";

export default function TranslationServices() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heroPattern} aria-hidden="true" />

        <div className={styles.patientHero}>
          <div className={styles.patientHeroText}>
            <p className={styles.patientHeroTitle}>
              Language and Translation{" "}
              <span className={styles.mobileBreak}>Services</span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.breadcrumbSection}>
        <div className={styles.breadcrumbNav}>
          <Link to="/" className={styles.breadcrumbLink}>
            Home
          </Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link to="/patient-resources" className={styles.breadcrumbLink}>
            Patient Resources
          </Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>Translation Services</span>
        </div>
      </div>

      <section className={styles.translationSection}>
        <p className={styles.bodyText}>
          To support clear communication and high-quality care, free assistance
          and support services are available for patients, families, and
          caregivers. These services are intended to help individuals understand
          health information and participate fully in their care.
        </p>

        <p className={styles.bodyText}>Available services include:</p>

        <ul className={styles.servicesList}>
          <li>Qualified interpreters</li>
          <li>
            Written materials provided in alternative formats, such as large
            print, audio, and accessible electronic versions
          </li>
          <li>Health information available in languages other than English</li>
        </ul>

        <p className={styles.bodyText}>
          These services are provided at no cost.
        </p>

        <h3 className={styles.sectionHeading}>Web page translation</h3>

        <p className={styles.bodyText}>
          For general informational pages, website content may be viewed in
          another language using translation features available on many devices
          and browsers.
        </p>

        <p className={styles.bodyText}>
          <span className={styles.boldLabel}>On a desktop or laptop:</span> Most
          web browsers offer a built-in translation option that can be accessed
          through the address bar or browser menu. In Safari, translation
          options may be found by selecting the “aA” icon in the address bar. If
          a translation icon is not visible, it may be enabled through the
          browser’s settings menu.
        </p>

        <p className={styles.bodyText}>
          <span className={styles.boldLabel}>On a mobile device:</span> Text may
          be selected and translated using the device’s built-in translation
          feature, which works best with commonly used browsers. Translation
          applications may also be used to assist with reading online content.
        </p>

        <p className={styles.bodyText}>
          * Please note that browser-based translation tools rely on the
          device’s translation services and are intended for general information
          only. If immediate medical care is needed, call 911.
        </p>

        <h3 className={styles.sectionHeading}>
          Discrimination is against the law
        </h3>

        <p className={styles.bodyText}>
          Discrimination in healthcare is prohibited by law. Services are
          provided in compliance with applicable federal civil rights
          regulations. Individuals are not excluded from care or treated
          differently on the basis of race, color, national origin, age,
          disability, or sex. Equal access to care and services is provided to
          all patients. If assistance is needed related to communication,
          accessibility, or understanding health information, please notify a
          member of the care team.
        </p>
      </section>
      <Footer />
    </>
  );
}
