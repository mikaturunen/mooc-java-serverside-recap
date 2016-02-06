package com.application;

import com.json.*;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.ClientHttpRequestInterceptor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@SpringBootApplication
@RestController
public class UiApplication {

	@RequestMapping("/resources")
	public Map<String, Object> home() {
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("id", UUID.randomUUID().toString());
		model.put("content", "Hello, World");
		return model;
	}

	@RequestMapping(method = RequestMethod.POST, value = "/bus")
	public VehicleActivity bus() {
		RestTemplate restTemplate = new RestTemplate();
		VehicleActivity test = restTemplate.getForObject("http://data.itsfactory.fi/journeys/api/1/vehicle-activity", VehicleActivity.class);
		return test;
	}

	public static void main(String[] args) {
		SpringApplication.run(UiApplication.class, args);
	}
}
