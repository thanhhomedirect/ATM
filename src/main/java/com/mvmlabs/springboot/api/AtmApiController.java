/***************************************************************************
 * Copyright 2018 by HOMEDIRECT - All rights reserved.                *    
 **************************************************************************/
package com.mvmlabs.springboot.api;

import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.mvmlabs.springboot.model.Account;

/**
 *  Author : Pham Duc Anh
 *          Email: anh.phamduc@homedirect.com.vn
 * Sep 17, 2018
 */
@RestController
@RequestMapping("/api")
public class AtmApiController {

  public static final String REST_URL = "http://127.0.0.1:8090";
  
  @RequestMapping(value = "/getAccounts", method=RequestMethod.GET)
  public List<Account> getAccount() {
    RestTemplate restTemplate = new RestTemplate();
    try {
      List<Account> account = restTemplate.getForObject(REST_URL + "/accounts", List.class);
      return account;
    } catch (Exception e) {
      throw e;
    }
  }

}
