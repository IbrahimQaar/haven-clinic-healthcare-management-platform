package com.techelevator.dao;

import com.techelevator.model.dto.Doctors;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcDoctorDao implements DoctorsDao {

    private final JdbcTemplate template;

    public JdbcDoctorDao(DataSource dataSource) {
        this.template = new JdbcTemplate(dataSource);
    }

    // Get all doctors information
    @Override
    public List<Doctors> getAllDoctors() {
        List<Doctors> doctors = new ArrayList<>();

        String sql =
                "SELECT d.doctor_id, d.name, d.credential, d.specialty, d.rating, d.reviews, d.availability, " +
                        "d.image, d.phone_number, d.education, d.experience, d.location, d.accepting_new_patients, " +
                        "a.street_address, a.city_state_zip " +
                        "FROM doctors d " +
                        "LEFT JOIN hospital_addresses a " +
                        "ON d.location = a.hospital_name;";

        SqlRowSet results = template.queryForRowSet(sql);
        while (results.next()) {
            doctors.add(mapRowToDoctor(results));
        }

        return doctors;
    }

    // Get one doctor by ID
    @Override
    public Doctors getDoctorById(int doctorId) {

        String sql =
                "SELECT d.doctor_id, d.name, d.credential, d.specialty, d.rating, d.reviews, d.availability, " +
                        "d.image, d.phone_number, d.education, d.experience, d.location, d.accepting_new_patients, " +
                        "a.street_address, a.city_state_zip " +
                        "FROM doctors d " +
                        "LEFT JOIN hospital_addresses a " +
                        "ON d.location = a.hospital_name " +
                        "WHERE d.doctor_id = ?;";

        SqlRowSet results = template.queryForRowSet(sql, doctorId);

        if (results.next()) {
            return mapRowToDoctor(results);
        }

        return null;
    }


    // Get all hospital locations
    @Override
    public List<Doctors> getAllHospitalLocations() {

        List<Doctors> hospitals = new ArrayList<>();

        String sql =
                "SELECT hospital_name, street_address, city_state_zip " +
                        "FROM hospital_addresses;";
        SqlRowSet results = template.queryForRowSet(sql);

        while (results.next()) {
            Doctors hospital = new Doctors();
            hospital.setLocation(results.getString("hospital_name"));
            hospital.setStreetAddress(results.getString("street_address"));
            hospital.setCityStateZip(results.getString("city_state_zip"));

            hospitals.add(hospital);
        }

        return hospitals;
    }

    // Map DB row → Doctors DTO
    private Doctors mapRowToDoctor(SqlRowSet rowSet) {

        Doctors doctor = new Doctors();

        doctor.setDoctorId(rowSet.getInt("doctor_id"));
        doctor.setName(rowSet.getString("name"));
        doctor.setCredential(rowSet.getString("credential"));
        doctor.setSpecialty(rowSet.getString("specialty"));
        doctor.setRating(rowSet.getDouble("rating"));
        doctor.setReviews(rowSet.getInt("reviews"));
        doctor.setAvailability(rowSet.getString("availability"));
        doctor.setImageUrl(rowSet.getString("image"));
        doctor.setPhoneNumber(rowSet.getString("phone_number"));
        doctor.setEducation(rowSet.getString("education"));
        doctor.setExperience(rowSet.getString("experience"));

        // hospital info
        doctor.setLocation(rowSet.getString("location"));
        doctor.setStreetAddress(rowSet.getString("street_address"));
        doctor.setCityStateZip(rowSet.getString("city_state_zip"));

        doctor.setAcceptingNewPatients(rowSet.getBoolean("accepting_new_patients"));

        return doctor;
    }



}