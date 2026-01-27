package com.techelevator.dao;

import com.techelevator.model.dto.SupportedLanguages;

import java.util.List;

public interface SupportedLanguagesDao {

    List<SupportedLanguages> getAllLanguages();
}
