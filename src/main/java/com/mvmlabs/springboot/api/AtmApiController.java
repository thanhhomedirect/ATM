/***************************************************************************
 * Copyright 2018 by HOMEDIRECT - All rights reserved.                *    
 **************************************************************************/
package com.mvmlabs.springboot.api;

import java.util.List;

import com.mvmlabs.springboot.model.request.LoginRequest;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.mvmlabs.springboot.model.Account;

@RestController
@RequestMapping("/api")
public class AtmApiController {

    public static final String REST_URL = "http://192.168.0.194:8090";

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
        System.out.println(account);
        return account;
    }

    @RequestMapping(value = "/accounts/detail/{id}", method = RequestMethod.GET)
    public Account accountDetail(@PathVariable Integer id) {
        RestTemplate restTemplate = new RestTemplate();
        Account account = restTemplate.getForObject(REST_URL + "/accounts/show-account/" + id, Account.class);
        return account;
    }
}
