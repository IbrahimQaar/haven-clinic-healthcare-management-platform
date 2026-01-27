package com.techelevator.dao;

import com.techelevator.model.dto.DoctorsInfo;
import java.util.List;

public interface DoctorsDao {
     List<DoctorsInfo> getAllDoctors();
    DoctorsInfo getDoctorById(int doctorId);

    List<DoctorsInfo> getAllDoctorsInformation();

}
