package com.techelevator.model.dto;

public class Doctors {

    private int doctorId;
    private String name;
    private String credential;
    private String specialty;
    private double rating;
    private int reviews;
    private String availability;
    private String imageUrl;
    private String phoneNumber;
    private String education;
    private String experience;

    // hospital name
    private String location;
    private String streetAddress;
    private String cityStateZip;

    private boolean acceptingNewPatients;

    public Doctors() {
    }

    public Doctors(int doctorId, String name, String credential, String specialty, double rating,
                   int reviews, String availability, String imageUrl, String phoneNumber, String education, String experience, String location, String streetAddress, String cityStateZip,
                   boolean acceptingNewPatients) {
        this.doctorId = doctorId;
        this.name = name;
        this.credential = credential;
        this.specialty = specialty;
        this.rating = rating;
        this.reviews = reviews;
        this.availability = availability;
        this.imageUrl = imageUrl;
        this.phoneNumber = phoneNumber;
        this.education = education;
        this.experience = experience;
        this.location = location;
        this.streetAddress = streetAddress;
        this.cityStateZip = cityStateZip;
        this.acceptingNewPatients = acceptingNewPatients;
    }

    public int getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(int doctorId) {
        this.doctorId = doctorId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCredential() {
        return credential;
    }

    public void setCredential(String credential) {
        this.credential = credential;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public int getReviews() {
        return reviews;
    }

    public void setReviews(int reviews) {
        this.reviews = reviews;
    }

    public String getAvailability() {
        return availability;
    }

    public void setAvailability(String availability) {
        this.availability = availability;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getEducation() {
        return education;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getCityStateZip() {
        return cityStateZip;
    }

    public void setCityStateZip(String cityStateZip) {
        this.cityStateZip = cityStateZip;
    }

    public boolean isAcceptingNewPatients() {
        return acceptingNewPatients;
    }

    public void setAcceptingNewPatients(boolean acceptingNewPatients) {
        this.acceptingNewPatients = acceptingNewPatients;
    }

    @Override
    public String toString() {
        return "Doctors{" +
                "doctorId=" + doctorId +
                ", name='" + name + '\'' +
                ", credential='" + credential + '\'' +
                ", specialty='" + specialty + '\'' +
                ", rating=" + rating +
                ", reviews=" + reviews +
                ", availability='" + availability + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", education='" + education + '\'' +
                ", experience='" + experience + '\'' +
                ", location='" + location + '\'' +
                ", streetAddress='" + streetAddress + '\'' +
                ", cityStateZip='" + cityStateZip + '\'' +
                ", acceptingNewPatients=" + acceptingNewPatients +
                '}';
    }
}