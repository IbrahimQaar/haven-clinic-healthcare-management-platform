import { Link } from "react-router-dom";
import styles from "./MyAppointments.module.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";

// Appointment API services
import {
  getActiveAppointment,
  getCancelledAppointments,
  cancelAppointment,
} from "../../services/appointmentsService";

import { fetchDoctors } from "../../services/doctorsService";

// Icons
import { Calendar, Clock, MapPin, CheckCircle } from "lucide-react";

export default function MyAppointments() {
  const { user } = useContext(UserContext);

  const [activeAppointment, setActiveAppointment] = useState(null);
  const [cancelledAppointments, setCancelledAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  // Load active + cancelled appointments from backend
  function loadAppointments() {
    getActiveAppointment()
      .then((res) => setActiveAppointment(res.data))
      .catch((err) => console.error(err));

    getCancelledAppointments()
      .then((res) => setCancelledAppointments(res.data))
      .catch((err) => console.error(err));
  }

  // Runs when user is login in
  useEffect(() => {
    if (user) {
      loadAppointments();

      // load doctors data
      fetchDoctors()
        .then((res) => setDoctors(res.data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  // Find doctor info by doctorId
  function getDoctorById(id) {
    return doctors.find((doc) => doc.doctorId === id);
  }

  // Handle cancel button click
  async function handleCancel(appointmentId) {
    try {
      await cancelAppointment(appointmentId);
      // refresh UI with updated data
      loadAppointments();
    } catch (error) {
      console.error("Cancel failed:", error);
    }
  }

  function formatDate(date) {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  function formatTime(time) {
    const [hour, minute] = time.split(":");

    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);

    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  return (
    <div>
      {/* Hero */}
      <div className={styles.heroContainer}>
        <div className={styles.heroPattern} />

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroTitle}>My Appointments</p>

            <p className={styles.pageSubtitle}>
              View and manage your upcoming and past appointments.
            </p>

            <Link to="/services" className={styles.bookLink}>
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Upcoming Appointment */}
      <div className={styles.pageHeader}>
        <p className={styles.pageTitle}>Upcoming Appointment</p>
      </div>

      <section className={styles.section}>
        {activeAppointment ? (
          (() => {
            const doctor = getDoctorById(activeAppointment.doctorId);

            return (
              <div className={styles.upcomingCard}>
                <img
                  className={styles.doctorImage}
                  src={doctor?.imageUrl}
                  alt={doctor?.name}
                />

                <div className={styles.info}>
                  <h3 className={styles.name}>{doctor?.name}</h3>
                  <p className={styles.specialty}>{doctor?.specialty}</p>

                  <div className={styles.metaRow}>
                    <MapPin size={18} className={styles.icon} />
                    <div>
                      <div>{doctor?.location}</div>
                      <div>
                        {doctor?.streetAddress}, {doctor?.cityStateZip}
                      </div>
                    </div>
                  </div>

                  <div className={styles.metaRow}>
                    <Calendar size={18} className={styles.icon} />
                    <span>{formatDate(activeAppointment.appointmentDate)}</span>

                    <Clock size={18} className={styles.icon} />
                    <span>{formatTime(activeAppointment.appointmentTime)}</span>
                  </div>
                </div>

                <div className={styles.rightSide}>
                  <div className={styles.scheduledBadge}>
                    <CheckCircle size={16} />
                    Scheduled
                  </div>

                  <button
                    className={styles.cancelBtn}
                    onClick={() =>
                      handleCancel(activeAppointment.appointmentId)
                    }
                  >
                    Cancel Appointment
                  </button>
                </div>
              </div>
            );
          })()
        ) : (
          <p className={styles.noAppointment}>
            You do not have any upcoming appointments.
          </p>
        )}
      </section>

      <div className={styles.sectionDivider}></div>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Appointment History</h2>

        <div className={styles.historyGrid}>
          {cancelledAppointments.length === 0 ? (
            <p>No past appointments</p>
          ) : (
            cancelledAppointments.map((appt) => {
              const doctor = getDoctorById(appt.doctorId);

              return (
                <div key={appt.appointmentId} className={styles.historyCard}>
                  <img
                    className={styles.historyImage}
                    src={doctor?.imageUrl}
                    alt={doctor?.name}
                  />

                  <div>
                    <h3>{doctor?.name}</h3>
                    <p>{doctor?.specialty}</p>

                    <div className={styles.metaRow}>
                      <MapPin size={16} className={styles.icon} />
                      <div>
                        <div>{doctor?.location}</div>
                        <div>
                          {doctor?.streetAddress}, {doctor?.cityStateZip}
                        </div>
                      </div>
                    </div>

                    <div className={styles.metaRow}>
                      <Calendar size={16} className={styles.icon} />
                      <span>{formatDate(appt.appointmentDate)}</span>

                      <Clock size={16} className={styles.icon} />
                      <span>{formatTime(appt.appointmentTime)}</span>
                    </div>
                  </div>

                  <div className={styles.cancelledBadge}>Cancelled</div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
