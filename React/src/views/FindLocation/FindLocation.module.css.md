/* HERO CONTAINER */

.mainContainer {
  position: relative;
  background-color: rgb(220, 239, 245);
  overflow: hidden;
}

.heroPattern {
  position: absolute;
  top: 0;
  bottom: 0;
  right: -90px;
  width: calc(38vw + 25px);
  max-width: 420px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 0 C20 20 20 20 0 30 C20 40 20 40 30 60 C40 40 40 40 60 30 C40 20 40 20 30 0Z' fill='none' stroke='%23003c72' stroke-width='1'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 60px 60px;
  background-position: right top;
}

.heroContent {
  position: relative;
  z-index: 2;
  max-width: 118rem;
  margin: 0 auto;
  /* padding: 9.5rem 1.25rem 7.5rem; */
  padding: 6.5rem 1.25rem 4.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.heroText {
  min-width: 0;
}

.heroTitle {
  font-family: "ABC Arizona Serif", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 56px;
  line-height: 73px;
  color: rgb(0, 60, 114);
  white-space: nowrap;
}

/* =========================
   BREADCRUMBS
   ========================= */

.breadcrumbSection {
  padding-left: 2rem;
}

.breadcrumbNav {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 120rem;
  margin: 22px auto;
}

.breadcrumbLink,
.breadcrumbSeparator {
  font-family: "Public Sans", "Open Sans", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: rgb(0, 60, 114);
}

.breadcrumbLink {
  text-decoration: none;
}

.breadcrumbLink:hover {
  text-decoration: underline;
}

.locationSection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 120rem;
  margin: 10.4rem auto 11rem;
  gap: 4.4rem;
}

.locationContent {
  border: 1px solid #0b4a8b;
  border-radius: 2rem;
  overflow: hidden;
  background: #ffffff;

  display: flex;
  flex-direction: column;
  font-family: "Public Sans", "Open Sans", sans-serif;
  height: 100%;
}

.titleContainer {
  background: #eef8ff;
  padding: 2.4rem 2.8rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 16rem;
}

.locationName {
  font-family: "ABC Arizona Serif", serif;
  font-weight: 400;
  font-size: 2.8rem;
  line-height: 3.6rem;
  color: #003c72;
  margin: 0;

  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.5rem;
}

.otherDetails {
  padding: 3.2rem 2.8rem 5.6rem;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
}

.detailRow {
  display: grid;
  grid-template-columns: 3.2rem 1fr;
  align-items: start;
  column-gap: 2.4rem;
}

.detailIcon {
  width: 2.6rem;
  height: 2.6rem;
  color: #2f7dd6;
  margin-top: 0.2rem;
}

.addressBlock {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.locationAddress {
  font-size: 1.8rem;
  line-height: 3.2rem;
  color: rgb(40, 40, 40);
}

.getDirections {
  display: inline-block;
  margin-top: 1.2rem;
  font-size: 1.8rem;
  color: #003c72;
  font-weight: 600;

  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.4rem;

  white-space: nowrap;
}

.getDirections:hover {
  color: #0059b3;
}

.phoneNumber {
  font-size: 1.8rem;
  font-weight: 600;
  color: #003c72;
  margin: 0;

  text-decoration: underline;
  text-decoration-thickness: 0.5px;
  text-underline-offset: 0.4rem;
}

@media (max-width: 1024px) {
  .locationSection {
    grid-template-columns: repeat(2, 1fr);
  }

  .locationName {
    font-size: 2rem;
    line-height: 2.6rem;
  }

  .locationAddress,
  .getDirections,
  .phoneNumber {
    font-size: 1.6rem;
    line-height: 2.5rem;
  }
}

@media (max-width: 640px) {
  .locationSection {
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }

  .titleContainer {
    min-height: 14rem;
  }
}

@media (max-width: 1024px) {
  .heroPattern {
    display: none;
  }
}

@media (max-width: 675px) {
  .patientHeroTitle {
    font-size: 38px;
    line-height: 44px;
    white-space: nowrap;
    word-break: keep-all;
  }
}
@media (max-width: 480px) {
  .patientHeroText {
    width: 100%;
  }

  .patientHeroTitle {
    font-family: "ABC Arizona Serif", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 38px;
    line-height: 44px;
    color: rgb(0, 60, 114);
    white-space: normal;
    word-break: keep-all;
  }
}
