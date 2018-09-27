package com.mvmlabs.springboot.api;

import com.mvmlabs.springboot.model.ATMReponse;
import com.mvmlabs.springboot.model.TransactionHistory;
import com.mvmlabs.springboot.model.request.DepositRequest;
import com.mvmlabs.springboot.model.request.SearchTransactionHistoryRequest;
import com.mvmlabs.springboot.model.request.TransferRequest;
import com.mvmlabs.springboot.model.request.WithdrawRequest;
import org.springframework.data.domain.Page;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/transactions")
public class ApiTransactionController {

    public static final String REST_URL = "http://localhost:8080";

    @RequestMapping(value = "/withdrawal", method = RequestMethod.PUT)
    public ATMReponse withdraw(@RequestBody WithdrawRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<?> httpEntity = new HttpEntity<>(request, httpHeaders);
        ResponseEntity<ATMReponse> atmReponse = restTemplate.exchange(REST_URL + "/transactions/withdrawal", HttpMethod.PUT, httpEntity, ATMReponse.class);

        return atmReponse.getBody();
    }

    @RequestMapping(value = "/deposit", method = RequestMethod.PUT)
    public ATMReponse deposit(@RequestBody DepositRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<?> httpEntity = new HttpEntity<>(request, httpHeaders);
        ResponseEntity<ATMReponse> atmReponse = restTemplate.exchange(REST_URL + "/transactions/deposit", HttpMethod.PUT, httpEntity, ATMReponse.class);

        return atmReponse.getBody();
    }

    @RequestMapping(value = "/transfer", method = RequestMethod.PUT)
    public ATMReponse transfer(@RequestBody TransferRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<?> httpEntity = new HttpEntity<>(request, httpHeaders);
        ResponseEntity<ATMReponse> atmReponse = restTemplate.exchange(REST_URL + "/transactions/transfer", HttpMethod.PUT, httpEntity, ATMReponse.class);

        return atmReponse.getBody();
    }

    @RequestMapping(value = "/show-history", method = RequestMethod.POST)
    public Page<TransactionHistory> historyTransaction(@RequestBody SearchTransactionHistoryRequest request) {
        RestTemplate restTemplate = new RestTemplate();
        Page<TransactionHistory> transactionHistory = restTemplate.postForObject(REST_URL + "/transactions/show-history", request, Page.class);
        return transactionHistory;
    }
}
