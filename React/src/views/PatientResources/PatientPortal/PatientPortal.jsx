import {
  CalendarCheck,
  FileText,
  MessageSquare,
  CreditCard,
  Pill,
  HeartPulse,
  FileUp,
  Bell,
  Settings,
} from "lucide-react";
import { useEffect } from "react";
import styles from "./PatientPortal.module.css";

export default function PatientPortal() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className={styles.portalPage}>
        <div className={styles.mainContainer}>
          <div className={styles.heroPattern} aria-hidden="true" />

          <div className={styles.patientHero}></div>
        </div>

        <section className={styles.portalSection}>
          <div className={styles.portalIntro}>
            <h1 className={styles.portalHeading}>
              A Better Way to Manage Your Health
              <span className={styles.portalSubheading}>
                Havenwell Health Patient Portal —{" "}
                <span className={styles.comingSoon}>Coming Soon</span>
              </span>
            </h1>

            <p className={styles.portalDescription}>
              We are preparing a secure patient portal designed to give you
              convenient access to your health information. Soon, you will be
              able to manage appointments, review medical records, communicate
              with your care team, and more — all in one place.
            </p>
          </div>

          <div className={styles.portalGrid}>
            {/* Appointments */}
            <div className={styles.portalCard}>
              <div className={styles.cardHeader}>
                <CalendarCheck className={styles.icon} />
                <h3>Appointments</h3>
              </div>
              <hr className={styles.divider} />
              <ul className={styles.cardList}>
                <li>Schedule, reschedule, or cancel appointments</li>
                <li>View upcoming and past appointments</li>
                <li>Request referrals</li>
              </ul>
            </div>

            {/* Medical Records */}
            <div className={styles.portalCard}>
              <div className={styles.cardHeader}>
                <FileText className={styles.icon} />
                <h3>Medical Records</h3>
              </div>
              <hr className={styles.divider} />
              <ul className={styles.cardList}>
                <li>View lab results and test results</li>
                <li>Access visit summaries and doctor notes</li>
                <li>Immunization history</li>
                <li>Allergies and medications list</li>
              </ul>
            </div>

            {/* Messaging */}
            <div className={styles.portalCard}>
              <div className={styles.cardHeader}>
                <MessageSquare className={styles.icon} />
                <h3>Messaging</h3>
              </div>
              <hr className={styles.divider} />
              <ul className={styles.cardList}>
                <li>Secure messaging with your care team</li>
                <li>Ask non-urgent medical questions</li>
                <li>Receive responses from nurses or doctors</li>
              </ul>
            </div>

            {/* Billing & Insurance */}
            <div className={styles.portalCard}>
              <div className={styles.cardHeader}>
                <CreditCard className={styles.icon} />
                <h3>Billing & Insurance</h3>
              </div>
              <hr className={styles.divider} />
              <ul className={styles.cardList}>
                <li>View and pay bills online</li>
                <li>Check insurance information</li>
                <li>Download billing statements</li>
              </ul>
            </div>

            {/* Prescriptions */}
            <div className={styles.portalCard}>
              <div className={styles.cardHeader}>
                <Pill className={styles.icon} />
                <h3>Prescriptions</h3>
              </div>
              <hr className={styles.divider} />
              <ul className={styles.cardList}>
                <li>Request prescription refills</li>
                <li>View current medications</li>
                <li>Pharmacy preferences</li>
              </ul>
            </div>

            {/* Health Tracking */}
            <div className={styles.portalCard}>
              <div className={styles.cardHeader}>
                <HeartPulse className={styles.icon} />
                <h3>Health Tracking</h3>
              </div>
              <hr className={styles.divider} />
              <ul className={styles.cardList}>
                <li>Log vitals like blood pressure, weight, blood sugar</li>
                <li>View health trends over time</li>
                <li>Connect wearable devices like Apple Watch or Fitbit</li>
              </ul>
            </div>

            {/* Documents */}
            <div className={styles.portalCard}>
              <div className={styles.cardHeader}>
                <FileUp className={styles.icon} />
                <h3>Documents</h3>
              </div>
              <hr className={styles.divider} />
              <ul className={styles.cardList}>
                <li>Upload and download medical forms</li>
                <li>View consent forms</li>
                <li>Download referral letters</li>
              </ul>
            </div>

            {/* Notifications */}
            <div className={styles.portalCard}>
              <div className={styles.cardHeader}>
                <Bell className={styles.icon} />
                <h3>Notifications & Alerts</h3>
              </div>
              <hr className={styles.divider} />
              <ul className={styles.cardList}>
                <li>Appointment reminders via text or email</li>
                <li>Lab result alerts</li>
                <li>Medication reminders</li>
              </ul>
            </div>

            {/* Account & Settings */}
            <div className={styles.portalCard}>
              <div className={styles.cardHeader}>
                <Settings className={styles.icon} />
                <h3>Account & Settings</h3>
              </div>
              <hr className={styles.divider} />
              <ul className={styles.cardList}>
                <li>Update personal and contact information</li>
                <li>Manage family members or dependents</li>
                <li>Language preferences</li>
                <li>Two-factor authentication for security</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
