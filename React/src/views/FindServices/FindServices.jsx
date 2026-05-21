import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FindServices.module.css";
import { Phone, CheckCircle, Building, Star } from "lucide-react";
import { fetchDoctors } from "../../services/doctorsService";
import Footer from "../Footer/Footer";

export default function FindServices() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors()
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error("Failed to load doctors:", error));
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heroPattern} aria-hidden="true" />

        <div className={styles.patientHero}>
          <div className={styles.patientHeroText}>
            <p className={styles.patientHeroTitle}>Find a Doctor</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className={styles.breadcrumbSection}>
        <div className={styles.breadcrumbNav}>
          <Link to="/" className={styles.breadcrumbLink}>
            Home
          </Link>

          <span className={styles.breadcrumbSeparator}>/</span>

          <span className={styles.breadcrumbLink}>Find a Doctor</span>
        </div>
      </div>

      <section className={styles.container}>
        {doctors.map((doctor) => (
          <div className={styles.card} key={doctor.doctorId}>
            <img
              className={styles.doctorImage}
              src={doctor.imageUrl}
              alt={doctor.name}
            />

            {/* Name + Credential */}
            <div className={styles.nameNTitle}>
              <h2 className={styles.name}>
                {doctor.name}, {doctor.credential}
              </h2>

              <p className={styles.specialty}>{doctor.specialty}</p>
            </div>

            {/* Rating */}
            <div className={styles.ratingBlock}>
              <div className={styles.starRow}>
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={
                      index < Math.round(doctor.rating)
                        ? styles.starFilled
                        : styles.starEmpty
                    }
                  />
                ))}
              </div>

              <div className={styles.ratingText}>
                {doctor.rating} out of 5<span> ({doctor.reviews} ratings)</span>
              </div>
            </div>

            <hr className={styles.divider} />

            {/* Address from Database */}
            <div className={styles.infoRow}>
              <Building className={styles.icon} />

              <div className={styles.locationBlock}>
                <span className={styles.locationName}>{doctor.location}</span>

                <span>
                  {doctor.streetAddress} {doctor.cityStateZip}
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className={styles.infoRow}>
              <Phone className={styles.icon} />

              <a
                href={`tel:${doctor.phoneNumber}`}
                className={styles.phoneNumber}
              >
                {doctor.phoneNumber}
              </a>
            </div>

            {/* Accepting Patients */}
            <div className={styles.infoRow}>
              <CheckCircle
                className={`${styles.icon} ${styles.availabilityIcon}`}
              />

              <span>
                {doctor.acceptingNewPatients
                  ? "Accepting New Patients"
                  : "Not Accepting New Patients"}
              </span>
            </div>

            {/* Schedule Button */}
            <Link
              to={`/book-appointment/${doctor.doctorId}`}
              className={styles.button}
            >
              Schedule Visit
            </Link>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}
