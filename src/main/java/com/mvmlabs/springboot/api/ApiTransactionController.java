package com.mvmlabs.springboot.api;

import com.mvmlabs.springboot.model.ATMReponse;
import com.mvmlabs.springboot.model.request.DepositRequest;
import com.mvmlabs.springboot.model.request.TransferRequest;
import com.mvmlabs.springboot.model.request.WithdrawRequest;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
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

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public ATMReponse historyTransaction(@RequestParam("accountId") int id,
                                         @RequestParam(value = "toDate", required = false) String toDate,
                                         @RequestParam(value = "fromDate", required = false) String fromDate,
                                         @RequestParam(value = "type", required = false) String type,
                                         @RequestParam(defaultValue = "0") int pageNo) {
        RestTemplate restTemplate = new RestTemplate();
        ATMReponse transactionHistory = restTemplate.getForObject(REST_URL + "/transactions/search?accountId=" + id + "&toDate=" + toDate +
                "&fromDate=" + fromDate + "&type=" + type + "&pageNo=" +pageNo, ATMReponse.class);
        return transactionHistory;
    }

    @RequestMapping(value = "/excel-transactions", method = RequestMethod.GET)
    public ATMReponse historyTransaction(@RequestParam("accountId") int id) {
        RestTemplate restTemplate = new RestTemplate();
        ATMReponse transactionHistory = restTemplate.getForObject(REST_URL + "/excel/transactions?accountId=" + id, ATMReponse.class);
        return transactionHistory;
    }
}
