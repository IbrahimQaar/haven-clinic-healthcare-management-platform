package com.techelevator.model.dto;

public class PatientGiftcardRequest {
    private String firstName;
    private String lastName;
    private String giftCardName;
    private String clinicName;
    private String message;


    public PatientGiftcardRequest() {}


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

    public String getGiftCardName() {
        return giftCardName;
    }

    public void setGiftCardName(String giftCardName) {
        this.giftCardName = giftCardName;
    }

    public String getClinicName() {
        return clinicName;
    }

    public void setClinicName(String clinicName) {
        this.clinicName = clinicName;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }


    @Override
    public String toString() {
        return "PatientGiftcardRequest{" +
                "firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", giftCardName='" + giftCardName + '\'' +
                ", clinicName='" + clinicName + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}

