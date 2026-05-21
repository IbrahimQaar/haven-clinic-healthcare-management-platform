package com.techelevator.dao;
import com.techelevator.model.dto.ECard;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;

@Component
public class JdbcECardDao implements ECardDao {
    private final JdbcTemplate template;
    public JdbcECardDao(DataSource dataSource) {
        this.template = new JdbcTemplate(dataSource);
    }

    @Override
    public void saveECard(ECard eCard) {

        String sql = "INSERT INTO patient_ecards (" +
                        "patient_first_name, " +
                        "patient_last_name, " +
                        "hospital_location, " +
                        "room_number, " +
                        "card_design, " +
                        "message" +
                        ") " +

                        "VALUES (?, ?, ?, ?, ?, ?);";

        template.update(

                sql,

                eCard.getPatientFirstName(),

                eCard.getPatientLastName(),

                eCard.getHospitalLocation(),

                eCard.getRoomNumber(),

                eCard.getCardDesign(),

                eCard.getMessage()
        );
    }
}
