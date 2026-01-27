package com.techelevator.controller;

import com.techelevator.dao.PatientRecordsDao;
import com.techelevator.model.dto.PatientProfile;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class PatientRecordsController {

    private final PatientRecordsDao dao;

    public PatientRecordsController(PatientRecordsDao dao) {
        this.dao = dao;
    }

    @RequestMapping("/appointments")
    @PostMapping
    public ResponseEntity<PatientProfile> create(@Valid @RequestBody PatientProfile body) {
        PatientProfile saved = dao.create(body);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }
}
