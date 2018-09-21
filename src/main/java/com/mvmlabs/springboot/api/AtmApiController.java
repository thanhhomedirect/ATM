/***************************************************************************
 * Copyright 2018 by HOMEDIRECT - All rights reserved.                *    
 **************************************************************************/
package com.mvmlabs.springboot.api;

import java.util.List;

import com.mvmlabs.springboot.model.TransactionHistory;
import com.mvmlabs.springboot.model.request.*;
import org.springframework.data.domain.Page;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.mvmlabs.springboot.model.Account;

@RestController
@RequestMapping("/api")
public class AtmApiController {

    public static final String REST_URL = "http://localhost:8080";

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public Account login(@RequestBody LoginRequest request) {
        RestTemplate restTemplate = new RestTemplate();

        Account account = restTemplate.postForObject(REST_URL + "/accounts/login", request, Account.class);
        return account;
    }

    @RequestMapping(value = "/accounts/detail/{id}", method = RequestMethod.GET)
    public Account accountDetail(@PathVariable Integer id) {
        RestTemplate restTemplate = new RestTemplate();
        Account account = restTemplate.getForObject(REST_URL + "/accounts/show-account/" + id, Account.class);
        return account;
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public Account create(@RequestBody LoginRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        Account account = restTemplate.postForObject(REST_URL + "/accounts/create", request, Account.class);
        return account;
    }

    @RequestMapping(value = "/accounts/change-password", method = RequestMethod.PUT)
    public Account changePassword(@RequestBody ChangePassRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<?> httpEntity = new HttpEntity<>(request, httpHeaders);
        ResponseEntity<Account> entity = restTemplate.exchange(REST_URL + "/accounts/change-password/", HttpMethod.PUT, httpEntity, Account.class);

        return entity.getBody();
    }

    @RequestMapping(value = "/transactions/withdrawal", method = RequestMethod.PUT)
    public Account withdraw(@RequestBody WithdrawRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<?> httpEntity = new HttpEntity<>(request, httpHeaders);
        ResponseEntity<Account> entity = restTemplate.exchange(REST_URL + "/transactions/withdrawal", HttpMethod.PUT, httpEntity, Account.class);

        return entity.getBody();
    }

    @RequestMapping(value = "/transactions/deposit", method = RequestMethod.PUT)
    public Account deposit(@RequestBody DepositRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<?> httpEntity = new HttpEntity<>(request, httpHeaders);
        ResponseEntity<Account> entity = restTemplate.exchange(REST_URL + "/transactions/deposit", HttpMethod.PUT, httpEntity, Account.class);

        return entity.getBody();
    }

    @RequestMapping(value = "/transactions/transfer", method = RequestMethod.PUT)
    public Account withdraw(@RequestBody TransferRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<?> httpEntity = new HttpEntity<>(request, httpHeaders);
        ResponseEntity<Account> entity = restTemplate.exchange(REST_URL + "/transactions/transfer", HttpMethod.PUT, httpEntity, Account.class);

        return entity.getBody();
    }

    @RequestMapping(value = "/transactions/show-history", method = RequestMethod.POST)
    public Page<TransactionHistory> historyTransaction(@RequestBody SearchTransactionHistoryRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        Page<TransactionHistory> transactionHistory = restTemplate.postForObject(REST_URL + "/transactions/show-history", request, Page.class);
        return transactionHistory;
    }

    @RequestMapping(value = "/search-account", method = RequestMethod.GET)
    public Iterable<Account> getAccount(@RequestParam String q) {
        RestTemplate restTemplate = new RestTemplate();
        Iterable<Account> account = restTemplate.getForObject(REST_URL + "/accounts/search?q=" + q, Iterable.class);
        return account;
    }
}

