package com.techelevator.dao;

import com.techelevator.exception.DaoException;
import com.techelevator.model.dto.Appointment;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcAppointmentDao implements AppointmentDao {

    private final JdbcTemplate jdbcTemplate;

    public JdbcAppointmentDao(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    // Retrieve all appointments for a specific user
    @Override
    public List<Appointment> getAppointmentsByUserId(int userId) {
        List<Appointment> appointments = new ArrayList<>();

        String sql =
                "SELECT appointment_id, doctor_id, full_name, phone_number, email, user_id, " +
                        "appointment_date, appointment_time, status, reschedule_count, insurance_provider, is_new_patient " +
                        "FROM appointments " +
                        "WHERE user_id = ? " +
                        "ORDER BY appointment_date, appointment_time;";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, userId);
        while (results.next()) {
            appointments.add(mapRowToAppointment(results));
        }

        return appointments;
    }

    // Check if user has an active appointment
    @Override
    public boolean userHasActiveAppointment(int userId) {
        String sql =
                "SELECT COUNT(*) " +
                        "FROM appointments " +
                        "WHERE user_id = ? " +
                        "AND status = 'SCHEDULED';";

        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, userId);
        return count != null && count > 0;
    }

    // Create a new appointment
    @Override
    public Appointment createAppointment(Appointment appointment) {

        String sql =
                "INSERT INTO appointments " +
                        "(doctor_id, full_name, phone_number, email, user_id, appointment_date, appointment_time, status, insurance_provider, is_new_patient) " +
                        "VALUES (?, ?, ?, ?, ?, ?, ?, 'SCHEDULED', ?, ?) " +
                        "RETURNING appointment_id;";

        Integer appointmentId = jdbcTemplate.queryForObject(
                sql,
                Integer.class,
                appointment.getDoctorId(),
                appointment.getFullName(),
                appointment.getPhoneNumber(),
                appointment.getEmail(),
                appointment.getUserId(),
                appointment.getAppointmentDate(),
                appointment.getAppointmentTime(),
                appointment.getInsuranceProvider(),
                appointment.isNewPatient()
        );

        appointment.setAppointmentId(appointmentId);
        appointment.setStatus("SCHEDULED");

        return appointment;
    }

    @Override
    public Appointment cancelAppointment(int appointmentId, int userId) {
        String sql =
                "UPDATE appointments " +
                        "SET status = 'CANCELED', canceled_at = NOW() " +
                        "WHERE appointment_id = ? AND user_id = ? AND status = 'SCHEDULED' " +
                        "RETURNING appointment_id, doctor_id, full_name, phone_number, email, user_id, " +
                        "appointment_date, appointment_time, status, reschedule_count, insurance_provider, is_new_patient";

        SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql, appointmentId, userId);

        if (!rowSet.next()) {
            throw new DaoException("Appointment not found or cannot be canceled");
        }

        return mapRowToAppointment(rowSet);
    }


    // Map database row to Appointment object
    private Appointment mapRowToAppointment(SqlRowSet rowSet) {
        Appointment appointment = new Appointment();

        appointment.setAppointmentId(rowSet.getInt("appointment_id"));
        appointment.setDoctorId(rowSet.getInt("doctor_id"));

        // ✅ NEW fields
        appointment.setFullName(rowSet.getString("full_name"));
        appointment.setPhoneNumber(rowSet.getString("phone_number"));
        appointment.setEmail(rowSet.getString("email"));

        appointment.setUserId(rowSet.getInt("user_id"));
        appointment.setAppointmentDate(rowSet.getDate("appointment_date").toLocalDate());
        appointment.setAppointmentTime(rowSet.getTime("appointment_time").toLocalTime());
        appointment.setStatus(rowSet.getString("status"));
        appointment.setRescheduleCount(rowSet.getInt("reschedule_count"));
        appointment.setInsuranceProvider(rowSet.getString("insurance_provider"));
        appointment.setNewPatient(rowSet.getBoolean("is_new_patient"));

        return appointment;
    }


}