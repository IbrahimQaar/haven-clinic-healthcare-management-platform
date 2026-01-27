package com.techelevator.controller;

import com.techelevator.dao.ClinicLocationDao;
import com.techelevator.model.dto.ClinicLocation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class ClinicLocationController {

    @Autowired
    private ClinicLocationDao clinicLocationDao;

    @GetMapping("/clinic-locations")
    public List<ClinicLocation> getAllLocations() {
        return clinicLocationDao.getAllLocations();
    }
}
