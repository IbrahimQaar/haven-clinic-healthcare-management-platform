package com.techelevator.dao;

import com.techelevator.model.dto.InsuranceProvider;
import java.util.List;

public interface InsuranceDao {
    List<InsuranceProvider> getAllInsurance();
}
