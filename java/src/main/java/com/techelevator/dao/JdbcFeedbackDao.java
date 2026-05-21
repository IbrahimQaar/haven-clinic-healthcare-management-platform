package com.techelevator.dao;

import com.techelevator.model.dto.Feedback;

import org.springframework.jdbc.core.JdbcTemplate;

import org.springframework.stereotype.Component;

import javax.sql.DataSource;

@Component
public class JdbcFeedbackDao
        implements FeedbackDao {

    private final JdbcTemplate template;

    public JdbcFeedbackDao(
            DataSource dataSource
    ) {

        this.template =
                new JdbcTemplate(
                        dataSource
                );
    }

    @Override
    public void saveFeedback(
            Feedback feedback
    ) {

        String sql =

                "INSERT INTO patient_feedback (" +

                        "first_name, " +

                        "last_name, " +

                        "email_address, " +

                        "verify_email_address, " +

                        "date_of_experience, " +

                        "type_of_service, " +

                        "hospital_location, " +

                        "patient_name, " +

                        "date_of_birth, " +

                        "address, " +

                        "address_2, " +

                        "city, " +

                        "state, " +

                        "zip_code, " +

                        "daytime_telephone, " +

                        "message) " +

                        "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

        template.update(

                sql,

                feedback.getFirstName(),

                feedback.getLastName(),

                feedback.getEmailAddress(),

                feedback.getVerifyEmailAddress(),

                feedback.getDateOfExperience(),

                feedback.getTypeOfService(),

                feedback.getHospitalLocation(),

                feedback.getPatientName(),

                feedback.getDateOfBirth(),

                feedback.getAddress(),

                feedback.getAddress2(),

                feedback.getCity(),

                feedback.getState(),

                feedback.getZipCode(),

                feedback.getDaytimeTelephone(),

                feedback.getMessage()
        );
    }
}