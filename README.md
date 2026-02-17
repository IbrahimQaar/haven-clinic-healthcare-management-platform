# 🏥 Haven Clinic

**Status:** Under Active Development

Haven Clinic is a full-stack healthcare web application that models patient-facing workflows commonly found in modern clinical systems. The platform provides structured access to medical services, provider directories, clinic locations, authentication, and patient resources through a clear, production-oriented interface. The system emphasizes accessibility, predictable navigation, and modular full-stack architecture aligned with real-world healthcare application standards.

---

## Screenshots
<img width="1511" height="857" alt="Screenshot 2026-02-17 at 1 37 00 AM" src="https://github.com/user-attachments/assets/07612e36-bc8b-4600-b6e6-fb59e514d871" />
<img width="1511" height="860" alt="Screenshot 2026-02-17 at 1 47 54 AM" src="https://github.com/user-attachments/assets/ab71c587-0095-4631-bcf9-5dcecbaf9c3a" />

<img width="1510" height="861" alt="Screenshot 2026-02-17 at 1 49 46 AM" src="https://github.com/user-attachments/assets/d282cde2-484b-42a0-bac2-bc0fd29104f0" />
<img width="1509" height="857" alt="Screenshot 2026-02-17 at 1 50 16 AM" src="https://github.com/user-attachments/assets/44a53fd1-09ab-4d58-a1d2-e3e9f490ccb8" />

<img width="1507" height="863" alt="Screenshot 2026-02-17 at 2 35 58 AM" src="https://github.com/user-attachments/assets/ef366864-ca78-424b-991b-0ec65b96ab95" />

---

## ✨ Key Features

* **Service Discovery**
  Browse available healthcare services including primary care, urgent care, and virtual visits.

* **Provider Directory**
  View detailed provider profiles including specialty, clinic location, and contact information.

* **Clinic Locations**
  Access structured location data including addresses, phone numbers, and directions.

* **Patient Resources**
  Centralized educational materials, visit preparation guidance, billing information, and patient rights documentation.

* **Authentication System**
  Secure user registration and login flows with structured form validation.

* **Responsive Interface**
  Optimized layouts for desktop, tablet, and mobile devices.

---

## Application Structure

| Page              | Purpose                                                          |
| ----------------- | ---------------------------------------------------------------- |
| Home              | Overview of services, trust messaging, and insurance information |
| About             | Clinic mission, values, and patient-centered philosophy          |
| Services          | Browse healthcare services and provider details                  |
| Locations         | View clinic locations and contact information                    |
| Patient Resources | Educational and administrative patient support materials         |
| Login / Register  | Secure authentication and onboarding                             |

---

## Tech Stack

| Category | Technology                     | Responsibility                        |
| -------- | ------------------------------ | ------------------------------------- |
| Frontend | React, HTML5, CSS3, JavaScript | UI rendering and client-side behavior |
| Backend  | Java, Spring Boot              | REST API, routing, and business logic |
| Database | PostgreSQL                     | Relational data persistence           |
| Tooling  | Git & GitHub                   | Version control                       |

---

## Architecture

Haven Clinic follows a layered full-stack architecture:

* React frontend consuming RESTful APIs
* Spring Boot backend handling validation and business rules
* PostgreSQL for structured relational data storage
* Clear separation between presentation, service, and data layers

The application is designed for maintainability, modularity, and future scalability.

---

## Getting Started

Prerequisites
Make sure the following are installed:
Node.js
Java 17
PostgreSQL

---

##  Clone the Repository
git clone https://github.com/IbrahimQaar/haven-clinic-healthcare-management-platform.git
cd haven-clinic-healthcare-management-platform

---

##  Backend Setup
Configure your PostgreSQL credentials in:
backend/src/main/resources/application.properties

##  Start the Spring Boot application:
cd backend
./mvnw spring-boot:run

---

##  Frontend Setup
Open a new terminal window and run:
cd frontend
npm install
npm start

