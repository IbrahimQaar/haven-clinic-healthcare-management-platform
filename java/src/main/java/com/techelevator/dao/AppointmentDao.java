package com.techelevator.dao;

import com.techelevator.model.dto.Appointment;

import java.util.List;

public interface AppointmentDao {

    // Get all appointments for a user (active + canceled)
    List<Appointment> getAppointmentsByUserId(int userId);

    // Check if a user already has an active appointment
    boolean userHasActiveAppointment(int userId);

    // Create a new appointment
    Appointment createAppointment(Appointment appointment);
    Appointment cancelAppointment(int appointmentId, int userId);

}