import { Link } from "react-router-dom";
import styles from "./MyAppointments.module.css";

import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import {
  getAppointmentsByUserId,
  cancelAppointment,
} from "../../services/appointmentsService";
import { fetchDoctors } from "../../services/doctorsService";

import { Calendar, Clock, MapPin, CheckCircle } from "lucide-react";

export default function MyAppointments() {
  const { user } = useContext(UserContext);

  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (user) {
      loadAppointments();
      loadDoctors();
    }
  }, [user]);

  function loadAppointments() {
    getAppointmentsByUserId(user.id)
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error(err));
  }

  function loadDoctors() {
    fetchDoctors()
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error(err));
  }

  function getDoctorById(id) {
    return doctors.find((doc) => doc.doctorId === id);
  }

  const activeAppointment = appointments.find(
    (appt) => appt.status === "SCHEDULED",
  );

  const cancelledAppointments = appointments.filter(
    (appt) => appt.status === "CANCELED",
  );

  async function handleCancel(appointmentId) {
    try {
      await cancelAppointment(appointmentId);

      setAppointments((prev) =>
        prev.map((appt) =>
          appt.appointmentId === appointmentId
            ? { ...appt, status: "CANCELED" }
            : appt,
        ),
      );
    } catch (error) {
      console.error("Cancel failed:", error);
    }
  }

  function formatDate(date) {
    const parsedDate = new Date(date);

    return parsedDate.toLocaleDateString("en-US", {
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

      {/* <h1>My Appointments</h1> */}

      <div className={styles.pageHeader}>
        <p className={styles.pageTitle}>Upcoming Appointment</p>
      </div>

      {/* Upcoming Appointment */}
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
                    <Calendar size={18} className={styles.icon} />
                    <span>{formatDate(activeAppointment.appointmentDate)}</span>

                    <Clock size={18} className={styles.icon} />
                    <span>{formatTime(activeAppointment.appointmentTime)}</span>
                  </div>

                  <div className={styles.metaRow}>
                    <MapPin size={18} className={styles.icon} />
                    <span>{doctor?.location}</span>
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

      {/* Appointment History */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Appointment History</h2>

        <div className={styles.historyGrid}>
          {cancelledAppointments.length === 0 ? (
            <p>No cancelled appointments.</p>
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
