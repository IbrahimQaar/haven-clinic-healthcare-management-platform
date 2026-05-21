package com.techelevator.controller;

import com.techelevator.dao.FeedbackDao;
import com.techelevator.model.dto.Feedback;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class FeedbackController {

    @Autowired
    private FeedbackDao feedbackDao;

    @PostMapping("/feedback")
    public void saveFeedback(
            @RequestBody Feedback feedback
    ) {

        feedbackDao.saveFeedback(
                feedback
        );
    }
}