import styles from "./FindLocation.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { MapPin, Phone } from "lucide-react";

export default function FindLocation() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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

      <div>
        <div className={styles.locationSection}>
          {/* Downtown */}
          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>Downtown Care Clinic</p>
              <img
                src="/images/Meeting.png"
                alt="Professional business meeting"
                className={styles.aboutUsImage}
              />
            </div>

            <div className={styles.otherDetails}>
              <div className={styles.detailRow}>
                <MapPin className={styles.detailIcon} />
                <div className={styles.addressBlock}>
                  <span className={styles.locationAddress}>
                    125 Riverwalk Avenue
                  </span>
                  <span className={styles.locationAddress}>Suite 355</span>
                  <span className={styles.locationAddress}>
                    Columbus, OH 43215
                  </span>

                  <Link to="#" className={styles.getDirections}>
                    Get Directions
                  </Link>
                </div>
              </div>

              <div className={styles.detailRow}>
                <Phone className={styles.detailIcon} />
                <span className={styles.phoneNumber}>(614) 412-2031</span>
              </div>
            </div>
          </div>

          {/* Upper Arlington */}
          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>Upper Arlington Care Clinic</p>
            </div>

            <div className={styles.otherDetails}>
              <div className={styles.detailRow}>
                <MapPin className={styles.detailIcon} />
                <div className={styles.addressBlock}>
                  <span className={styles.locationAddress}>
                    2100 Riverside Commons Drive
                  </span>
                  <span className={styles.locationAddress}>Suite 410</span>
                  <span className={styles.locationAddress}>
                    Columbus, OH 43221
                  </span>

                  <Link to="#" className={styles.getDirections}>
                    Get Directions
                  </Link>
                </div>
              </div>

              <div className={styles.detailRow}>
                <Phone className={styles.detailIcon} />
                <span className={styles.phoneNumber}>(614) 782-3920</span>
              </div>
            </div>
          </div>

          {/* Easton */}
          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>Easton Care Center</p>
            </div>

            <div className={styles.otherDetails}>
              <div className={styles.detailRow}>
                <MapPin className={styles.detailIcon} />
                <div className={styles.addressBlock}>
                  <span className={styles.locationAddress}>
                    160 Marketplace Promenade
                  </span>
                  <span className={styles.locationAddress}>
                    Columbus, OH 43219
                  </span>

                  <Link to="#" className={styles.getDirections}>
                    Get Directions
                  </Link>
                </div>
              </div>

              <div className={styles.detailRow}>
                <Phone className={styles.detailIcon} />
                <span className={styles.phoneNumber}>(614) 344-7811</span>
              </div>
            </div>
          </div>

          {/* Dublin */}
          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>Dublin Neighborhood Clinic</p>
            </div>

            <div className={styles.otherDetails}>
              <div className={styles.detailRow}>
                <MapPin className={styles.detailIcon} />
                <div className={styles.addressBlock}>
                  <span className={styles.locationAddress}>
                    5500 Emerald Park Road
                  </span>
                  <span className={styles.locationAddress}>Suite 300</span>
                  <span className={styles.locationAddress}>
                    Dublin, OH 43017
                  </span>

                  <Link to="#" className={styles.getDirections}>
                    Get Directions
                  </Link>
                </div>
              </div>

              <div className={styles.detailRow}>
                <Phone className={styles.detailIcon} />
                <span className={styles.phoneNumber}>(614) 512-6409</span>
              </div>
            </div>
          </div>

          {/* Grandview */}
          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>Grandview Care Clinic</p>
            </div>

            <div className={styles.otherDetails}>
              <div className={styles.detailRow}>
                <MapPin className={styles.detailIcon} />
                <div className={styles.addressBlock}>
                  <span className={styles.locationAddress}>
                    1280 Grandview Terrace
                  </span>
                  <span className={styles.locationAddress}>
                    Columbus, OH 43212
                  </span>

                  <Link to="#" className={styles.getDirections}>
                    Get Directions
                  </Link>
                </div>
              </div>

              <div className={styles.detailRow}>
                <Phone className={styles.detailIcon} />
                <span className={styles.phoneNumber}>(614) 601-9083</span>
              </div>
            </div>
          </div>

          {/* Westerville */}
          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>Westerville Care Clinic</p>
            </div>

            <div className={styles.otherDetails}>
              <div className={styles.detailRow}>
                <MapPin className={styles.detailIcon} />
                <div className={styles.addressBlock}>
                  <span className={styles.locationAddress}>
                    1200 Uptown Crossings
                  </span>
                  <span className={styles.locationAddress}>Suite 215</span>
                  <span className={styles.locationAddress}>
                    Westerville, OH 43081
                  </span>

                  <Link to="#" className={styles.getDirections}>
                    Get Directions
                  </Link>
                </div>
              </div>

              <div className={styles.detailRow}>
                <Phone className={styles.detailIcon} />
                <span className={styles.phoneNumber}>(614) 336-3319</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
