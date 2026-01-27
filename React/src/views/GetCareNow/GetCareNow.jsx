import styles from "./GetCareNow.module.css";

export default function GetCareNow() {
  return (
    <section className={styles.getCareSection}>
      <p className={styles.sectionKicker}>BE SEEN SOON</p>

      <h2 className={styles.sectionTitle}>Get Care Now</h2>

      <p className={styles.sectionDescription}>
        We have convenient options to get the right care for you when you need
        it.
        <a className={styles.descriptionLink} href="#">
          View all care options.
        </a>
      </p>

      <div className={styles.careCardsGrid}>
        {/* Card 1 */}
        <section className={styles.careCard}>
          <div className={styles.careCardHeader}>
            <div className={styles.careIconBox} aria-hidden="true">
              🩺
            </div>
            <a className={styles.careCardTitle} href="#">
              Primary Care
              <span className={styles.careCardSubtitle}>Get Care Soon</span>
            </a>
          </div>

          <ul className={styles.careList}>
            <li>
              Should be your first call when you are experiencing a minor
              illness or injury.
            </li>
            <li>
              Schedule a video visit, in-person visit or request an e-visit
              message via your account.
            </li>
            <li>Use for wellness visits and chronic care management.</li>
            <li>
              Don’t have a primary care provider?{" "}
              <a className={styles.careSmallLink} href="#">
                Get help finding a provider.
              </a>
            </li>
            <li>Insurance not required. Cost varies.</li>
          </ul>
        </section>

        {/* Card 2 */}
        <section className={styles.careCard}>
          <div className={styles.careCardHeader}>
            <div className={styles.careIconBox} aria-hidden="true">
              📍
            </div>
            <a className={styles.careCardTitle} href="#">
              Walk-In Urgent Care
              <span className={styles.careCardSubtitle}>Get Care Soon</span>
            </a>
          </div>

          <ul className={styles.careList}>
            <li>
              No appointment needed. You may reserve a spot online at some
              locations or walk in.
            </li>
            <li>Wait is usually 20–60 minutes.</li>
            <li>For minor illnesses, injuries and some preventative care.</li>
            <li>Insurance not required. Cost varies.</li>
          </ul>
        </section>

        {/* Card 3 */}
        <section className={styles.careCard}>
          <div className={styles.careCardHeader}>
            <div className={styles.careIconBox} aria-hidden="true">
              💻
            </div>
            <a className={styles.careCardTitle} href="#">
              Virtual On-Demand Care
              <span className={styles.careCardSubtitle}>Get Care Soon</span>
            </a>
          </div>

          <ul className={styles.careList}>
            <li>
              24/7 online access to a doctor on your phone, computer or tablet.
            </li>
            <li>Wait is as little as 10 minutes.</li>
            <li>For minor illnesses and injuries.</li>
            <li>Insurance not required. Cost varies.</li>
          </ul>
        </section>
      </div>
    </section>
  );
}
