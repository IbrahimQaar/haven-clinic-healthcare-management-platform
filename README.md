# 🏥 Haven Clinic

**Status:** Under Active Development

Haven Clinic is a full-stack healthcare web application that models patient-facing workflows commonly found in modern clinical systems. The platform provides structured access to medical services, provider directories, clinic locations, authentication, and patient resources through a clear, production-oriented interface. The system emphasizes accessibility, predictable navigation, and modular full-stack architecture aligned with real-world healthcare application standards.

---

## Screenshots
<img width="1511" height="857" alt="Image" src="https://github.com/user-attachments/assets/f7951c9b-13a3-44f4-bc84-84d7d38dac64" />
<img width="1510" height="859" alt="Image" src="https://github.com/user-attachments/assets/b716e240-e507-4540-b1fd-7ec3b50d7027" />
<img width="1510" height="857" alt="Image" src="https://github.com/user-attachments/assets/1d4047eb-2499-44dd-a704-5f07aa2daefb" />
<img width="1509" height="858" alt="Image" src="https://github.com/user-attachments/assets/01b89249-feaa-4dd7-b727-4af2d74545df" />
<img width="1512" height="859" alt="Image" src="https://github.com/user-attachments/assets/7092770e-c2db-4892-9454-97ff5b919053" />

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

### Prerequisites

* Node.js
* Java 17
* PostgreSQL

---

### Frontend

```bash
cd frontend
npm install
npm start
```

---

### Backend

```bash
cd backend
./mvnw spring-boot:run
```

Configure PostgreSQL credentials in `application.properties` before starting the backend.

---

## 👨‍💻 Author

**Ibrahim Qaar**
Full-Stack Java & React Developer
