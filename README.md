# 🏥 Haven Clinic

**Status:** Under Active Development

Haven Clinic is a full-stack healthcare web application that models patient-facing workflows found in modern clinical platforms. The system provides structured access to healthcare services, provider directories, clinic locations, authentication, and patient resources through a clean, production-oriented interface.

Built with a layered REST architecture, the platform emphasizes accessibility, predictable navigation, and modular design aligned with real-world healthcare application standards.

---

## Screenshots

<!-- <img width="1511" height="857" alt="Screenshot" src="https://github.com/user-attachments/assets/07612e36-bc8b-4600-b6e6-fb59e514d871" />

<img width="1511" height="860" alt="Screenshot" src="https://github.com/user-attachments/assets/ab71c587-0095-4631-bcf9-5dcecbaf9c3a" />

<img width="1510" height="861" alt="Screenshot" src="https://github.com/user-attachments/assets/d282cde2-484b-42a0-bac2-bc0fd29104f0" />

<img width="1509" height="857" alt="Screenshot" src="https://github.com/user-attachments/assets/44a53fd1-09ab-4d58-a1d2-e3e9f490ccb8" />

<img width="1507" height="863" alt="Screenshot" src="https://github.com/user-attachments/assets/ef366864-ca78-424b-991b-0ec65b96ab95" /> -->

<img width="1508" height="857" alt="Screenshot 2026-02-26 at 2 31 02 AM" src="https://github.com/user-attachments/assets/f968d92f-a010-43d6-aef6-13fec710b105" />

<img width="1506" height="861" alt="Screenshot 2026-02-26 at 2 31 12 AM" src="https://github.com/user-attachments/assets/9e8ccc49-71c5-4e0c-b990-0f4a4305ae83" />

<img width="1509" height="861" alt="Screenshot 2026-02-26 at 2 31 19 AM" src="https://github.com/user-attachments/assets/e8c702ba-b206-4fd4-8d24-57b50f03fa91" />
<img width="1507" height="861" alt="Screenshot 2026-02-26 at 2 31 27 AM" src="https://github.com/user-attachments/assets/d99571b6-467c-4738-b739-4f66a054e7b9" />

<img width="1510" height="862" alt="Screenshot 2026-02-26 at 2 31 35 AM" src="https://github.com/user-attachments/assets/db0d37b3-0a92-480c-85be-3db688e9a7e1" />
<img width="1505" height="860" alt="Screenshot 2026-02-26 at 2 31 55 AM" src="https://github.com/user-attachments/assets/7537345b-32f6-4bfb-850e-d9a008c77a7e" />
<img width="1507" height="858" alt="Screenshot 2026-02-26 at 2 32 11 AM" src="https://github.com/user-attachments/assets/ff6a93f4-4d72-48b1-93f8-3d76b45d7cda" />

---

## ✨ Key Features

* **Service Discovery**
  Browse healthcare services including primary care, urgent care, and virtual visits.

* **Provider Directory**
  Access structured provider profiles with specialties, clinic locations, and contact information.

* **Clinic Locations**
  View clinic addresses, phone numbers, and directions.

* **Patient Resources**
  Centralized patient support materials including:

  * MyChart Portal access
  * After Your Visit guidance
  * Billing & Insurance information
  * Patient Rights documentation

* **Authentication System**
  Secure user registration and login with structured form validation.

* **Responsive Interface**
  Optimized for desktop, tablet, and mobile devices.

---

##  Application Structure

| Page              | Purpose                                                      |
| ----------------- | ------------------------------------------------------------ |
| Home              | Service overview, trust messaging, and insurance information |
| About             | Clinic mission, values, and patient-centered philosophy      |
| Services          | Healthcare services and provider details                     |
| Locations         | Clinic locations and contact information                     |
| Patient Resources | MyChart access, visit guidance, billing, and patient rights  |
| Login / Register  | Secure authentication and onboarding                         |

---

##  Tech Stack

| Category | Technology                     | Responsibility                        |
| -------- | ------------------------------ | ------------------------------------- |
| Frontend | React, HTML5, CSS3, JavaScript | UI rendering and client-side behavior |
| Backend  | Java, Spring Boot              | REST API and business logic           |
| Database | PostgreSQL                     | Relational data persistence           |
| Tooling  | Git & GitHub                   | Version control                       |

---

##  Architecture

Haven Clinic follows a layered full-stack architecture:

* React frontend consuming RESTful APIs
* Spring Boot backend handling validation and domain logic
* PostgreSQL for structured relational data storage
* Clear separation between presentation, service, and data layers

The system is designed for maintainability, modularity, and future scalability.

---

##  Getting Started

### Prerequisites

Ensure the following are installed:

* Node.js
* Java 17
* PostgreSQL

---

### Clone the Repository

```bash
git clone https://github.com/IbrahimQaar/haven-clinic-healthcare-management-platform.git
cd haven-clinic-healthcare-management-platform
```

---

### Backend Setup

Configure PostgreSQL credentials in:

```
backend/src/main/resources/application.properties
```

Start the backend:

```bash
cd backend
./mvnw spring-boot:run
```

---

### Frontend Setup

Open a new terminal and run:

```bash
cd frontend
npm install
npm start
```

---

## 👨‍💻 Author
**Ibrahim Qaar** Software Engineer

