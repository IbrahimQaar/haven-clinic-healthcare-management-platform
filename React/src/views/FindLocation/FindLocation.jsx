import styles from "./FindLocation.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
// import { MapPin } from "lucide-react";
import { fetchDoctors } from "../../services/doctorsService";

export default function FindLocation() {
  const [locations, setLocations] = useState([]);

  const hospitalImages = {
    0: "/images/Hospital1.png",
    1: "/images/Hospital2.png",
    2: "/images/Hospital3.png",
    3: "/images/Hospital4.png",
    4: "/images/Hospital5.png",
    5: "/images/Hospital6.png",
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    fetchDoctors()
      .then((res) => {
        const doctors = res.data;

        // Remove duplicate locations
        const uniqueLocations = Array.from(
          new Map(
            doctors.map((doc) => [
              doc.location,
              {
                hospitalName: doc.location,
                streetAddress: doc.streetAddress,
                cityStateZip: doc.cityStateZip,
              },
            ]),
          ).values(),
        );

        setLocations(uniqueLocations);
      })
      .catch((err) => console.error("Failed to load locations", err));
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heroPattern} aria-hidden="true" />

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <p className={styles.heroTitle}>Our Locations</p>
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

          <Link to="/patient-resources" className={styles.breadcrumbLink}>
            Find location
          </Link>
        </div>
      </div>

      {/* Locations */}
      <div className={styles.locationSection}>
        {locations.map((location, index) => (
          <div className={styles.locationCard} key={location.hospitalName}>
            <div className={styles.cardContent}>
              <img
                src={hospitalImages[index] || "/images/Hospital1.png"}
                alt={location.hospitalName}
                className={styles.locationImage}
              />

              <p className={styles.locationName}>{location.hospitalName}</p>

              <div className={styles.detailRow}>
                {/* <MapPin className={styles.detailIcon} /> */}

                <div className={styles.addressBlock}>
                  <span className={styles.locationAddress}>
                    {location.streetAddress}, {location.cityStateZip}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
