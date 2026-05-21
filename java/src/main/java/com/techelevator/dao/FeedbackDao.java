package com.techelevator.dao;

import com.techelevator.model.dto.Feedback;

public interface FeedbackDao {

    void saveFeedback(
            Feedback feedback
    );

}