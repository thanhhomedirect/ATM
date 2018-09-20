/***************************************************************************
 * Copyright 2018 by HOMEDIRECT - All rights reserved.                *    
 **************************************************************************/
package com.mvmlabs.springboot.api;

import java.util.List;

import com.mvmlabs.springboot.model.TransactionHistory;
import com.mvmlabs.springboot.model.request.*;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.mvmlabs.springboot.model.Account;

@RestController
@RequestMapping("/api")
public class AtmApiController {

    public static final String REST_URL = "http://192.168.0.194:8080";

    @RequestMapping(value = "/getAccounts/{keyword}", method = RequestMethod.GET)
    public List<Account> getAccount(@PathVariable String keyword) {
        RestTemplate restTemplate = new RestTemplate();
        try {
            List<Account> account = restTemplate.getForObject(REST_URL + "/accounts/search/" + keyword, List.class);
            return account;
        } catch (Exception e) {
            throw e;
        }
    }

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
        Account account = restTemplate.postForObject(REST_URL + "/accounts/change-password", request, Account.class);
        return account;
    }

    @RequestMapping(value = "/transactions/withdrawal", method = RequestMethod.PUT)
    public Account withdraw(@RequestBody WithdrawRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<?> httpEntity = new HttpEntity<>(request, httpHeaders);
        ResponseEntity<Account> entity = restTemplate.exchange(REST_URL +"/transactions/withdrawal", HttpMethod.PUT, httpEntity, Account.class);

        return entity.getBody();
    }

    @RequestMapping(value = "/transactions/deposit", method = RequestMethod.PUT)
    public Account deposit(@RequestBody DepositRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<?> httpEntity = new HttpEntity<>(request, httpHeaders);
        ResponseEntity<Account> entity = restTemplate.exchange(REST_URL +"/transactions/deposit", HttpMethod.PUT, httpEntity, Account.class);

        return entity.getBody();
    }

    @RequestMapping(value = "/transactions/transfer", method = RequestMethod.PUT)
    public Account withdraw(@RequestBody TransferRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<?> httpEntity = new HttpEntity<>(request, httpHeaders);
        ResponseEntity<Account> entity = restTemplate.exchange(REST_URL +"/transactions/transfer", HttpMethod.PUT, httpEntity, Account.class);

        return entity.getBody();
    }

    @RequestMapping(value = "/transactions/show-history", method = RequestMethod.POST)
    public Iterable<TransactionHistory> historyTransaction(@RequestBody SearchTransactionHistoryRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        Iterable<TransactionHistory> transactionHistory = restTemplate.postForObject(REST_URL + "/transactions/show-history", request, Iterable.class);
        return transactionHistory;
    }
}

