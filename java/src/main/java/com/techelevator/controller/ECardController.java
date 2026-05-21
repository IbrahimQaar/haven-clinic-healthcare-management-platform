package com.techelevator.controller;
import com.techelevator.dao.ECardDao;
import com.techelevator.model.dto.ECard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class ECardController {

    @Autowired
    private ECardDao eCardDao;

    @PostMapping("/ecards")
    public void saveECard( @RequestBody ECard eCard) {
        eCardDao.saveECard(eCard);
    }
}
