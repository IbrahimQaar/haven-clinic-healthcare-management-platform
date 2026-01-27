package com.techelevator.controller;

import com.techelevator.dao.SupportedLanguagesDao;
import com.techelevator.model.dto.SupportedLanguages;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class SupportedLanguageController {
    @Autowired
    private SupportedLanguagesDao supportedLanguageDao;


    @GetMapping("/languages")
    public List<SupportedLanguages> getAllLanguages() {
        return supportedLanguageDao.getAllLanguages();
    }
}



