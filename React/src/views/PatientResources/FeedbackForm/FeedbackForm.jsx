import styles from "./FeedbackForm.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { saveFeedback } from "../../../services/feedbackService";
import { fetchHospitalLocations } from "../../../services/doctorsService";

export default function FeedbackForm() {
  const [hospitalLocations, setHospitalLocations] = useState([]);

  const [selectedService, setSelectedService] = useState("");

  const [feedback, setFeedback] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    verifyEmailAddress: "",
    dateOfExperience: "",
    typeOfService: "",
    hospitalLocation: "",
    patientName: "",
    dateOfBirth: "",
    address: "",
    address2: "",
    city: "",
    state: "Ohio",
    zipCode: "",
    daytimeTelephone: "",
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
      await saveFeedback(feedback);

      alert(
        "Thank you for your feedback. Your submission has been received successfully and will be reviewed by the appropriate team. We appreciate you taking the time to share your experience with us.",
      );

      setFeedback({
        firstName: "",
        lastName: "",
        emailAddress: "",
        verifyEmailAddress: "",
        dateOfExperience: "",
        typeOfService: "",
        hospitalLocation: "",
        patientName: "",
        dateOfBirth: "",
        address: "",
        address2: "",
        city: "",
        state: "Ohio",
        zipCode: "",
        daytimeTelephone: "",
        message: "",
      });

      setSelectedService("");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Unable to submit feedback. Please try again.",
      );
    }
  }

  return (
    <>
      {/* Hero */}
      <div className={styles.mainContainer}>
        <div className={styles.heroPattern} aria-hidden="true" />

        <div className={styles.patientHero}>
          <div className={styles.patientHeroText}>
            <p className={styles.provideFeedbackTitle}>Online Feedback</p>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
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

          <span className={styles.breadcrumbCurrent}>Provide Feedback</span>
        </div>
      </div>

      <section className={styles.formSection}>
        <form className={styles.feedbackForm} onSubmit={handleSubmit}>
          <p className={styles.formHeading}>Submitted By</p>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>First Name</label>

              <input
                type="text"
                value={feedback.firstName}
                onChange={(e) =>
                  setFeedback({
                    ...feedback,
                    firstName: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles.formGroup}>
              <label>Last Name</label>

              <input
                type="text"
                value={feedback.lastName}
                onChange={(e) =>
                  setFeedback({
                    ...feedback,
                    lastName: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles.formGroup}>
              <label>Email Address *</label>

              <input
                type="email"
                required
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                title="Enter a valid email address"
                value={feedback.email}
                onChange={(e) =>
                  setFeedback({
                    ...feedback,
                    email: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles.formGroup}>
              <label>Verify Email Address *</label>

              <input
                type="email"
                required
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                title="Enter a valid email address"
                value={feedback.verifyEmail}
                onChange={(e) =>
                  setFeedback({
                    ...feedback,
                    verifyEmail: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <p className={styles.formHeading}>Patient Information</p>

          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label>Date of Experience *</label>

              <input
                type="date"
                required
                value={feedback.dateOfExperience}
                onChange={(e) =>
                  setFeedback({
                    ...feedback,
                    dateOfExperience: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles.formGroup}>
              <label>Type of Service *</label>

              <select
                required
                value={selectedService}
                onChange={(e) => {
                  setSelectedService(e.target.value);

                  setFeedback({
                    ...feedback,
                    typeOfService: e.target.value,
                  });
                }}
              >
                <option value="">Select an Option</option>

                <option value="Hospital Services">Hospital Services</option>

                <option value="Patient Billing">Patient Billing</option>

                <option value="Financial Services">Financial Services</option>

                <option value="Patient Registration">
                  Patient Registration
                </option>

                <option value="Appointments / Scheduling">
                  Appointments / Scheduling
                </option>

                <option value="Spiritual Care">Spiritual Care</option>

                <option value="Customer Support">Customer Support</option>

                <option value="Other">Other</option>
              </select>
            </div>

            {selectedService === "Hospital Services" && (
              <div className={styles.formGroup}>
                <label>Hospital Location *</label>

                <select
                  required
                  value={feedback.hospitalLocation}
                  onChange={(e) =>
                    setFeedback({
                      ...feedback,
                      hospitalLocation: e.target.value,
                    })
                  }
                >
                  <option value="">Select a Location</option>

                  {hospitalLocations.map((hospital) => (
                    <option key={hospital.location} value={hospital.location}>
                      {hospital.location}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className={styles.formGroup}>
              <label>Patient Name *</label>

              <input
                type="text"
                required
                value={feedback.patientName}
                onChange={(e) =>
                  setFeedback({
                    ...feedback,
                    patientName: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles.formGroup}>
              <label>Date of Birth *</label>

              <input
                type="date"
                required
                value={feedback.dateOfBirth}
                onChange={(e) =>
                  setFeedback({
                    ...feedback,
                    dateOfBirth: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles.formGroupFull}>
              <label>Address *</label>

              <input
                type="text"
                required
                value={feedback.address}
                onChange={(e) =>
                  setFeedback({
                    ...feedback,
                    address: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles.formGroupFull}>
              <label>Address 2</label>

              <input
                type="text"
                value={feedback.address2}
                onChange={(e) =>
                  setFeedback({
                    ...feedback,
                    address2: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles.formGroup}>
              <label>City *</label>

              <input
                type="text"
                required
                value={feedback.city}
                onChange={(e) =>
                  setFeedback({
                    ...feedback,
                    city: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles.formGroup}>
              <label>State *</label>

              <input type="text" value="Ohio" readOnly />
            </div>

            <div className={styles.formGroup}>
              <label>Zip Code *</label>

              <input
                type="text"
                required
                value={feedback.zipCode}
                onChange={(e) =>
                  setFeedback({
                    ...feedback,
                    zipCode: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles.formGroup}>
              <label>Daytime Telephone</label>

              <input
                type="tel"
                value={feedback.daytimeTelephone}
                onChange={(e) =>
                  setFeedback({
                    ...feedback,
                    daytimeTelephone: e.target.value,
                  })
                }
              />
            </div>

            <div className={styles.formGroupFull}>
              <label>Message</label>

              <textarea
                rows="6"
                value={feedback.message}
                onChange={(e) =>
                  setFeedback({
                    ...feedback,
                    message: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className={styles.submitSection}>
            <button type="submit" className={styles.submitButton}>
              Send Feedback
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
