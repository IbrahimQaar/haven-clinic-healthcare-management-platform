package com.techelevator.dao;

import com.techelevator.model.dto.PatientProfile;

public interface PatientRecordsDao {
    // return the saved object (or return the generated id as int if you prefer)
    PatientProfile create(PatientProfile p);
}
