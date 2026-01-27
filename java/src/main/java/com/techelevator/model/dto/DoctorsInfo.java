package com.techelevator.model.dto;

import java.util.List;

public class DoctorsInfo {

    private int doctor_id;
    private String name;
    private String specialty;
    private double rating;
    private int reviews;
    private String availability;
    private String imageUrl;
    private String education;
    private String experience;
    private String location;
    private boolean accepting_new_patients;


    public DoctorsInfo(){

    }

    public DoctorsInfo(int doctor_id, String name, String specialty, double rating,
                       int reviews, String availability, String imageUrl, String education,
                       String experience, String location, boolean accepting_new_patients) {
        this.doctor_id = doctor_id;
        this.name = name;
        this.specialty = specialty;
        this.rating = rating;
        this.reviews = reviews;
        this.availability = availability;
        this.imageUrl = imageUrl;
        this.education = education;
        this.experience = experience;
        this.location = location;
        this.accepting_new_patients = accepting_new_patients;
    }


    public int getDoctor_id() {
        return doctor_id;
    }

    public void setDoctor_id(int doctor_id) {
        this.doctor_id = doctor_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public boolean isAccepting_new_patients() {
        return accepting_new_patients;
    }

    public void setAccepting_new_patients(boolean accepting_new_patients) {
        this.accepting_new_patients = accepting_new_patients;
    }

    @Override
    public String toString() {
        return "Doctors{" +
                "doctor_id=" + doctor_id +
                ", name='" + name + '\'' +
                ", specialty='" + specialty + '\'' +
                ", rating=" + rating +
                ", reviews=" + reviews +
                ", availability='" + availability + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                ", education='" + education + '\'' +
                ", experience='" + experience + '\'' +
                ", location='" + location + '\'' +
                ", accepting_new_patients=" + accepting_new_patients +
                '}';
    }
}
