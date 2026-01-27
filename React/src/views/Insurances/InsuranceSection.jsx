import styles from "./InsuranceSection.module.css";

export function InsuranceSection() {
  return (
    <section id="insurance" className={styles.section}>
      {/* Decorative elements */}
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Insurance Plans
            <span className={styles.titleGradient}>We Accept</span>
          </h2>
          <p className={styles.subtitle}>
            We’re proud to serve our patients and communities across Ohio,
            including Dublin, Cincinnati, Dayton, Columbus, and Cleveland, as a
            trusted provider of high-quality healthcare services. At Haven
            Clinic, we work hard to build strong relationships with most major
            health insurance plans in our area so that care remains accessible
            and affordable.
          </p>

          <p className={`${styles.subtitle} ${styles.subtitleStrong}`}>
            As you explore health plans that meet your needs and allow you to
            continue receiving the care you trust, you can feel confident
            knowing that Haven Clinic participates in many major insurance
            networks, along with other commonly accepted plans.
          </p>

          <p className={`${styles.subtitle} ${styles.subtitleStrong}`}>
            Because insurance contracts and coverage details can change, we
            recommend confirming your benefits directly with your insurance
            provider or plan administrator.
          </p>
        </div>

        <section className={styles.InsuranceContainers}>
          <div className={styles.card}>
            <div className={styles.columns}>
              <ul className={styles.list}>
                <li>Aetna</li>
                <li>Anthem Blue Cross Blue Shield</li>
                <li>Buckeye Health Plan</li>
                <li>CareSource</li>
                <li>Cigna</li>
                <li>Humana</li>
                <li>Paramount Advantage</li>
              </ul>

              <ul className={styles.list}>
                <li>Medicaid (Ohio Department of Medicaid)</li>
                <li>Medicare</li>
                <li>Medical Mutual</li>
                <li>Devoted Health</li>
                <li>TRICARE</li>
                <li>UnitedHealthcare</li>
                <li>Molina Healthcare</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
