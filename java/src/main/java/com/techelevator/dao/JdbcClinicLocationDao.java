package com.techelevator.dao;

import com.techelevator.model.dto.ClinicLocation;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Repository  // ✅ makes this class a Spring bean
public class JdbcClinicLocationDao implements ClinicLocationDao {

    private final JdbcTemplate template;

    public JdbcClinicLocationDao(DataSource dataSource) {
        this.template = new JdbcTemplate(dataSource);
    }

    @Override
    public List<ClinicLocation> getAllLocations() {
        List<ClinicLocation> locations = new ArrayList<>();

        String sql = "SELECT clinic_location_id, clinic_name FROM clinic_locations";

        SqlRowSet rs = template.queryForRowSet(sql);
        while (rs.next()) {
            locations.add(mapRowToClinicLocation(rs));
        }
        return locations;
    }

    private ClinicLocation mapRowToClinicLocation(SqlRowSet rowSet) {
        ClinicLocation clinicLocation = new ClinicLocation();
        clinicLocation.setClinic_location_id(rowSet.getInt("clinic_location_id"));
        clinicLocation.setClinic_name(rowSet.getString("clinic_name"));
        return clinicLocation;
    }
}
