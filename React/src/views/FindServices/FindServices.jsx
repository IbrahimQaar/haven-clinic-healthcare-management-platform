import { useEffect, useState } from "react";
import styles from "./FindServices.module.css";
import { MapPin, Phone, CheckCircle } from "lucide-react";
import { fetchDoctors } from "../../services/doctorsService";
import Footer from "../Footer/Footer";

// Doctor images
import SarahBrown from "../../assets/SarahBrown.png";
import MichaelJohnson from "../../assets/MichaelJohnson.png";
import emmaSmith from "../../assets/emmaSmith.png";
import WilliamDavis from "../../assets/WilliamDavis.png";
import FaozanNarvel from "../../assets/FaozanNarvel.png";
import Olivia from "../../assets/Olivia.png";

// Map doctor_id → image
const doctorImages = {
  1: emmaSmith,
  2: MichaelJohnson,
  3: SarahBrown,
  4: WilliamDavis,
  5: Olivia,
  6: FaozanNarvel,
};

const doctorPhones = {
  1: "(614) 555-2381",
  2: "(614) 555-4729",
  3: "(614) 555-9034",
  4: "(614) 555-6612",
  5: "(614) 555-7845",
  6: "(614) 555-5190",
};

export default function FindServices() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors()
      .then((response) => setDoctors(response.data))
      .catch((error) => console.error("Failed to load doctors:", error));
  }, []);

  return (
    <>
      <section className={styles.container}>
        {doctors.map((doctor) => (
          <div className={styles.card} key={doctor.doctor_id}>
            <img
              className={styles.doctorImage}
              src={doctorImages[doctor.doctor_id]}
              alt={doctor.name}
            />

            <div className={styles.nameNTitle}>
              <h2 className={styles.name}>{doctor.name}</h2>
              <p className={styles.specialty}>{doctor.specialty}</p>
            </div>

            <div className={styles.infoRow}>
              <MapPin className={styles.icon} />
              <span>{doctor.location}</span>
            </div>

            <div className={styles.infoRow}>
              <Phone className={styles.icon} />
              {/* Look inside doctorPhones and return the phone number that matches this doctor’s ID. */}
              <a href={`tel:${doctorPhones[doctor.doctor_id]}`}>
                {doctorPhones[doctor.doctor_id]}
              </a>
            </div>

            <div className={styles.infoRow}>
              <CheckCircle
                className={`${styles.icon} ${styles.availabilityIcon}`}
              />
              <span>
                {doctor.accepting_new_patients
                  ? "Accepting New Patients"
                  : "Not Accepting New Patients"}
              </span>
            </div>

            <button className={styles.button}>Schedule Appointment</button>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}
