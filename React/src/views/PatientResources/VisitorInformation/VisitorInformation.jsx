import { Link } from "react-router-dom";
import { useEffect } from "react";
import styles from "./VisitorInformation.module.css";
import Footer from "../../Footer/Footer";

export default function VisitorInformation() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      {/* Page hero section */}
      <div className={styles.mainContainer}>
        {/* FULL-WIDTH DECORATION */}
        <div className={styles.heroPattern} aria-hidden="true" />

        {/* CENTERED CONTENT */}
        <div className={styles.patientHero}>
          <div className={styles.patientHeroText}>
            <p className={styles.patientHeroTitle}>Visitor Information</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb navigation */}
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
          <span className={styles.breadcrumbCurrent}>Visitor Information</span>
        </div>
      </div>

      <section className={styles.visitorInfo}>
        {/* <h2>Visitor Information — Havenwell Health</h2> */}

        <p>
          At Havenwell Health, we are committed to providing a safe, respectful,
          and comfortable environment for our patients, visitors, and staff. The
          following information is intended to help you understand our visitor
          practices and what to expect when visiting our locations.
        </p>

        <h3>Safety and Security</h3>

        <p>
          To support a calm and secure care environment, Havenwell Health
          follows standard safety practices:
        </p>

        <ul className={styles.policyList}>
          <li>Visitors are asked to use designated entrances.</li>
          <li>A valid photo ID may be requested at check-in.</li>
          <li>
            Visitor identification badges may be issued and should be worn while
            inside our locations.
          </li>
          <li>
            Weapons of any kind, including firearms and knives, are not
            permitted on Havenwell Health property.
          </li>
          <li>
            If additional screening is needed, our staff will assist you
            respectfully and discreetly.
          </li>
          <li>
            Please inform staff if you have a medical condition or device that
            requires special consideration during screening.
          </li>
        </ul>

        <p className={styles.priorityText}>
          We appreciate your cooperation and understanding as we take these
          steps to maintain a safe setting for everyone.
        </p>

        <h3>Patient Visitation</h3>

        <p>
          Havenwell Health recognizes the importance of support from family and
          loved ones and allows visitation when it aligns with patient care and
          safety.
        </p>

        <ul className={styles.policyList}>
          <li>
            Visitation is generally permitted unless temporary restrictions are
            necessary.
          </li>
          <li>
            Patients who are COVID-19 positive or awaiting test results may
            designate up to two support persons.
          </li>
          <li>
            Only one designated support person may visit at a time in these
            situations.
          </li>
          <li>
            Visitors may be asked to follow specific precautions, including the
            use of personal protective equipment (PPE), when required.
          </li>
          <li>
            Individuals who are ill or experiencing symptoms such as fever,
            cough, or difficulty breathing should postpone their visit.
          </li>
        </ul>

        <h3>Masking Guidelines</h3>

        <p>
          Havenwell Health follows current health and safety guidance to protect
          patients, visitors, and staff.
        </p>

        <ul className={styles.policyList}>
          <li>Masks are not routinely required at our locations.</li>
          <li>
            Mask use may be required or recommended in certain circumstances,
            including:
          </li>
          <li>
            When a patient or visitor is suspected or confirmed to have COVID-19
          </li>
          <li>Following a known high-risk exposure</li>
          <li>
            When visiting patients who are immunocompromised or at higher risk
          </li>
          <li>
            In specific clinical areas where masking supports patient care
          </li>
          <li>When required by public health authorities</li>
        </ul>

        <p className={styles.maskNote}>
          Wearing a mask is always welcome based on personal preference or
          individual health considerations.
        </p>

        <p className={styles.contactNote}>
          If you have questions about visitation, safety practices, or need
          accommodations, please contact Havenwell Health directly. Our team is
          here to support you.
        </p>
      </section>
      <div className={styles.greetingSection}>
        <div className={styles.sendGreeting}>
          <p className={styles.eGreetingTitle}>Send an eGreeting</p>
          <p className={styles.eGreetingDescription}>
            If you&apos;re unable to visit in person, you can still let someone
            know you&apos;re thinking of them. Send a thoughtful eGreeting that
            will be delivered directly to their room.
          </p>
          <button className={styles.eGreetingButton}>Send an eGreeting</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
