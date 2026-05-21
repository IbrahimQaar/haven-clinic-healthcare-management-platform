package com.techelevator.model.dto;
import java.time.LocalDateTime;

public class ECard {

    private int ecardId;

    private String patientFirstName;

    private String patientLastName;

    private String hospitalLocation;

    private String roomNumber;

    private String cardDesign;

    private String message;

    private LocalDateTime createdAt;

    public int getEcardId() {
        return ecardId;
    }

    public void setEcardId(int ecardId) {
        this.ecardId = ecardId;
    }

    public String getPatientFirstName() {
        return patientFirstName;
    }

    public void setPatientFirstName(String patientFirstName) {
        this.patientFirstName = patientFirstName;
    }

    public String getPatientLastName() {
        return patientLastName;
    }

    public void setPatientLastName(String patientLastName) {
        this.patientLastName = patientLastName;
    }

    public String getHospitalLocation() {
        return hospitalLocation;
    }

    public void setHospitalLocation(String hospitalLocation) {
        this.hospitalLocation = hospitalLocation;
    }

    public String getRoomNumber() {
        return roomNumber;
    }

    public void setRoomNumber(String roomNumber) {
        this.roomNumber = roomNumber;
    }

    public String getCardDesign() {
        return cardDesign;
    }

    public void setCardDesign(String cardDesign) {
        this.cardDesign = cardDesign;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return "ECard{" +
                "ecardId=" + ecardId +
                ", patientFirstName='" + patientFirstName + '\'' +
                ", patientLastName='" + patientLastName + '\'' +
                ", hospitalLocation='" + hospitalLocation + '\'' +
                ", roomNumber='" + roomNumber + '\'' +
                ", cardDesign='" + cardDesign + '\'' +
                ", message='" + message + '\'' +
                ", createdAt=" + createdAt +
                '}';
    }
}
