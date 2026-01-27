package com.techelevator.model.dto;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;

public class TimeSlot {

    private int slot_id;
    private int doctor_id;
    private LocalDate slot_date;
    private LocalTime slot_time;
    private boolean is_available;
    private LocalDateTime created_at;

    //  Default constructor (needed for frameworks)
    public TimeSlot() {}

    // Parameterized constructor
    public TimeSlot(int slot_id, int doctor_id, LocalDate slot_date, LocalTime slot_time,
                    boolean is_available, LocalDateTime created_at) {
        this.slot_id = slot_id;
        this.doctor_id = doctor_id;
        this.slot_date = slot_date;
        this.slot_time = slot_time;
        this.is_available = is_available;
        this.created_at = created_at;
    }

    // Getters and Setters
    public int getSlot_id() {
        return slot_id;
    }

    public void setSlot_id(int slot_id) {
        this.slot_id = slot_id;
    }

    public int getDoctor_id() {
        return doctor_id;
    }

    public void setDoctor_id(int doctor_id) {
        this.doctor_id = doctor_id;
    }

    public LocalDate getSlot_date() {
        return slot_date;
    }

    public void setSlot_date(LocalDate slot_date) {
        this.slot_date = slot_date;
    }

    public LocalTime getSlot_time() {
        return slot_time;
    }

    public void setSlot_time(LocalTime slot_time) {
        this.slot_time = slot_time;
    }

    public boolean isIs_available() {
        return is_available;
    }

    public void setIs_available(boolean is_available) {
        this.is_available = is_available;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    @Override
    public String toString() {
        return "TimeSlot{" +
                "slot_id=" + slot_id +
                ", doctor_id=" + doctor_id +
                ", slot_date=" + slot_date +
                ", slot_time=" + slot_time +
                ", is_available=" + is_available +
                ", created_at=" + created_at +
                '}';
    }
}
