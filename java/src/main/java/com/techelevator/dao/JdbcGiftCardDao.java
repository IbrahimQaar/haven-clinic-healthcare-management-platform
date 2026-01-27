package com.techelevator.dao;

import com.techelevator.model.dto.GiftCard;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcGiftCardDao implements GiftCardDao {

    private final JdbcTemplate template;

    public JdbcGiftCardDao(DataSource dataSource) {
        this.template = new JdbcTemplate(dataSource);
    }

    @Override
    public List<GiftCard> getAllCards() {
        List<GiftCard> cards = new ArrayList<>();
        String sql = "SELECT * FROM gift_cards;";

        SqlRowSet results = template.queryForRowSet(sql);
        while (results.next()) {
            cards.add(mapRowToGiftCard(results));
        }
        return cards;
    }

    private GiftCard mapRowToGiftCard(SqlRowSet row) {
        GiftCard card = new GiftCard();
        card.setId(row.getInt("id"));
        card.setCardName(row.getString("giftCardName"));
        return card;
    }
}
