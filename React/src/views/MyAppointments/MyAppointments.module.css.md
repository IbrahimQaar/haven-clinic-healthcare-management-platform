/* ===== Grid container (3 per row) ===== */

/* HERO CONTAINER */
.heroContainer {
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
  /* max-width: 960px; */
  max-width: 420px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 0 C20 20 20 20 0 30 C20 40 20 40 30 60 C40 40 40 40 60 30 C40 20 40 20 30 0Z' fill='none' stroke='%23003c72' stroke-width='1'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 60px 60px;
  background-position: right top;
}

/* HERO CONTENT */
.heroContent {
  position: relative;
  z-index: 2;
  max-width: 118rem;
  margin: 0 auto;
  padding: 5.5rem 1.25rem 4.5rem;
  /* padding: 9.5rem 1.25rem 7.5rem; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.heroTitle {
  font-family: "ABC Arizona Serif", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 40px;
  line-height: 73px;
  color: rgb(0, 60, 114);
  white-space: nowrap;
}

/* Page Layout */

.page {
  padding: 40px 80px;
  background: #f5f7fb;
  min-height: 100vh;
}

.pageHeader {
  padding: 0 0 0 2rem;
}

.pageTitle {
  max-width: 120rem;
  margin: 22px auto;
  padding: 0px 0 30px 0;

  font-family: "Public Sans", "Open Sans", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 18px;
  line-height: 32px;
  color: rgb(0, 60, 114);
}

.pageSubtitle {
  /* margin-top: 8px; */
  font-size: 16px;
  color: #5f6f89;
}

.bookLink {
  display: inline-block;
  margin-top: 12px;
  padding: 10px 18px;
  border-radius: 999px;
  background: #236f81;
  color: #ffffff;
  font-weight: 600;
  text-decoration: none;
}

.bookLink:hover {
  background: #eab308;
}

/* Sections */

.section {
  /* margin-bottom: 50px; */

  max-width: 1200px;
  margin: 48px auto;
  padding: 0 24px;
}

.sectionTitle {
  font-size: 22px;
  font-weight: 600;
  color: #23446a;
  margin-bottom: 18px;
}

/* Upcoming Appointment Card */

.upcomingCard {
  display: flex;
  align-items: center;
  gap: 24px;

  background: white;
  border-radius: 18px;

  padding: 28px;

  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);

  border: 1px solid #e6edf5;
}

/* Doctor Image */

.doctorImage {
  width: 120px;
  height: 120px;

  border-radius: 14px;

  object-fit: cover;
}

/* Doctor Info */

.info {
  flex: 1;
}

.name {
  font-size: 22px;
  font-weight: 700;
  color: #243a5e;
}

.specialty {
  font-size: 16px;
  color: #5a6b85;
  margin-top: 4px;
}

/* Meta Info */

.metaRow {
  display: flex;
  align-items: center;
  gap: 10px;

  margin-top: 10px;

  color: #5f6f89;
  font-size: 15px;
}

.icon {
  color: #7a8aa6;
}

/* Right side actions */

.rightSide {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
}

/* Scheduled badge */

.scheduledBadge {
  display: flex;
  align-items: center;
  gap: 6px;

  background: #1f8a6a;
  color: white;

  padding: 6px 14px;

  border-radius: 20px;

  font-size: 14px;
  font-weight: 500;
}
.noAppointment {
  margin-top: 20px;
  color: #5f6f89;
  font-size: 16px;
}

/* Cancel button */

.cancelBtn {
  background: #d74c3c;
  color: white;

  border: none;

  padding: 12px 26px;

  border-radius: 12px;

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;
}

.cancelBtn:hover {
  background: #c03c2d;
}

/* Appointment History */

.historyGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

/* History Card */

.historyCard {
  display: flex;
  align-items: center;
  gap: 18px;

  background: white;

  padding: 22px;

  border-radius: 16px;

  border: 1px solid #e6edf5;

  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
}

/* History Image */

.historyImage {
  width: 90px;
  height: 150px;

  border-radius: 12px;

  object-fit: contain;
}

/* Cancelled badge */

.cancelledBadge {
  margin-left: auto;

  background: #d74c3c;
  color: white;

  padding: 6px 14px;

  border-radius: 18px;

  font-size: 13px;
  font-weight: 600;
}

.sectionDivider {
  height: 1px;
  background: #e5e7eb;
  margin: 40px 0;
}
