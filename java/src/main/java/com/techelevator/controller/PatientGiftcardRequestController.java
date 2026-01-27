package com.techelevator.controller;


import com.techelevator.dao.PatientGiftcardRequestDao;
import com.techelevator.model.dto.PatientGiftcardRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class PatientGiftcardRequestController {

    @Autowired
    private PatientGiftcardRequestDao requestDao;

    @PostMapping("/giftcard-requests")
    public void createRequest(@RequestBody PatientGiftcardRequest request) {
        requestDao.createRequest(request);
    }
}
