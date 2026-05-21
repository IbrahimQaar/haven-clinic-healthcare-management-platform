// React hooks
import { useEffect, useState } from "react";

// React Router hook
import { useParams, useNavigate } from "react-router-dom";

import {
  createAppointment,
  getAvailableTimes,
} from "../../services/appointmentsService";

import { fetchDoctorById } from "../../services/doctorsService";

import { MapPin, Phone, Clock, CheckCircle } from "lucide-react";

import styles from "./BookAppointment.module.css";

export default function BookAppointment() {
  const { doctorId } = useParams();

  const navigate = useNavigate();

  const [doctor, setDoctor] = useState(null);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    newPatient: null,
    insurance: "",
  });

  const [errors, setErrors] = useState({});

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [selectedTime, setSelectedTime] = useState(null);

  const [timeSlots, setTimeSlots] = useState([]);

  // Fetch doctor
  useEffect(() => {
    fetchDoctorById(doctorId).then((res) => {
      setDoctor(res.data);
    });
  }, [doctorId]);

  // Fetch backend time slots
  useEffect(() => {
    const formattedDate = selectedDate.toISOString().split("T")[0];

    getAvailableTimes(formattedDate)
      .then((res) => {
        setTimeSlots(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [selectedDate]);

  function updateField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  async function handleCreateAppointment() {
    try {
      if (!selectedTime) {
        setErrors({
          time: "Please select a time",
        });

        return;
      }

      const appointmentData = {
        doctorId: Number(doctorId),

        appointmentDate: selectedDate.toISOString().split("T")[0],

        appointmentTime: selectedTime,

        fullName: form.fullName,

        phoneNumber: form.phoneNumber,

        email: form.email,

        insuranceProvider: form.insurance,

        newPatient: form.newPatient,
      };

      await createAppointment(appointmentData);

      navigate("/appointment-confirmation");
    } catch (error) {
      console.error(error);

      if (error.response && error.response.data) {
        const backendErrors = error.response.data.errors;

        if (backendErrors) {
          const formattedErrors = {};

          backendErrors.forEach((err) => {
            formattedErrors[err.field] = err.defaultMessage;
          });

          setErrors(formattedErrors);
        } else {
          alert(
            "You have an active appointment. Manage your booking before scheduling a new one",
          );
        }
      }
    }
  }

  if (!doctor) return <p>Loading...</p>;

  const year = selectedDate.getFullYear();

  const month = selectedDate.getMonth();

  const monthName = selectedDate.toLocaleString("default", {
    month: "long",
  });

  const firstDay = new Date(year, month, 1).getDay();

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const now = new Date();

  const calendarDays = [];

  // Empty cells
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  // Create days
  for (let d = 1; d <= daysInMonth; d++) {
    const currentDay = new Date(year, month, d);

    currentDay.setHours(0, 0, 0, 0);

    const isToday =
      currentDay.getDate() === now.getDate() &&
      currentDay.getMonth() === now.getMonth() &&
      currentDay.getFullYear() === now.getFullYear();

    calendarDays.push({
      day: d,

      isPast: currentDay < today,

      isSunday: currentDay.getDay() === 0,

      afterHours: isToday && now.getHours() >= 17,
    });
  }

  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}></div>

      <div className={styles.layout}>
        <div className={styles.doctorCard}>
          <div className={styles.imageWrapper}>
            <img
              src={doctor.imageUrl}
              alt={doctor.name}
              className={styles.doctorImage}
            />
          </div>

          <h2>{doctor.name}</h2>

          <h3 className={styles.specialty}>{doctor.specialty}</h3>

          <div className={styles.divider}></div>

          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <MapPin className={styles.icon} />

              {doctor.location}
            </li>

            <li className={styles.infoItem}>
              <Phone className={styles.icon} />

              {doctor.phoneNumber}
            </li>

            <li className={styles.infoItem}>
              <Clock className={styles.icon} />

              {doctor.availability}
            </li>

            {doctor.acceptingNewPatients && (
              <li className={styles.infoItem}>
                <CheckCircle className={`${styles.icon} ${styles.green}`} />
                Accepting New Patients
              </li>
            )}
          </ul>
        </div>

        <div className={styles.scheduler}>
          <h2 className={styles.schedulerTitle}>
            Select a time for your Office Visit appointment
          </h2>

          <p className={styles.schedulerSubtitle}>
            Select a date and time for your appointment with {doctor.name}.
          </p>

          <div className={styles.calendar}>
            <div className={styles.calendarHeader}>
              {monthName} {year}
            </div>

            <div className={styles.weekdays}>
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>

            <div className={styles.days}>
              {calendarDays.map((item, i) =>
                item ? (
                  <button
                    key={i}
                    disabled={item.isPast || item.isSunday || item.afterHours}
                    className={
                      item.day === selectedDate.getDate()
                        ? styles.selectedDay
                        : item.isPast || item.isSunday || item.afterHours
                          ? styles.disabledDay
                          : styles.day
                    }
                    onClick={() => {
                      setSelectedDate(new Date(year, month, item.day));

                      setSelectedTime(null);
                    }}
                  >
                    {item.day}
                  </button>
                ) : (
                  <div key={i}></div>
                ),
              )}
            </div>
          </div>

          <div className={styles.timeSlots}>
            {timeSlots.length === 0 ? (
              <p className={styles.noTimes}>
                Appointment scheduling for today has closed. Please choose an
                upcoming date!
              </p>
            ) : (
              timeSlots.map((time) => (
                <button
                  key={time}
                  className={
                    selectedTime === time ? styles.timeActive : styles.timeBtn
                  }
                  onClick={() => setSelectedTime(time)}
                >
                  {new Date(`1970-01-01T${time}`).toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
      <section className={styles.form}>
        {/* FORM SECTION */}
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Patient Information</h2>

          <div className={styles.formRow}>
            <div className={styles.fieldGroup}>
              <input
                type="text"
                placeholder="Jane Smith"
                className={styles.input}
                value={form.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
              />
              {errors.fullName && (
                <p className={styles.errorText}>{errors.fullName}</p>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <input
                type="tel"
                placeholder="(555) 555-5555"
                className={styles.input}
                value={form.phoneNumber}
                onChange={(e) => updateField("phoneNumber", e.target.value)}
              />
              {errors.phoneNumber && (
                <p className={styles.errorText}>{errors.phoneNumber}</p>
              )}
            </div>

            <div className={styles.fieldGroup}>
              <input
                type="email"
                placeholder="jane.smith@email.com"
                className={styles.input}
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
              />
              {errors.email && (
                <p className={styles.errorText}>{errors.email}</p>
              )}
            </div>

            <div className={styles.radioRow}>
              <span className={styles.newPatient}>Are you a new patient?</span>
              <label>
                <input
                  type="radio"
                  onChange={() => updateField("newPatient", true)}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  onChange={() => updateField("newPatient", false)}
                />{" "}
                No
              </label>
              {errors.newPatient && (
                <p className={styles.errorText}>{errors.newPatient}</p>
              )}
            </div>
          </div>

          <div className={styles.insuranceRow}>
            <select
              className={styles.select}
              value={form.insurance}
              onChange={(e) => updateField("insurance", e.target.value)}
            >
              <option value="">Insurance Provider</option>
              <option>Aetna</option>
              <option>Blue Cross</option>
              <option>Cigna</option>
              <option>United Healthcare</option>
              <option>Other</option>
              <option>Self Pay</option>
            </select>

            {errors.insurance && (
              <p className={styles.errorText}>{errors.insurance}</p>
            )}
          </div>

          {errors.time && <p className={styles.errorText}>{errors.time}</p>}

          <button
            className={styles.confirmBtn}
            onClick={handleCreateAppointment}
          >
            Confirm Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
