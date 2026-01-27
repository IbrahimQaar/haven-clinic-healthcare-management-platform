package com.techelevator.model.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class InsuranceProvider {

    private int insurance_id;

    @NotBlank(message = "Insurance provider name is required.")
    @Size(max = 100, message = "Provider name must be less than 100 characters.")
    @Pattern( regexp = "^[A-Za-z0-9&.,'\\-\\s]+$",
            message = "Provider name should contain only letters, numbers, and basic punctuation."
    )
    @JsonProperty("provider_name")
    private String provider_name;


    public InsuranceProvider() {}


    public InsuranceProvider(int insurance_id, String provider_name) {
        this.insurance_id = insurance_id;
        this.provider_name = provider_name;
    }


    public int getInsurance_id() {
        return insurance_id;
    }

    public void setInsurance_id(int insurance_id) {
        this.insurance_id = insurance_id;
    }

    public String getProvider_name() {
        return provider_name;
    }

    public void setProvider_name(String provider_name) {
        this.provider_name = provider_name;
    }

    @Override
    public String toString() {
        return "InsuranceProvider{" +
                "insurance_id=" + insurance_id +
                ", provider_name='" + provider_name + '\'' +
                '}';
    }
}
