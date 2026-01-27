package com.techelevator.controller;

import com.techelevator.dao.DoctorsDao;
import com.techelevator.model.dto.DoctorsInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class DoctorsController {
    @Autowired
    private DoctorsDao doctorsDao;


    //    @RequestMapping(path = "/doctors", method = RequestMethod.GET)
    @GetMapping("/doctors")
    public List<DoctorsInfo> getAllDoctors() {
        return doctorsDao.getAllDoctors();
    }


}
