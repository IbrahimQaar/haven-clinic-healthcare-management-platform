package com.techelevator.model.dto;

public class ClinicLocation {
    private int clinic_location_id;
    private String clinic_name;

    public ClinicLocation() {}

    public ClinicLocation(int clinic_location_id, String clinic_name) {
        this.clinic_location_id = clinic_location_id;
        this.clinic_name = clinic_name;
    }

    public int getClinic_location_id() {
        return clinic_location_id;
    }

    public void setClinic_location_id(int clinic_location_id) {
        this.clinic_location_id = clinic_location_id;
    }

    public String getClinic_name() {
        return clinic_name;
    }

    public void setClinic_name(String clinic_name) {
        this.clinic_name = clinic_name;
    }

    @Override
    public String toString() {
        return "ClinicLocation{" +
                "clinic_location_id=" + clinic_location_id +
                ", clinic_name='" + clinic_name + '\'' +
                '}';
    }
}
