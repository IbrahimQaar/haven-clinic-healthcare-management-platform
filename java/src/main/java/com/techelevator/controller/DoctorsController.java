package com.techelevator.controller;

import com.techelevator.dao.DoctorsDao;
import com.techelevator.model.dto.Doctors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class DoctorsController {

    @Autowired
    private DoctorsDao doctorsDao;

    // For doctors list page
    @GetMapping("/doctors")
    public List<Doctors> getAllDoctors() {
        return doctorsDao.getAllDoctors();
    }

    // Get hospital locations
    @GetMapping("/doctors/locations")
    public List<Doctors> getHospitalLocations() {
        return doctorsDao.getAllHospitalLocations();
    }

    // For book appointment page
    @GetMapping("/doctors/{doctorId}")
    public Doctors getDoctorById(@PathVariable int doctorId) {
        return doctorsDao.getDoctorById(doctorId);
    }
}