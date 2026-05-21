package com.techelevator.model.dto;

import java.time.LocalDate;
import java.time.LocalTime;

public class Appointment {

    private String fullName;
    private String phoneNumber;
    private String email;

    private int appointmentId;
    private int doctorId;
    private int userId;
    private LocalDate appointmentDate;
    private LocalTime appointmentTime;
    private String status;
    private int rescheduleCount;
    private String insuranceProvider;
    private boolean isNewPatient;

    public Appointment() {
    }

    public Appointment(String fullName, String phoneNumber, String email, int appointmentId,
                       int doctorId, int userId, LocalDate appointmentDate,
                       LocalTime appointmentTime, String status, int rescheduleCount,
                       String insuranceProvider, boolean isNewPatient) {
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.appointmentId = appointmentId;
        this.doctorId = doctorId;
        this.userId = userId;
        this.appointmentDate = appointmentDate;
        this.appointmentTime = appointmentTime;
        this.status = status;
        this.rescheduleCount = rescheduleCount;
        this.insuranceProvider = insuranceProvider;
        this.isNewPatient = isNewPatient;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getAppointmentId() {
        return appointmentId;
    }

    public void setAppointmentId(int appointmentId) {
        this.appointmentId = appointmentId;
    }

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public LocalDate getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(LocalDate appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public LocalTime getAppointmentTime() {
        return appointmentTime;
    }

    public void setAppointmentTime(LocalTime appointmentTime) {
        this.appointmentTime = appointmentTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getRescheduleCount() {
        return rescheduleCount;
    }

    public void setRescheduleCount(int rescheduleCount) {
        this.rescheduleCount = rescheduleCount;
    }

    public String getInsuranceProvider() {
        return insuranceProvider;
    }

    public void setInsuranceProvider(String insuranceProvider) {
        this.insuranceProvider = insuranceProvider;
    }

    public boolean isNewPatient() {
        return isNewPatient;
    }

    public void setNewPatient(boolean newPatient) {
        isNewPatient = newPatient;
    }

    @Override
    public String toString() {
        return "Appointment{" +
                "fullName='" + fullName + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", email='" + email + '\'' +
                ", appointmentId=" + appointmentId +
                ", doctorId=" + doctorId +
                ", userId=" + userId +
                ", appointmentDate=" + appointmentDate +
                ", appointmentTime=" + appointmentTime +
                ", status='" + status + '\'' +
                ", rescheduleCount=" + rescheduleCount +
                ", insuranceProvider='" + insuranceProvider + '\'' +
                ", isNewPatient=" + isNewPatient +
                '}';
    }
}

