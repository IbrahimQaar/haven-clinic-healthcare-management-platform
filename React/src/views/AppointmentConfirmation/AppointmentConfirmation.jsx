import { Link } from "react-router-dom";
import styles from "./AppointmentConfirmation.module.css";
import { CheckCircle } from "lucide-react";

export default function AppointmentConfirmation() {
  return (
    <div>
      {/* Confirmation Card */}
      <section className={styles.section}>
        <div className={styles.card}>
          <CheckCircle size={64} className={styles.icon} />

          <h2 className={styles.title}>
            Thank You for Scheduling Your Appointment!
          </h2>

          <p className={styles.description}>
            Your appointment has been successfully scheduled with Havenwell
            Health. You can view or manage your appointment anytime from your
            appointments page.
          </p>

          <div className={styles.notice}>
            Please arrive at least <strong>15 minutes early</strong> and bring
            your insurance card and identification.
          </div>

          <Link to="/my-appointments" className={styles.button}>
            Go to My Appointments
          </Link>
        </div>
      </section>
    </div>
  );
}
