package com.techelevator.model.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;

public class PatientProfile {

    private Integer userId; // nullable

    @NotBlank(message = "First name is required.")
    @Size(max = 100, message = "First name must be less than 100 characters.")
    @JsonProperty("first_name")
    private String firstName;

    @NotBlank(message = "Last name is required.")
    @Size(max = 100, message = "Last name must be less than 100 characters.")
    @JsonProperty("last_name")
    private String lastName;

    @NotBlank(message = "Email is required.")
    @Email(message = "Please provide a valid email address.")
    private String email;

    @NotBlank(message = "Phone number is required.")
    @Pattern(regexp = "^[0-9\\-\\+() ]{7,20}$", message = "Invalid phone number format.")
    private String phone;

    @JsonProperty("insurance_id")
    private Integer insuranceId;
    @JsonProperty("language_id")
    private Integer languageId;

    @JsonProperty("is_new_patient")
    private Boolean isNewPatient; // true/false

    @Size(max = 500, message = "Reason must be less than 500 characters.")
    private String reason;

    public PatientProfile (){

    }


    public PatientProfile(Integer userId, String firstName, String lastName, String email, String phone, Integer insuranceId, Integer languageId, Boolean isNewPatient, String reason) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.insuranceId = insuranceId;
        this.languageId = languageId;
        this.isNewPatient = isNewPatient;
        this.reason = reason;
    }

    // Getters & Setters
    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Integer getInsuranceId() {
        return insuranceId;
    }

    public void setInsuranceId(Integer insuranceId) {
        this.insuranceId = insuranceId;
    }

    public Integer getLanguageId() {
        return languageId;
    }

    public void setLanguageId(Integer languageId) {
        this.languageId = languageId;
    }

    public Boolean getIsNewPatient() {
        return isNewPatient;
    }

    public void setIsNewPatient(Boolean isNewPatient) {
        this.isNewPatient = isNewPatient;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    @Override
    public String toString() {
        return "PatientProfile{" +
                "userId=" + userId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", phone='" + phone + '\'' +
                ", insuranceId=" + insuranceId +
                ", languageId=" + languageId +
                ", isNewPatient=" + isNewPatient +
                ", reason='" + reason + '\'' +
                '}';
    }
}
