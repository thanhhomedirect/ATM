package com.mvmlabs.springboot.api;

import com.mvmlabs.springboot.model.ATMReponse;
import com.mvmlabs.springboot.model.request.ChangePassRequest;
import com.mvmlabs.springboot.model.request.LoginRequest;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/")
public class ApiAccountController {

    public static final String REST_URL = "http://localhost:8080";

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ATMReponse login(@RequestBody LoginRequest request) {
        RestTemplate restTemplate = new RestTemplate();

        ATMReponse atmReponse = restTemplate.postForObject(REST_URL + "/accounts/login", request, ATMReponse.class);
        return atmReponse;
    }

    @RequestMapping(value = "/accounts/detail/{id}", method = RequestMethod.GET)
    public ATMReponse accountDetail(@PathVariable int id) {
        RestTemplate restTemplate = new RestTemplate();
        ATMReponse atmReponse = restTemplate.getForObject(REST_URL + "/accounts/" + id, ATMReponse.class);
        return atmReponse;
    }

    @RequestMapping(value = "/accounts", method = RequestMethod.GET)
    public ATMReponse account() {
        RestTemplate restTemplate = new RestTemplate();
        ATMReponse atmReponse = restTemplate.getForObject(REST_URL + "/accounts/", ATMReponse.class);
        return atmReponse;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ATMReponse create(@RequestBody LoginRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        ATMReponse atmReponse = restTemplate.postForObject(REST_URL + "/accounts", request, ATMReponse.class);
        return atmReponse;
    }

    @RequestMapping(value = "/accounts/change-password", method = RequestMethod.PUT)
    public ATMReponse changePassword(@RequestBody ChangePassRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<?> httpEntity = new HttpEntity<>(request, httpHeaders);
        ResponseEntity<ATMReponse> atmReponse = restTemplate.exchange(REST_URL + "/accounts/change-password", HttpMethod.PUT, httpEntity, ATMReponse.class);

        return atmReponse.getBody();
    }
}