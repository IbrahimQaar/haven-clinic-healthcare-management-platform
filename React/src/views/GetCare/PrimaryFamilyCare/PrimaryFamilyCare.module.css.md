.primaryCareContainer {
  background: #eaf5fb;
  position: relative;
  overflow: hidden;
}

.primaryCarePattern {
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
  z-index: 0;
}

.primaryCareHero {
  position: relative;
  z-index: 2;
  max-width: 120rem;
  margin: 0 auto;
  padding: 1.75rem 1.25rem 4.5rem;
  display: grid;
  grid-template-columns: 1.05fr 1.25fr;
  align-items: center;
  gap: 24.4rem;
}

.primaryCareText {
  min-width: 0;
}

.primaryCareTitle {
  line-height: 73px;
  font-family: "ABC Arizona Serif", serif;
  font-weight: 400;
  font-size: 2rem;
  color: #003c72;
  white-space: nowrap;
}

.primaryCareSubtitle {
  font-weight: 400;
  font-size: 2.4rem;
  line-height: 4.3rem;
  color: #003c72;
  white-space: nowrap;
}

.primaryCareImageWrapper {
  position: relative;
  z-index: 3;
}

.primaryCareImage {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 1.8rem;
  display: block;
  margin-left: 3.4rem;
}

/* Quick Links */

.primaryCareQuickLinks {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;
  border-top: 1.8px solid #b8c2d0;
  border-bottom: 1.8px solid #b8c2d0;
  padding: 1.5rem 0;
}

.primaryCareLink {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  text-decoration: none;
  font-family: "Public Sans", "Open Sans", sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: rgb(0, 60, 114);
  padding: 1rem 0;
}

.primaryCareIcon {
  font-size: 2rem;
  color: #2f7fd3;
}

.primaryCareLinkText {
  white-space: nowrap;
}

.primaryCareArrow {
  font-size: 2rem;
  color: #2f7fd3;
}

/* Breadcrumb */

.primaryCareBreadcrumbSection {
  padding-left: 2rem;
}

.primaryCareBreadcrumbNav {
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 120rem;
  margin: 22px auto;
}

.primaryCareBreadcrumbLink,
.primaryCareBreadcrumbSeparator {
  font-family: "Public Sans", "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: rgb(0, 60, 114);
}

.primaryCareBreadcrumbLink {
  text-decoration: none;
}

.primaryCareBreadcrumbLink:hover {
  text-decoration: underline;
}

/* Main Content */

.primaryCareSection {
  max-width: 120rem;
  margin: 22px auto;
  padding: 4rem 2.4rem 0;
}

.primaryCareTitle {
  font-family: "ABC Arizona Serif", serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  color: rgb(0, 60, 114);
  margin-bottom: 24px;
}

.primaryText {
  font-family: "Public Sans", "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  color: rgb(40, 40, 40);
  width: 850px;
}

.primaryCareText {
  padding-top: 1.4rem;
  font-family: "Public Sans", "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: rgb(40, 40, 40);
}

.primaryCareList {
  margin: 10px 0 30px 24px;
  padding: 0;
}

.primaryCareList li {
  font-family: "Public Sans", "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 32px;
  color: rgb(40, 40, 40);
  margin-bottom: 12px;
}

.primaryCareList li::marker {
  color: #2f91e2;
  font-size: 1.4em;
}

/* Expertise */

.careTitle {
  text-align: left;
  font-family: "ABC Arizona Serif", serif;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  color: rgb(0, 60, 114);
  margin: 4.2rem 0 1.2rem 0;
}

.areaOfExp {
  text-align: center;
  font-family: "ABC Arizona Serif", serif;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  color: rgb(0, 60, 114);
  margin: 4.2rem 0 3.2rem 0;
}

.careGrid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  padding: 0;
  margin: 0;
}

.careCard {
  text-decoration: none;
  border: 1px solid #1f4c7a;
  border-radius: 18px;
  padding: 34px 0px;
  text-align: center;
  font-size: 19px;
  color: #1f4c7a;
  font-weight: 500;
  background: white;
}

/* Care Team */

.careTeamContent {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  justify-content: center;
  align-items: center;
  margin-top: 7.2rem;
}

.careTeamText {
  font-size: 18px;
  line-height: 1.7;
  color: #2d3748;
}

.careTeamDescription {
  width: 628px;
  font-family: "Public Sans", "Open Sans", sans-serif;
  font-size: 18px;
  line-height: 45px;
  color: rgb(40, 40, 40);
}

.findDoctorButton {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 26px;
  background: #1f4c7a;
  color: white;
  text-decoration: none;
  border-radius: 35px;
  font-weight: 500;
}

.findDoctorButton:hover {
  background: #163a5d;
}

.careTeamImage img {
  width: 100%;
  border-radius: 8px;
}

/* Next Steps */

.nextStepsSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #25a3b5;
  padding: 69px 0;
  margin-top: 6.9rem;
}

.nextStepsTitle {
  font-family: "ABC Arizona Serif", serif;
  font-weight: 400;
  font-size: 36px;
  line-height: 52px;
  color: #effeff;
  margin-bottom: 24px;
}

.nextStepsActions {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nextStepItem {
  display: flex;
  gap: 14px;
  font-family: "Public Sans", "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  padding: 12px 26px;
  background: #f9f9f9;
  color: rgb(0, 0, 0);
  text-decoration: none;
  border-radius: 14px;
}

.nextStepItem:hover {
  text-decoration: underline;
  text-decoration-color: #25a3b5;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

.nextStepsIcon {
  font-size: 2rem;
  color: #2f7fd3;
}
