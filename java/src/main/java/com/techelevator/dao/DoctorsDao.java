package com.techelevator.dao;

import com.techelevator.model.dto.Doctors;

import java.util.List;

public interface DoctorsDao {

    List<Doctors> getAllDoctors();

    Doctors getDoctorById(int doctorId);

    List<Doctors> getAllHospitalLocations();
}