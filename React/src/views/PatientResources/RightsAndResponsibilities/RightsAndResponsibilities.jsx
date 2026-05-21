import { Link } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../Footer/Footer";
import styles from "./RightsAndResponsibilities.module.css";

export default function RightsAndResponsibilities() {
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
              Patient Rights and Responsibilities
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
          <span className={styles.breadcrumbCurrent}>
            Rights & Responsibilities
          </span>
        </div>
      </div>
      <section className={styles.patientRightsSection}>
        <div className={styles.patientRightsContainer}>
          <h3 className={styles.sectionSubtitle}>Our Commitment</h3>

          <p className={styles.bodyText}>
            Havenwell Health is committed to providing care that is respectful,
            safe, and consistent with applicable federal and state laws.
            Patients are encouraged to take an active role in their care. Clear
            communication and shared responsibility between patients, families,
            and care teams support quality care and positive outcomes.
          </p>

          <p className={styles.bodyText}>
            The information below outlines patient rights and responsibilities
            during the course of care.
          </p>

          {/* ---------------- Patient Rights ---------------- */}
          <h2 className={styles.sectionTitle}>Patient Rights</h2>

          <p className={styles.bodyText}>
            Care is provided in compliance with all applicable laws and
            regulations. Every patient has the right to receive care that is
            medically appropriate, respectful, and aligned with professional
            standards.
          </p>

          <h3 className={styles.sectionSubtitle}>Equal and Respectful Care</h3>

          <p className={styles.bodyText}>
            Patients have the right to receive care without discrimination. Care
            is not denied or limited on the basis of age, race, color, ancestry,
            national origin, religion, sex, gender identity, sexual orientation,
            disability, language, or source of payment.
          </p>

          <p className={styles.bodyText}>
            Services are provided in a manner that supports dignity, fairness,
            and respect, and are consistent with the scope of services offered
            by the Havenwell Health.
          </p>

          <h3 className={styles.sectionSubtitle}>Communication</h3>

          <p>You have the right to:</p>
          <ul className={styles.rightsList}>
            <li>
              Receive information related to care in a manner that is clear and
              understandable
            </li>
            <li>
              Access interpretation or translation services at no cost when
              needed
            </li>
            <li>
              Receive assistance for vision, hearing, speech, or cognitive
              limitations
            </li>
            <li>
              Identify a support person or caregiver to assist with
              communication and decision-making
            </li>
            <li>
              Request notification of a chosen individual when admitted or
              receiving extended care
            </li>
          </ul>

          <h3 className={styles.sectionSubtitle}>Informed Decision-Making</h3>
          <p>You have the right to:</p>

          <ul className={styles.rightsList}>
            <li>
              Receive information about diagnoses, proposed treatments, risks,
              benefits, alternatives, and expected outcomes
            </li>
            <li>
              Participate in decisions regarding care, taking personal values
              and preferences into account
            </li>
            <li>Request or decline treatments as permitted by law</li>
            <li>
              Decline participation in research, Havenwell Health trials, or
              donation programs without impact on access to care
            </li>
            <li>
              Provide consent before photographs, recordings, or media are
              created for non-Havenwell Health purposes
            </li>
          </ul>

          <h3 className={styles.sectionSubtitle}>Visitation and Support</h3>
          <p>You have the right to:</p>

          <ul className={styles.rightsList}>
            <li>
              Determine whether visitors are permitted during the course of care
            </li>
            <li>
              Identify visitors or support persons regardless of legal
              relationship
            </li>
            <li>
              Designate a support person to assist or act on the patient&apos;s
              behalf when necessary
            </li>
            <li>
              Request reasonable visitation accommodations when appropriate
            </li>
            <li>
              Request a room transfer when it supports patient well-being and is
              available
            </li>
          </ul>

          <p className={styles.bodyText}>
            Visitation may be limited when required to maintain safety or
            quality of care.
          </p>

          <h3 className={styles.sectionSubtitle}>Advance Directives</h3>
          <p>You have the right to:</p>

          <ul className={styles.rightsList}>
            <li>
              Create advance directives or healthcare decision-making documents
            </li>
            <li>Expect advance directives to be followed as required by law</li>
            <li>Discuss ethical concerns related to treatment decisions</li>
          </ul>

          <h3 className={styles.sectionSubtitle}>
            Care Planning and Transitions
          </h3>

          <ul className={styles.rightsList}>
            <li>Receive a medical screening evaluation</li>
            <li>Participate in the development of a care plan</li>
            <li>Receive instructions related to follow-up care</li>
            <li>
              Be transferred to another facility when care needs cannot be met,
              with explanation of options
            </li>
          </ul>

          <h3 className={styles.sectionSubtitle}>Quality and Safety</h3>

          <ul className={styles.rightsList}>
            <li>Receive emergency care without unnecessary delay</li>
            <li>
              Receive care in an environment free from abuse, neglect, or
              harassment
            </li>
            <li>Receive care from qualified healthcare professionals</li>
            <li>Know the names and roles of individuals involved in care</li>
            <li>Request consultation or second opinions at personal expense</li>
            <li>Receive appropriate pain assessment and management</li>
            <li>
              Be free from restraints or seclusion unless medically necessary
            </li>
          </ul>

          <h3 className={styles.sectionSubtitle}>
            Privacy and Confidentiality
          </h3>

          <ul className={styles.rightsList}>
            <li>
              Have personal and medical information kept confidential as
              required by law
            </li>
            <li>Discuss care in private settings</li>
            <li>
              Receive written information regarding use and disclosure of health
              data
            </li>
            <li>Review and request copies of medical records when permitted</li>
          </ul>

          <h3 className={styles.sectionSubtitle}>
            Billing and Financial Information
          </h3>

          <ul className={styles.rightsList}>
            <li>
              Receive clear explanations of charges and billing statements
            </li>
            <li>
              Request information regarding payment options or financial
              assistance
            </li>
          </ul>

          {/* ---------------- Patient Responsibilities ---------------- */}
          <h2 className={styles.sectionTitle}>Patient Responsibilities</h2>

          <p className={styles.bodyText}>
            Patients and caregivers share responsibility for supporting safe,
            effective care.
          </p>

          <h3 className={styles.sectionSubtitle}>
            Providing Accurate Information
          </h3>

          <ul className={styles.rightsList}>
            <li>Provide complete and accurate health information</li>
            <li>Report changes in condition or symptoms</li>
            <li>
              Share advance directives or healthcare documents when applicable
            </li>
            <li>Identify individuals involved in care decisions</li>
          </ul>

          <h3 className={styles.sectionSubtitle}>Respect and Safety</h3>

          <ul className={styles.rightsList}>
            <li>Respect the rights, privacy, and safety of others</li>
            <li>Refrain from threatening or disruptive behavior</li>
            <li>Follow Havenwell Health policies and safety procedures</li>
          </ul>

          <h3 className={styles.sectionSubtitle}>Refusal of Care</h3>

          <p className={styles.bodyText}>
            Patients who decline recommended care accept responsibility for the
            outcomes of that decision, as permitted by law.
          </p>

          <h3 className={styles.sectionSubtitle}>Financial Responsibility</h3>

          <p className={styles.bodyText}>
            Patients are responsible for payment of services received in
            accordance with Havenwell Health billing policies.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
