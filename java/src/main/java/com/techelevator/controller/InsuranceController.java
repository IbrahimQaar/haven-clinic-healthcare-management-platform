package com.techelevator.controller;

import com.techelevator.dao.InsuranceDao;
import com.techelevator.model.dto.InsuranceProvider;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class InsuranceController {
    private final InsuranceDao insuranceDao;
    public InsuranceController(InsuranceDao insuranceDao) {
        this.insuranceDao = insuranceDao;
    }

    @GetMapping("/insurance-providers")
    public List<InsuranceProvider> getAllInsurance() {
        return insuranceDao.getAllInsurance();
    }
}
