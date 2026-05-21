/* =========================
   HERO SECTION
========================= */

.heroSection {
  width: 100%;
  padding: 3.2rem 0 8rem;
  background-image: url("/images/NursingAssessPatient.png");
  background-size: contain;
  background-position: center right;
  background-repeat: no-repeat;
  background-color: #ebf8ff;
  margin-bottom: 3.8rem;
}

/* =========================
   CONTAINER 
========================= */

.container {
  max-width: 120rem;
  margin: 0 auto;
  padding-left: 16rem;
  padding-left: 8rem;
  padding-right: 3.2rem;

  position: relative;
  z-index: 1;
}

/* =========================
   HERO GRID
========================= */

.hero {
  display: grid;
  grid-template-columns: 1.45fr 1fr;
  align-items: start;
  gap: 6.4rem;
}

/* =========================
   LEFT SIDE
========================= */

.heroContent {
  display: flex;
  flex-direction: column;
  padding-top: 10rem;
  background-color: #ebf8ff;
  color: #0b1220;
  margin-left: -16rem;
}

.greenDot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
  flex-shrink: 0;
}

.heroTitle {
  margin: 0 0 1.9rem;
  font-family: "ABC Arizona Serif", serif;
  font-weight: 400;
  font-size: 5.6rem;
  line-height: 7.3rem;
  color: rgb(0, 60, 114);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
}

.lineOne,
.lineTwo {
  display: block;
}

.heroTitleHighlight {
  color: #006770;
}

.heroSubText {
  margin: 1.6rem 0 0;
  font-size: 1.8rem;
  line-height: 3.2rem;
  color: #0f172a;
  max-width: 62rem;
}

/* =========================
   BUTTONS
========================= */

.buttonRow {
  margin-top: 3.5rem;
  display: flex;
  gap: 1.6rem;
  flex-wrap: wrap;
  align-items: center;
}

.primaryBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1.04rem;
  padding: 1.6rem 2.6rem;
  border-radius: 1.4rem;
  border: none;
  cursor: pointer;
  font-weight: 800;
  font-size: 1.6rem;
  color: #ffffff;
  background-color: #1388ae;
  text-decoration: none;
}

.secondaryBtn {
  padding: 1.6rem 5.6rem;
  border-radius: 1.4rem;
  cursor: pointer;
  font-weight: 700;
  font-size: 1.6rem;
  background-color: #b2eaef;
  border: 1px solid rgb(178 178 178 / 55%);
  color: #e9fcff;
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.06);
  text-decoration: none;
  color: #2a2a60;
}

.btnIcon {
  width: 18px;
  height: 18px;
}

/* ===============================
TABLET
================================ */

@media (max-width: 1024px) {
  .heroSection {
    background-position: center right;
    background-size: cover;
  }

  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .hero {
    grid-template-columns: 1fr;
    gap: 4rem;
  }

  .heroContent {
    margin-left: 0;
    padding-top: 6rem;
  }

  .heroTitle {
    font-size: 4.4rem;
    line-height: 5.8rem;
  }

  .heroSubText {
    max-width: 100%;
  }
}

/* ===============================
MOBILE
================================ */

@media (max-width: 768px) {
  .heroSection {
    background-image: none;
    padding: 4rem 0 6rem;
  }

  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .heroContent {
    text-align: center;
    padding-top: 2rem;
  }

  .heroTitle {
    font-size: 3.4rem;
    line-height: 4.4rem;
    letter-spacing: -0.02em;
  }

  .heroSubText {
    font-size: 1.6rem;
    line-height: 2.8rem;
    margin-top: 1.6rem;
  }

  .buttonRow {
    justify-content: center;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
  }

  .primaryBtn,
  .secondaryBtn {
    width: 100%;
    max-width: 32rem;
    justify-content: center;
  }
}

/* ===============================
SMALL PHONES
================================ */

@media (max-width: 480px) {
  .heroTitle {
    font-size: 2.8rem;
    line-height: 3.6rem;
  }

  .heroSubText {
    font-size: 1.5rem;
    line-height: 2.6rem;
  }

  .primaryBtn,
  .secondaryBtn {
    font-size: 1.5rem;
    padding: 1.4rem 2rem;
  }
}
