package com.techelevator.controller;

import com.techelevator.dao.GiftCardDao;
import com.techelevator.model.dto.GiftCard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class GiftCardController {

    @Autowired
    private GiftCardDao giftCardDao;

    @GetMapping("/giftCards")
    public List<GiftCard> getAllCards() {
        return giftCardDao.getAllCards();
    }
}
