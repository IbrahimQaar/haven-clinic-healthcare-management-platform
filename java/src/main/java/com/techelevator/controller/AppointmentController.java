package com.techelevator.controller;

import com.techelevator.dao.AppointmentDao;
import com.techelevator.dao.UserDao;
import com.techelevator.model.User;
import com.techelevator.model.dto.Appointment;
import com.techelevator.model.dto.CreateAppointment;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.security.Principal;
import java.time.DayOfWeek;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.time.LocalDate;
import java.time.LocalTime;

@RestController
@RequestMapping("/appointments")
@CrossOrigin
public class AppointmentController {

    private final AppointmentDao appointmentDao;
    private final UserDao userDao;

    public AppointmentController(AppointmentDao appointmentDao, UserDao userDao) {
        this.appointmentDao = appointmentDao;
        this.userDao = userDao;
    }

    // Get all appointments for logged-in user
    @GetMapping("/user/{userId}")
    @PreAuthorize("isAuthenticated()")
    public List<Appointment> getAppointmentsByUserId(@PathVariable int userId, Principal principal) {

        User currentUser = userDao.getUserByUsername(principal.getName());

        if (currentUser.getId() != userId) {
            throw new ResponseStatusException(
                    HttpStatus.FORBIDDEN,
                    "You can only view your own appointments"
            );
        }

        return appointmentDao.getAppointmentsByUserId(userId);
    }

    // Create appointment
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("isAuthenticated()")
    public Appointment createAppointment(@Valid @RequestBody CreateAppointment createAppointment, Principal principal){

        User currentUser = userDao.getUserByUsername(principal.getName());

        // Validate time
        if (createAppointment.getAppointmentTime() == null) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Please select a valid appointment time"
            );
        }

        // Validate date (past date)
        if (createAppointment.getAppointmentDate().isBefore(LocalDate.now())) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Cannot book past dates"
            );
        }

        // Validate time (past time today)
        if (createAppointment.getAppointmentDate().isEqual(LocalDate.now()) &&
                createAppointment.getAppointmentTime().isBefore(LocalTime.now())) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Cannot book past time"
            );
        }

        // Check active appointment
        if (appointmentDao.userHasActiveAppointment(currentUser.getId())) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "You already have an active appointment"
            );
        }

        Appointment appointment = new Appointment();

        appointment.setDoctorId(createAppointment.getDoctorId());
        appointment.setUserId(currentUser.getId());
        appointment.setFullName(createAppointment.getFullName());
        appointment.setPhoneNumber(createAppointment.getPhoneNumber());
        appointment.setEmail(createAppointment.getEmail());
        appointment.setAppointmentDate(createAppointment.getAppointmentDate());
        appointment.setAppointmentTime(createAppointment.getAppointmentTime());
        appointment.setInsuranceProvider(createAppointment.getInsuranceProvider());
        appointment.setNewPatient(createAppointment.getNewPatient());

        return appointmentDao.createAppointment(appointment);
    }

    // Get active appointment
    @GetMapping("/active")
    @PreAuthorize("isAuthenticated()")
    public Appointment getActiveAppointment(Principal principal) {

        User currentUser = userDao.getUserByUsername(principal.getName());
        List<Appointment> appointments = appointmentDao.getAppointmentsByUserId(currentUser.getId());

        for (Appointment appt : appointments) {
            if (appt.getStatus().equals("SCHEDULED")) {
                return appt;
            }
        }

        return null;
    }

    // Cancel appointment
    @PutMapping("/{appointmentId}/cancel")
    @PreAuthorize("isAuthenticated()")
    public Appointment cancelAppointment(@PathVariable int appointmentId, Principal principal) {

        User currentUser = userDao.getUserByUsername(principal.getName());
        return appointmentDao.cancelAppointment(appointmentId, currentUser.getId());
    }

    // Get cancelled appointments
    @GetMapping("/cancelled")
    @PreAuthorize("isAuthenticated()")
    public List<Appointment> getCancelledAppointments(Principal principal) {

        User currentUser = userDao.getUserByUsername(principal.getName());
        List<Appointment> appointments = appointmentDao.getAppointmentsByUserId(currentUser.getId());

        List<Appointment> cancelledAppointments = new ArrayList<>();

        for (Appointment appt : appointments) {
            if (appt.getStatus().equals("CANCELED")) {
                cancelledAppointments.add(appt);
            }
        }

        return cancelledAppointments;
    }

    // Get available time slots
    @GetMapping("/available-times")
    @PreAuthorize("isAuthenticated()")
    public List<LocalTime> getAvailableTimes(@RequestParam LocalDate date) {

        List<LocalTime> availableTimes = new ArrayList<>();

        // Sunday = closed
        if (date.getDayOfWeek() == DayOfWeek.SUNDAY) {
            return availableTimes;
        }

        // Default times (Mon–Fri)
        List<LocalTime> times = Arrays.asList(
                LocalTime.of(8, 0),
                LocalTime.of(8, 30),
                LocalTime.of(9, 0),
                LocalTime.of(9, 30),
                LocalTime.of(10, 0),
                LocalTime.of(10, 30),
                LocalTime.of(11, 0),
                LocalTime.of(11, 30),
                LocalTime.of(12, 0),
                LocalTime.of(13, 0),
                LocalTime.of(13, 30),
                LocalTime.of(14, 0),
                LocalTime.of(14, 30),
                LocalTime.of(15, 0),
                LocalTime.of(15, 30),
                LocalTime.of(16, 0)
        );

        // Saturday = limited times
        if (date.getDayOfWeek() == DayOfWeek.SATURDAY) {
            times = Arrays.asList(
                    LocalTime.of(9, 0),
                    LocalTime.of(9, 30),
                    LocalTime.of(10, 30),
                    LocalTime.of(11, 30),
                    LocalTime.of(12, 0)
            );
        }

        LocalDate today = LocalDate.now();
        LocalTime currentTime = LocalTime.now();

        if (!date.isEqual(today)) {
            return new ArrayList<>(times);
        }

        for (LocalTime time : times) {
            if (!time.isBefore(currentTime)) {
                availableTimes.add(time);
            }
        }

        return availableTimes;
    }
}