import styles from "./FindLocation.module.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { MapPin, Phone } from "lucide-react";

export default function FindLocation() {
  return (
    <>
      <div>
        <div className={styles.locationSection}>
          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>
                Haven Clinic Downtown Medical Center
              </p>
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
                <span className={styles.phoneNumber}>(614) 555-2031</span>
              </div>
            </div>
          </div>

          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>
                Haven Clinic Short North Health Center
              </p>
            </div>

            <div className={styles.otherDetails}>
              <div className={styles.detailRow}>
                <MapPin className={styles.detailIcon} />
                <div className={styles.addressBlock}>
                  <span className={styles.locationAddress}>
                    780 Haven District Street
                  </span>
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
                <span className={styles.phoneNumber}>(614) 555-1142</span>
              </div>
            </div>
          </div>

          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>
                Upper Arlington Medical Plaza
              </p>
            </div>

            <div className={styles.otherDetails}>
              <div className={styles.detailRow}>
                <MapPin className={styles.detailIcon} />
                <div className={styles.addressBlock}>
                  <span className={styles.locationAddress}>
                    2100 Riverside Commons Drive
                  </span>
                  <span className={styles.locationAddress}>Ste 410</span>
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
                <span className={styles.phoneNumber}>(614) 555-3920</span>
              </div>
            </div>
          </div>

          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>Haven Clinic Easton Center</p>
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
                <span className={styles.phoneNumber}>(614) 555-7811</span>
              </div>
            </div>
          </div>

          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>
                Haven Clinic Dublin Health Pavilion
              </p>
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
                <span className={styles.phoneNumber}>(614) 555-6409</span>
              </div>
            </div>
          </div>

          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>Grandview Wellness Center</p>
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
                <span className={styles.phoneNumber}>(614) 555-9083</span>
              </div>
            </div>
          </div>

          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>Polaris Family Care</p>
            </div>

            <div className={styles.otherDetails}>
              <div className={styles.detailRow}>
                <MapPin className={styles.detailIcon} />
                <div className={styles.addressBlock}>
                  <span className={styles.locationAddress}>
                    9000 Northpoint Parkway
                  </span>
                  <span className={styles.locationAddress}>Floor 2</span>
                  <span className={styles.locationAddress}>
                    Columbus, OH 43240
                  </span>

                  <Link to="#" className={styles.getDirections}>
                    Get Directions
                  </Link>
                </div>
              </div>

              <div className={styles.detailRow}>
                <Phone className={styles.detailIcon} />
                <span className={styles.phoneNumber}>(614) 555-2674</span>
              </div>
            </div>
          </div>

          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>
                Haven Clinic Hilliard Wellness Point
              </p>
            </div>

            <div className={styles.otherDetails}>
              <div className={styles.detailRow}>
                <MapPin className={styles.detailIcon} />
                <div className={styles.addressBlock}>
                  <span className={styles.locationAddress}>
                    4100 Heritage Grove Drive
                  </span>
                  <span className={styles.locationAddress}>Unit B</span>
                  <span className={styles.locationAddress}>
                    Hilliard, OH 43026
                  </span>

                  <Link to="#" className={styles.getDirections}>
                    Get Directions
                  </Link>
                </div>
              </div>

              <div className={styles.detailRow}>
                <Phone className={styles.detailIcon} />
                <span className={styles.phoneNumber}>(614) 555-5198</span>
              </div>
            </div>
          </div>

          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>Gahanna Primary Care</p>
            </div>

            <div className={styles.otherDetails}>
              <div className={styles.detailRow}>
                <MapPin className={styles.detailIcon} />
                <div className={styles.addressBlock}>
                  <span className={styles.locationAddress}>
                    2700 Creekside Plaza
                  </span>
                  <span className={styles.locationAddress}>
                    Gahanna, OH 43230
                  </span>

                  <Link to="#" className={styles.getDirections}>
                    Get Directions
                  </Link>
                </div>
              </div>

              <div className={styles.detailRow}>
                <Phone className={styles.detailIcon} />
                <span className={styles.phoneNumber}>(614) 555-7740</span>
              </div>
            </div>
          </div>

          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>
                Haven Clinic Westerville Health Suite
              </p>
            </div>

            <div className={styles.otherDetails}>
              <div className={styles.detailRow}>
                <MapPin className={styles.detailIcon} />
                <div className={styles.addressBlock}>
                  <span className={styles.locationAddress}>
                    1200 Uptown Crossings
                  </span>
                  <span className={styles.locationAddress}>Ste 215</span>
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
                <span className={styles.phoneNumber}>(614) 555-3319</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>Reynoldsburg Care Center</p>
            </div>

            <div className={styles.otherDetails}>
              <div className={styles.detailRow}>
                <MapPin className={styles.detailIcon} />
                <div className={styles.addressBlock}>
                  <span className={styles.locationAddress}>
                    6200 Taylor Grove Parkway
                  </span>
                  <span className={styles.locationAddress}>Suite 240</span>
                  <span className={styles.locationAddress}>
                    Reynoldsburg, OH 43068
                  </span>

                  <Link to="#" className={styles.getDirections}>
                    Get Directions
                  </Link>
                </div>
              </div>

              <div className={styles.detailRow}>
                <Phone className={styles.detailIcon} />
                <span className={styles.phoneNumber}>(614) 555-4826</span>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className={styles.locationContent}>
            <div className={styles.titleContainer}>
              <p className={styles.locationName}>Grove City Health Hub</p>
            </div>

            <div className={styles.otherDetails}>
              <div className={styles.detailRow}>
                <MapPin className={styles.detailIcon} />
                <div className={styles.addressBlock}>
                  <span className={styles.locationAddress}>
                    3100 Meadow Park Circle
                  </span>
                  <span className={styles.locationAddress}>
                    Grove City, OH 43123
                  </span>

                  <Link to="#" className={styles.getDirections}>
                    Get Directions
                  </Link>
                </div>
              </div>

              <div className={styles.detailRow}>
                <Phone className={styles.detailIcon} />
                <span className={styles.phoneNumber}>(614) 555-7392</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
