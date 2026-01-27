package com.techelevator.dao;

import com.techelevator.model.dto.DoctorsInfo;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcDoctorDao implements DoctorsDao{

    private final JdbcTemplate template;

    public JdbcDoctorDao(DataSource dataSource) {
        this.template = new JdbcTemplate(dataSource);
    }

    // All doctors
    public List<DoctorsInfo> getAllDoctors() {
        List<DoctorsInfo> doctors = new ArrayList<>();
        String sql = "SELECT * FROM doctors;";
        SqlRowSet results = template.queryForRowSet(sql);

        while (results.next()) {
            doctors.add(mapRowToDoctor(results));
        }
        return doctors;
    }


    // Get one doctor by ID
    public DoctorsInfo getDoctorById(int doctorId) {
        String sql = "SELECT * FROM doctors WHERE doctor_id = ?;";
        SqlRowSet results = template.queryForRowSet(sql, doctorId);

        if (results.next()) {
            return mapRowToDoctor(results);
        }
        return null;
    }


//    Get everything related to the doctor including the reviews and everything
public List<DoctorsInfo> getAllDoctorsInformation() {
    List<DoctorsInfo> doctorsInformation = new ArrayList<>();
    String sql = "SELECT doctor_id, name, specialty, rating, " +
            "reviews, availability, image, education, experience, " +
            "location, accepting_new_patients FROM doctors;";

    SqlRowSet result = template.queryForRowSet(sql);
    while (result.next()) {
        doctorsInformation.add(mapRowToDoctor(result));
    }
    return doctorsInformation;
}




    // 🧩 Helper method to map a database row into a Doctors object
    private DoctorsInfo mapRowToDoctor(SqlRowSet rowSet) {
        DoctorsInfo doctor = new DoctorsInfo();
        doctor.setDoctor_id(rowSet.getInt("doctor_id"));
        doctor.setName(rowSet.getString("name"));
        doctor.setSpecialty(rowSet.getString("specialty"));
        doctor.setRating(rowSet.getDouble("rating"));
        doctor.setReviews(rowSet.getInt("reviews"));
        doctor.setAvailability(rowSet.getString("availability"));
        doctor.setImageUrl(rowSet.getString("image"));
        doctor.setEducation(rowSet.getString("education"));
        doctor.setExperience(rowSet.getString("experience"));
        doctor.setLocation(rowSet.getString("location"));
        doctor.setAccepting_new_patients(rowSet.getBoolean("accepting_new_patients"));
        return doctor;
    }
}
