package com.techelevator.dao;

import com.techelevator.model.dto.PatientProfile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class JdbcPatientRecordsDao implements PatientRecordsDao {

    private final JdbcTemplate template;

    public JdbcPatientRecordsDao(DataSource dataSource) {
        this.template = new JdbcTemplate(dataSource);
    }

    @Override
    public PatientProfile create(PatientProfile p) {
        String sql = " INSERT INTO patient_records (user_id, first_name, last_name, email, phone, " +
                "insurance_id, language_id, is_new_patient, reason) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) RETURNING patient_id;";

        Integer newId = template.queryForObject(
                sql,
                Integer.class,
                p.getUserId(),
                p.getFirstName(),
                p.getLastName(),
                p.getEmail(),
                p.getPhone(),
                p.getInsuranceId(),
                p.getLanguageId(),
                // make sure a boolean primitive is sent
                Boolean.TRUE.equals(p.getIsNewPatient()),
                p.getReason()
        );

        // Optional: add patientId to DTO if you add that field
        // p.setPatientId(newId);
        return p;
    }
}
