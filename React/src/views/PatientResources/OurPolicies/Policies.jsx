import styles from "./Policies.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function Policies() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heroPattern} aria-hidden="true" />

        <div className={styles.policyHero}>
          <div className={styles.policyHeroText}>
            <p className={styles.policyHeroTitle}>Patient Rights & Policies</p>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
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

          <span className={styles.breadcrumbCurrent}>Policies</span>
        </div>
      </div>
      <section className={styles.policySection}>
        <div className={styles.policyContainer}>
          <div className={styles.policyBlock}>
            <h2 className={styles.policyTitle}>
              Patient Rights & Responsibilities
            </h2>

            <h3 className={styles.policySubTitle}>Your Rights as a Patient</h3>

            <p className={styles.policyText}>
              All patients receiving care are entitled to the following rights
              in accordance with applicable federal and state regulations and
              standards governing patient care and safety.
            </p>

            <ul className={styles.policyList}>
              <li>
                Receive safe, high-quality care delivered with dignity, respect,
                and without discrimination
              </li>

              <li>
                Receive information regarding diagnoses, treatment options,
                expected outcomes, and known risks in understandable terms
              </li>

              <li>
                Provide informed consent before procedures or treatment and
                withdraw consent when permitted by law
              </li>

              <li>
                Designate a support person to participate in care decisions and
                access information as permitted
              </li>

              <li>
                Access medical records and request information related to
                treatment and services received
              </li>

              <li>
                Receive care in an environment free from abuse, neglect,
                exploitation, or unnecessary restraint
              </li>

              <li>
                Receive clear explanations regarding billing information and
                financial responsibilities
              </li>

              <li>
                Submit complaints or grievances without retaliation or impact on
                care
              </li>
            </ul>

            <h3 className={styles.policySubTitle}>
              Your Responsibilities as a Patient
            </h3>

            <p className={styles.policyText}>
              Patients and families play an important role in supporting safe
              and effective care delivery.
            </p>

            <ul className={styles.policyList}>
              <li>
                Provide complete and accurate information regarding medical
                history, medications, allergies, and symptoms
              </li>

              <li>
                Ask questions whenever instructions, diagnoses, or treatment
                plans are unclear
              </li>

              <li>
                Follow agreed treatment plans or communicate concerns directly
                with the care team
              </li>

              <li>
                Treat staff, patients, and visitors with courtesy and respect
              </li>

              <li>
                Keep scheduled appointments and notify the care team when
                cancellations or rescheduling are necessary
              </li>

              <li>
                Provide updated insurance and financial information when
                applicable
              </li>

              <li>
                Follow safety requirements, visitation guidelines, and facility
                policies
              </li>
            </ul>
          </div>

          <div className={styles.policyBlock}>
            <h2 className={styles.policyTitle}>
              Notice of Privacy Practices (HIPAA)
            </h2>

            <p className={styles.policyText}>
              This notice describes how medical information may be used,
              disclosed, and protected as part of patient care and healthcare
              operations.
            </p>

            <h3 className={styles.policySubTitle}>
              Information We May Collect
            </h3>

            <ul className={styles.policyList}>
              <li>
                Personal and contact information including name, date of birth,
                address, and phone number
              </li>

              <li>
                Medical history, diagnoses, treatment records, laboratory
                results, and imaging studies
              </li>

              <li>Insurance, billing, and claims-related information</li>

              <li>
                Information submitted through scheduling services and patient
                support systems
              </li>
            </ul>

            <h3 className={styles.policySubTitle}>
              How Information May Be Used
            </h3>

            <p className={styles.policyText}>
              <strong>Treatment —</strong> Coordination and management of care
              among physicians, nurses, specialists, and healthcare
              professionals.
            </p>

            <p className={styles.policyText}>
              <strong>Payment —</strong> Billing activities, insurance
              verification, and claims processing.
            </p>

            <p className={styles.policyText}>
              <strong>Healthcare Operations —</strong> Quality improvement,
              accreditation, education, and patient safety activities.
            </p>

            <h3 className={styles.policySubTitle}>Your Privacy Rights</h3>

            <ul className={styles.policyList}>
              <li>Request access to medical records</li>

              <li>Request corrections to inaccurate information</li>

              <li>Request disclosure records when applicable</li>

              <li>Request restrictions on information sharing</li>

              <li>Request confidential communications</li>
            </ul>

            <p className={styles.policyText}>
              Personal health information is not sold and is not shared for
              marketing purposes without authorization.
            </p>
          </div>

          <div className={styles.policyBlock}>
            <h2 className={styles.policyTitle}>
              Non-Discrimination & Language Assistance
            </h2>

            <p className={styles.policyText}>
              Services are provided without discrimination and in accordance
              with applicable federal and state civil rights requirements.
            </p>

            <h3 className={styles.policySubTitle}>
              Language Assistance Services
            </h3>

            <ul className={styles.policyList}>
              <li>In-person interpretation services when available</li>

              <li>Telephone interpretation support available at all times</li>

              <li>Video interpretation services in clinical settings</li>

              <li>Translation support for key patient documents</li>
            </ul>

            <h3 className={styles.policySubTitle}>
              Accessibility & Disability Accommodations
            </h3>

            <ul className={styles.policyList}>
              <li>Sign language interpretation services</li>

              <li>Alternative document formats upon request</li>

              <li>Accessibility accommodations across facilities</li>
            </ul>
          </div>

          <div className={styles.policyBlock}>
            <h2 className={styles.policyTitle}>
              Billing & Financial Responsibility
            </h2>

            <h3 className={styles.policySubTitle}>Understanding Your Bill</h3>

            <p className={styles.policyText}>
              Following care or discharge, patients receive itemized statements
              outlining services provided and associated charges.
            </p>

            <p className={styles.policyText}>
              Care involving multiple providers may result in separate
              statements from participating providers or departments.
            </p>

            <ul className={styles.policyList}>
              <li>Deductibles</li>

              <li>Copayments</li>

              <li>Coinsurance</li>

              <li>Non-covered services</li>
            </ul>

            <h3 className={styles.policySubTitle}>Financial Assistance</h3>

            <p className={styles.policyText}>
              Financial assistance programs and payment arrangements may be
              available for qualifying patients. Emergency care is not denied
              because of inability to pay.
            </p>
          </div>

          <div className={styles.policyBlock}>
            <h2 className={styles.policyTitle}>Patient Visitation Policy</h2>

            <p className={styles.policyText}>
              Family members and support persons play an important role in
              patient care, recovery, and wellbeing.
            </p>

            <ul className={styles.policyList}>
              <li>Patients may designate visitors of their choosing</li>

              <li>Quiet hours are observed from 9:00 PM to 7:00 AM</li>

              <li>Visitor limits may apply based on care settings</li>

              <li>Visitors are expected to follow facility procedures</li>

              <li>
                Visitors experiencing illness symptoms should postpone visits
              </li>

              <li>Children must remain under adult supervision</li>
            </ul>
          </div>

          <div className={styles.policyBlock}>
            <h2 className={styles.policyTitle}>
              Photography & Social Media Policy
            </h2>

            <p className={styles.policyText}>
              Patient privacy and confidentiality must be respected throughout
              all care environments.
            </p>

            <ul className={styles.policyList}>
              <li>
                Photography and recording in patient care areas may require
                permission
              </li>

              <li>
                Personal photographs should avoid capturing others without
                consent
              </li>

              <li>
                Staff may not share patient information through personal
                accounts
              </li>

              <li>
                Social media platforms should not be used for emergencies or
                urgent care concerns
              </li>
            </ul>
          </div>

          <div className={styles.policyBlock}>
            <h3 className={styles.policySubTitle}>Reporting Concerns</h3>

            <p className={styles.policyText}>
              Patient concerns, complaints, and feedback are reviewed seriously
              and handled through established review processes.
            </p>

            <ul className={styles.policyList}>
              <li>Speak directly with nurses, physicians, or care teams</li>

              <li>Contact Patient Relations</li>

              <li>Submit written feedback through available channels</li>
            </ul>

            <h3 className={styles.policySubTitle}>Review Process</h3>

            <ul className={styles.policyList}>
              <li>Complaints are reviewed promptly</li>

              <li>Investigations remain confidential</li>

              <li>Filing concerns does not affect access to care</li>
            </ul>

            <p className={styles.policyFooter}>
              Policies are reviewed periodically and updated as needed to
              support patient care, operational standards, and regulatory
              requirements.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
