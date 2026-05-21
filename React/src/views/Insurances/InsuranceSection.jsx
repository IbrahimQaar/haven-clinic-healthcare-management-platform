import styles from "./InsuranceSection.module.css";

export function InsuranceSection() {
  return (
    <section id="insurance" className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Insurance Plans We Accept</h2>
          <p className={styles.subtitle}>
            We are proud to serve patients and communities across Ohio,
            including Dublin, Cincinnati, Dayton, Columbus, and Cleveland,
            through the Havenwell Health network. Our physicians, specialists,
            and care teams are committed to delivering high-quality healthcare
            that is accessible, coordinated, and centered around the needs of
            every patient we serve.
          </p>

          <p className={`${styles.subtitle} ${styles.subtitleStrong}`}>
            Havenwell Health works with many major health insurance providers
            across the region to help ensure patients can access the care they
            need with confidence. Our participation in a wide range of insurance
            networks helps make high-quality care more convenient and affordable
            for individuals and families throughout the communities we serve.
          </p>

          <p className={`${styles.subtitle} ${styles.subtitleStrong}`}>
            Because insurance coverage and provider participation may change
            over time, we recommend confirming your benefits and coverage
            directly with your insurance provider or plan administrator before
            scheduling care.
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
