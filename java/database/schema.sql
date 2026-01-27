BEGIN;

-- Drop existing tables safely in correct order
DROP TABLE IF EXISTS time_slots;
DROP TABLE IF EXISTS doctor_languages;
DROP TABLE IF EXISTS doctor_insurance;
DROP TABLE IF EXISTS appointments;
DROP TABLE IF EXISTS patients;
DROP TABLE IF EXISTS languages;
DROP TABLE IF EXISTS insurance_providers;
DROP TABLE IF EXISTS doctors;
DROP TABLE IF EXISTS users;

-- Users table
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(200) NOT NULL,
    role VARCHAR(50) NOT NULL
);

-- Doctors table
CREATE TABLE doctors (
    doctor_id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    specialty VARCHAR(100) NOT NULL,
    rating DECIMAL(2,1) NOT NULL,
    reviews INTEGER NOT NULL,
    availability VARCHAR(100) NOT NULL,
    image VARCHAR(500) NOT NULL,
    education VARCHAR(255) NOT NULL,
    experience VARCHAR(50) NOT NULL,
    location VARCHAR(100) NOT NULL,
    accepting_new_patients BOOLEAN NOT NULL,
);

-- Insurance providers table
CREATE TABLE insurance_providers (
    insurance_id SERIAL PRIMARY KEY,
    provider_name VARCHAR(100) NOT NULL UNIQUE
);

-- Languages table
CREATE TABLE languages (
    language_id SERIAL PRIMARY KEY,
    language_name VARCHAR(50) NOT NULL UNIQUE
);

-- Doctor ↔ Insurance
CREATE TABLE doctor_insurance (
    doctor_id INTEGER REFERENCES doctors(doctor_id) ON DELETE CASCADE,
    insurance_id INTEGER REFERENCES insurance_providers(insurance_id) ON DELETE CASCADE,
    PRIMARY KEY (doctor_id, insurance_id)
);

-- Doctor ↔ Languages
CREATE TABLE doctor_languages (
    doctor_id INTEGER REFERENCES doctors(doctor_id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES languages(language_id) ON DELETE CASCADE,
    PRIMARY KEY (doctor_id, language_id)
);

-- Patients table
--CREATE TABLE patients (
--    patient_id SERIAL PRIMARY KEY,
--    user_id INTEGER UNIQUE REFERENCES users(user_id) ON DELETE SET NULL,
--    first_name VARCHAR(100) NOT NULL,
--    last_name VARCHAR(100) NOT NULL,
--    email VARCHAR(255) UNIQUE NOT NULL,
--    phone VARCHAR(20) NOT NULL,
--    date_of_birth DATE,
--    address VARCHAR(255),
--    city VARCHAR(100),
--    state VARCHAR(50),
--    zip_code VARCHAR(10),
--    emergency_contact_name VARCHAR(200),
--    emergency_contact_phone VARCHAR(20),
--);

CREATE TABLE IF NOT EXISTS patient_records (
  patient_id       SERIAL PRIMARY KEY,
  user_id          INTEGER REFERENCES users(user_id) ON DELETE SET NULL,
  first_name       VARCHAR(100) NOT NULL,
  last_name        VARCHAR(100) NOT NULL,
  email            VARCHAR(255) NOT NULL,
  phone            VARCHAR(20)  NOT NULL,
  insurance_id     INTEGER,
  language_id      INTEGER,
  is_new_patient   BOOLEAN DEFAULT TRUE,
  reason           TEXT,

  CONSTRAINT ux_patient_records_email UNIQUE (email),
  CONSTRAINT fk_patient_insurance FOREIGN KEY (insurance_id)
    REFERENCES insurance_providers(insurance_id)
    ON UPDATE CASCADE ON DELETE SET NULL,
  CONSTRAINT fk_patient_language FOREIGN KEY (language_id)
    REFERENCES languages(language_id)          -- << correct table name
    ON UPDATE CASCADE ON DELETE SET NULL
);


--CREATE INDEX idx_patients_user ON patients(user_id);
--CREATE INDEX idx_patients_email ON patients(email);

-- Appointments table
CREATE TABLE appointments (
    appointment_id SERIAL PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL,
    reason TEXT NOT NULL,
    doctor_id INTEGER REFERENCES doctors(doctor_id) ON DELETE SET NULL,
    user_id INTEGER REFERENCES users(user_id) ON DELETE SET NULL,
    insurance_id INTEGER REFERENCES insurance_providers(insurance_id) ON DELETE SET NULL,
    is_new_patient BOOLEAN NOT NULL,
    status VARCHAR(20) DEFAULT 'scheduled'
        CHECK (status IN ('scheduled','confirmed','completed','cancelled')),
    confirmation_number VARCHAR(50) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_appointments_doctor ON appointments(doctor_id);
CREATE INDEX idx_appointments_user ON appointments(user_id);
CREATE INDEX idx_appointments_insurance ON appointments(insurance_id);
CREATE INDEX idx_appointments_date ON appointments(date);

-- Time slots table
CREATE TABLE time_slots (
    slot_id SERIAL PRIMARY KEY,
    doctor_id INTEGER REFERENCES doctors(doctor_id) ON DELETE CASCADE,
    slot_date DATE NOT NULL,
    slot_time TIME NOT NULL,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (doctor_id, slot_date, slot_time)
);

CREATE INDEX idx_time_slots_doctor ON time_slots(doctor_id);
CREATE INDEX idx_time_slots_date ON time_slots(slot_date);
CREATE INDEX idx_time_slots_available ON time_slots(is_available);

-- Function + triggers to auto-update 'updated_at'
--CREATE OR REPLACE FUNCTION set_updated_at()
--RETURNS TRIGGER AS $$
--BEGIN
--  NEW.updated_at := CURRENT_TIMESTAMP;
--  RETURN NEW;
--END; $$ LANGUAGE plpgsql;
--
--CREATE TRIGGER trg_patients_updated_at
--BEFORE UPDATE ON patients
--FOR EACH ROW EXECUTE PROCEDURE set_updated_at();
--
--CREATE TRIGGER trg_appointments_updated_at
--BEFORE UPDATE ON appointments
--FOR EACH ROW EXECUTE PROCEDURE set_updated_at();

COMMIT;
