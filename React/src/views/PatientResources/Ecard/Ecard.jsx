import styles from "./Ecard.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import { fetchHospitalLocations } from "../../../services/doctorsService";

export default function Ecard() {
  const [hospitalLocations, setHospitalLocations] = useState([]);

  const [ecard, setEcard] = useState({
    patientFirstName: "",
    patientLastName: "",
    hospitalLocation: "",
    roomNumber: "",
    cardDesign: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    loadHospitalLocations();
  }, []);

  async function loadHospitalLocations() {
    try {
      const response = await fetchHospitalLocations();

      setHospitalLocations(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await fetch("http://localhost:9000/ecards", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(ecard),
      });

      alert(
        "Your e-card has been received and will be delivered to the patient within 24 hours. Thank you for your message.",
      );

      setEcard({
        patientFirstName: "",
        patientLastName: "",
        hospitalLocation: "",
        roomNumber: "",
        cardDesign: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heroPattern} aria-hidden="true" />

        <div className={styles.ecardHero}>
          <div className={styles.ecardHeroText}>
            <p className={styles.ecardHeroTitle}>Send an E-Card</p>
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
            Patient Resources
          </Link>

          <span className={styles.breadcrumbSeparator}>/</span>

          <span className={styles.breadcrumbCurrent}>Send an E-Card</span>
        </div>
      </div>

      <section className={styles.ecardSection}>
        <div className={styles.ecardContainer}>
          <div className={styles.ecardIntro}>
            <p className={styles.ecardText}>
              Send a personal message to a patient currently admitted at any
              Havenwell Health facility.
            </p>

            <p className={styles.ecardText}>
              Select a card design and complete the form below. Messages are
              reviewed and delivered to the patient's room within 24 hours.
            </p>

            <p className={styles.ecardText}>
              For urgent communication, contact the facility directly at (614)
              555-0100.
            </p>
          </div>

          <div className={styles.cardContainer}>
            <div className={styles.cardItem}>
              <img
                src="/images/CongrulationCard.png"
                alt="Congratulations Card"
                className={styles.cardImage}
              />
            </div>

            <div className={styles.cardItem}>
              <img
                src="/images/WishingYouWell.png"
                alt="Wishing You Well Card"
                className={styles.cardImage}
              />
            </div>

            <div className={styles.cardItem}>
              <img
                src="/images/ThinkingOfYou.png"
                alt="Thinking Of You Card"
                className={styles.cardImage}
              />
            </div>
          </div>

          <div className={styles.formSection}>
            <div className={styles.formContainer}>
              <form className={styles.ecardForm} onSubmit={handleSubmit}>
                <h2 className={styles.formTitle}>Patient Information</h2>

                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>
                      Patient First Name{" "}
                      <span className={styles.required}>*</span>
                    </label>

                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      value={ecard.patientFirstName}
                      onChange={(event) =>
                        setEcard({
                          ...ecard,
                          patientFirstName: event.target.value,
                        })
                      }
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>
                      Patient Last Name{" "}
                      <span className={styles.required}>*</span>
                    </label>

                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      value={ecard.patientLastName}
                      onChange={(event) =>
                        setEcard({
                          ...ecard,
                          patientLastName: event.target.value,
                        })
                      }
                    />
                  </div>

                  <div className={styles.formGroupFull}>
                    <label>
                      Hospital Location{" "}
                      <span className={styles.required}>*</span>
                    </label>

                    <p className={styles.inputHelper}>
                      Select the patient's facility
                    </p>

                    <select
                      required
                      value={ecard.hospitalLocation}
                      onChange={(event) =>
                        setEcard({
                          ...ecard,
                          hospitalLocation: event.target.value,
                        })
                      }
                    >
                      <option value="">Select Hospital Location</option>

                      {hospitalLocations.map((hospital) => (
                        <option
                          key={hospital.location}
                          value={hospital.location}
                        >
                          {hospital.location}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.formGroupFull}>
                    <label>
                      Room Number <span className={styles.required}>*</span>
                    </label>

                    <input
                      type="text"
                      placeholder="Room Number"
                      pattern="[0-9]{3,5}"
                      required
                      value={ecard.roomNumber}
                      onChange={(event) =>
                        setEcard({
                          ...ecard,
                          roomNumber: event.target.value,
                        })
                      }
                    />
                  </div>

                  <div className={styles.formGroupFull}>
                    <label>
                      E-Card Design <span className={styles.required}>*</span>
                    </label>

                    <select
                      required
                      value={ecard.cardDesign}
                      onChange={(event) =>
                        setEcard({
                          ...ecard,
                          cardDesign: event.target.value,
                        })
                      }
                    >
                      <option value="">Select Card Design</option>

                      <option value="Congratulations">Congratulations</option>

                      <option value="Wishing You Well">Wishing You Well</option>

                      <option value="Thinking of You">Thinking of You</option>
                    </select>
                  </div>

                  <div className={styles.formGroupFull}>
                    <label>
                      Message to Patient{" "}
                      <span className={styles.required}>*</span>
                    </label>

                    <textarea
                      rows="7"
                      maxLength="500"
                      required
                      value={ecard.message}
                      onChange={(event) =>
                        setEcard({
                          ...ecard,
                          message: event.target.value,
                        })
                      }
                    />

                    <p className={styles.characterCount}>
                      Characters Remaining: {500 - ecard.message.length}
                    </p>
                  </div>

                  <div className={styles.submitSection}>
                    <button type="submit" className={styles.submitButton}>
                      Send E-Card
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
