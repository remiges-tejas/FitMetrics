package com.example.miniproject.service;

import com.example.miniproject.model.BmiResult;
import com.example.miniproject.model.Candidate;
import com.example.miniproject.exception.FileValidationException;
import com.example.miniproject.repository.BmiResultRepository;

import jakarta.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class BmiService {

    @Autowired
    private BmiResultRepository bmiResultRepository;

    // @Autowired
    // private JdbcTemplate jdbcTemplate;

    public List<BmiResult> calculateBmiFromFile(MultipartFile file) throws IOException, FileValidationException {
        List<Candidate> candidates = new CandidateFileReader().candidateReader(file);
        List<BmiResult> results = new ArrayList<>();

        for (Candidate candidate : candidates) {
            double bmiValue = candidate.processBMI();
            BmiResult bmiResult = new BmiResult();

         
            bmiResult.setPhone(candidate.getPhone());
            bmiResult.setName(candidate.getName());
            bmiResult.setWeight(candidate.getWeight());
            bmiResult.setHeight(candidate.getHeight());
            bmiResult.setBmi(bmiValue);
            bmiResult.setBmiStatus(determineBmiStatus(bmiValue));

            results.add(bmiResult);
        }

        // Save all results to the database at once
        bmiResultRepository.saveAll(results);
        return results;
    }


    @Transactional // Ensure this method runs in a transaction
    public boolean deleteBmiResults() {
        List<BmiResult> isDataPresent = bmiResultRepository.findAll();
        if (!isDataPresent.isEmpty()) {
            bmiResultRepository.deleteAll(); // Delete all records
            return true;

            // Reset the current_id in the id_sequence table to 0
            // jdbcTemplate.update("UPDATE id_sequence SET current_id = 0");
        }
        return false;
    }

    // Fetching The Data
    public List<BmiResult> getAllBmiResults() {
        return bmiResultRepository.findAll();
    }


    private int determineBmiStatus(double bmiValue) {
        if (bmiValue < 18.5) {
            return -1; // Underweight
        } else if (bmiValue < 24.9) {
            return 0; // Normal weight
        } else if (bmiValue < 29.9) {
            return 1; // Overweight
        } else {
            return 2; // Obese
        }
    }
    
}