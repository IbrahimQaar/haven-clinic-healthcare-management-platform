# 🏥 Haven Clinic

**Status:** Under Active Development

Haven Clinic is a full-stack healthcare web application that models patient-facing workflows found in modern clinical platforms. The system provides structured access to healthcare services, provider directories, clinic locations, authentication, and patient resources through a clean, production-oriented interface.

Built with a layered REST architecture, the platform emphasizes accessibility, predictable navigation, and modular design aligned with real-world healthcare application standards.

---

## 📸 Screenshots

<img width="1511" height="857" alt="Screenshot" src="https://github.com/user-attachments/assets/07612e36-bc8b-4600-b6e6-fb59e514d871" />

<img width="1511" height="860" alt="Screenshot" src="https://github.com/user-attachments/assets/ab71c587-0095-4631-bcf9-5dcecbaf9c3a" />

<img width="1510" height="861" alt="Screenshot" src="https://github.com/user-attachments/assets/d282cde2-484b-42a0-bac2-bc0fd29104f0" />

<img width="1509" height="857" alt="Screenshot" src="https://github.com/user-attachments/assets/44a53fd1-09ab-4d58-a1d2-e3e9f490ccb8" />

<img width="1507" height="863" alt="Screenshot" src="https://github.com/user-attachments/assets/ef366864-ca78-424b-991b-0ec65b96ab95" />

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

## 🧭 Application Structure

| Page              | Purpose                                                      |
| ----------------- | ------------------------------------------------------------ |
| Home              | Service overview, trust messaging, and insurance information |
| About             | Clinic mission, values, and patient-centered philosophy      |
| Services          | Healthcare services and provider details                     |
| Locations         | Clinic locations and contact information                     |
| Patient Resources | MyChart access, visit guidance, billing, and patient rights  |
| Login / Register  | Secure authentication and onboarding                         |

---

## 🛠 Tech Stack

| Category | Technology                     | Responsibility                        |
| -------- | ------------------------------ | ------------------------------------- |
| Frontend | React, HTML5, CSS3, JavaScript | UI rendering and client-side behavior |
| Backend  | Java, Spring Boot              | REST API and business logic           |
| Database | PostgreSQL                     | Relational data persistence           |
| Tooling  | Git & GitHub                   | Version control                       |

---

## 🏗 Architecture

Haven Clinic follows a layered full-stack architecture:

* React frontend consuming RESTful APIs
* Spring Boot backend handling validation and domain logic
* PostgreSQL for structured relational data storage
* Clear separation between presentation, service, and data layers

The system is designed for maintainability, modularity, and future scalability.

---

## 🚀 Getting Started

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

