package com.techelevator.dao;

import com.techelevator.model.dto.InsuranceProvider;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
@Repository
public class JdbcInsuranceDao implements InsuranceDao {

    private final JdbcTemplate template;
    public JdbcInsuranceDao(DataSource dataSource) {
        this.template = new JdbcTemplate(dataSource);
    }

    @Override
    public List<InsuranceProvider> getAllInsurance() {
        List<InsuranceProvider> list = new ArrayList<>();
        String sql = "SELECT insurance_id, provider_name FROM insurance_providers ORDER BY provider_name;";
        SqlRowSet rs = template.queryForRowSet(sql);
        while (rs.next()) {
            list.add(mapRowToInsurance(rs));
        }
        return list;
    }

    private InsuranceProvider mapRowToInsurance(SqlRowSet row) {
        InsuranceProvider p = new InsuranceProvider();
        p.setInsurance_id(row.getInt("insurance_id"));
        p.setProvider_name(row.getString("provider_name"));
        return p;
    }
}
