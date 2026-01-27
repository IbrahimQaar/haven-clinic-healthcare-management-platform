package com.techelevator.model.dto;

public class SupportedLanguages {
    private int language_id;
    private String language_name;

    public SupportedLanguages(){

    }

    public SupportedLanguages(int language_id, String language_name) {
        this.language_id = language_id;
        this.language_name = language_name;
    }

    public int getLanguage_id() {
        return language_id;
    }

    public void setLanguage_id(int language_id) {
        this.language_id = language_id;
    }

    public String getLanguage_name() {
        return language_name;
    }

    public void setLanguage_name(String language_name) {
        this.language_name = language_name;
    }

    @Override
    public String toString() {
        return "SupportedLanguage{" +
                "language_id=" + language_id +
                ", language_name='" + language_name + '\'' +
                '}';
    }
}
