import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Providefeedback.module.css";

import Footer from "../../Footer/Footer";

export default function Providefeedback() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [openSection, setOpenSection] = useState("");

  return (
    <>
      {/* Hero Section */}

      <div className={styles.mainContainer}>
        <div className={styles.heroPattern} aria-hidden="true" />

        <div className={styles.patientHero}>
          <div className={styles.patientHeroText}>
            <p className={styles.provideFeedbackTitle}>Provide Feedback</p>

            <p className={styles.FeedbackSubtitle}>
              Your feedback helps us provide better care.
            </p>
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

      {/* Content */}
      <section className={styles.contentSection}>
        <div className={styles.contentContainer}>
          <p className={styles.bodyText}>
            We are committed to providing safe, respectful, and high-quality
            care for every patient and visitor. Feedback helps us improve
            services and strengthen the overall patient experience.
          </p>

          <p className={styles.bodyText}>
            Patients and families are encouraged to share questions, concerns,
            or compliments with their care team during their visit so they can
            be addressed appropriately and in a timely manner.
          </p>

          <p className={styles.bodyText}>
            Feedback may also be submitted after a visit using the contact
            methods below. All submissions are reviewed and directed to the
            appropriate departments.
          </p>

          <div className={styles.feedbackOptions}>
            {/* Survey Section */}
            <div className={styles.feedbackAccordion}>
              <div
                className={styles.feedbackHeader}
                onClick={() =>
                  setOpenSection(openSection === "survey" ? "" : "survey")
                }
              >
                <p className={styles.feedbackTitle}>Fill out a survey</p>

                <button
                  className={`${styles.feedbackIcon} ${
                    openSection === "survey" ? styles.feedbackIconOpen : ""
                  }`}
                >
                  {openSection === "survey" ? "✖" : "✚"}
                </button>
              </div>

              {openSection === "survey" && (
                <div className={styles.feedbackContent}>
                  <p className={styles.feedbackText}>
                    After your visit, you may receive a survey to share feedback
                    about your care experience and recognize staff who made a
                    positive impact.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Section */}
            <div className={styles.feedbackAccordion}>
              <div
                className={styles.feedbackHeader}
                onClick={() =>
                  setOpenSection(openSection === "feedback" ? "" : "feedback")
                }
              >
                <p className={styles.feedbackTitle}>Share feedback</p>

                <button
                  className={`${styles.feedbackIcon} ${
                    openSection === "feedback" ? styles.feedbackIconOpen : ""
                  }`}
                >
                  {openSection === "feedback" ? "✖" : "✚"}
                </button>
              </div>

              {openSection === "feedback" && (
                <div className={styles.feedbackContent}>
                  <p className={styles.feedbackText}>
                    Share comments, concerns, compliments, or suggestions to
                    help improve patient care and experiences.
                  </p>

                  <Link to="/feedback-form" className={styles.feedbackLink}>
                    Complete the feedback form
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
