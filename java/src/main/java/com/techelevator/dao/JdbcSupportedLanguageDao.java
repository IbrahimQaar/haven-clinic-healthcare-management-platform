package com.techelevator.dao;

import com.techelevator.model.dto.SupportedLanguages;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcSupportedLanguageDao implements SupportedLanguagesDao {

    private final JdbcTemplate template;

    public JdbcSupportedLanguageDao(DataSource dataSource){
        this.template = new JdbcTemplate(dataSource);
    }


    @Override
    public List<SupportedLanguages> getAllLanguages() {
        List<SupportedLanguages> languages = new ArrayList<>();
        String sql = "SELECT language_id, language_name FROM languages ORDER BY language_name;";
        SqlRowSet result = template.queryForRowSet(sql);

        while (result.next()){
            languages.add(mapRowToLanguages(result));
        }
        return languages;
    }



    private SupportedLanguages mapRowToLanguages(SqlRowSet rowSet) {
        SupportedLanguages lang = new SupportedLanguages();
        lang.setLanguage_id(rowSet.getInt("language_id"));
        lang.setLanguage_name(rowSet.getString("language_name"));

        return lang;
    }

}
