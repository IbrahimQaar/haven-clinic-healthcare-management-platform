package com.techelevator.dao;

import com.techelevator.dao.PatientGiftcardRequestDao;
import com.techelevator.model.dto.PatientGiftcardRequest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;

@Component
public class JdbcPatientGiftcardRequestDao implements PatientGiftcardRequestDao {

    private final JdbcTemplate template;

    public JdbcPatientGiftcardRequestDao(DataSource dataSource) {
        this.template = new JdbcTemplate(dataSource);
    }

    @Override
    public void createRequest(PatientGiftcardRequest request) {
        String sql = "INSERT INTO patient_giftcard_requests " +
                "(first_name, last_name, gift_card_name, clinic_name, message) " +
                "VALUES (?, ?, ?, ?, ?)";

        template.update(sql,
                request.getFirstName(),
                request.getLastName(),
                request.getGiftCardName(),
                request.getClinicName(),
                request.getMessage()
        );
    }
}
