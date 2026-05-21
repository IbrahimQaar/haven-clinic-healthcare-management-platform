package com.techelevator.model.dto;

import java.time.LocalDate;

public class Feedback {

    private int feedbackId;
    private String firstName;
    private String lastName;

    private String emailAddress;
    private String verifyEmailAddress;

    private LocalDate dateOfExperience;

    private String typeOfService;
    private String hospitalLocation;

    private String patientName;
    private LocalDate dateOfBirth;

    private String address;
    private String address2;

    private String city;
    private String state;
    private String zipCode;

    private String daytimeTelephone;

    private String message;

    // getters/setters


    public int getFeedbackId() {
        return feedbackId;
    }

    public void setFeedbackId(int feedbackId) {
        this.feedbackId = feedbackId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

    public String getVerifyEmailAddress() {
        return verifyEmailAddress;
    }

    public void setVerifyEmailAddress(String verifyEmailAddress) {
        this.verifyEmailAddress = verifyEmailAddress;
    }

    public LocalDate getDateOfExperience() {
        return dateOfExperience;
    }

    public void setDateOfExperience(LocalDate dateOfExperience) {
        this.dateOfExperience = dateOfExperience;
    }

    public String getTypeOfService() {
        return typeOfService;
    }

    public void setTypeOfService(String typeOfService) {
        this.typeOfService = typeOfService;
    }

    public String getHospitalLocation() {
        return hospitalLocation;
    }

    public void setHospitalLocation(String hospitalLocation) {
        this.hospitalLocation = hospitalLocation;
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getDaytimeTelephone() {
        return daytimeTelephone;
    }

    public void setDaytimeTelephone(String daytimeTelephone) {
        this.daytimeTelephone = daytimeTelephone;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return "Feedback{" +
                "feedbackId=" + feedbackId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", emailAddress='" + emailAddress + '\'' +
                ", verifyEmailAddress='" + verifyEmailAddress + '\'' +
                ", dateOfExperience=" + dateOfExperience +
                ", typeOfService='" + typeOfService + '\'' +
                ", hospitalLocation='" + hospitalLocation + '\'' +
                ", patientName='" + patientName + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", address='" + address + '\'' +
                ", address2='" + address2 + '\'' +
                ", city='" + city + '\'' +
                ", state='" + state + '\'' +
                ", zipCode='" + zipCode + '\'' +
                ", daytimeTelephone='" + daytimeTelephone + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}