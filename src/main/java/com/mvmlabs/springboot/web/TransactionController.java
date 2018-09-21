package com.mvmlabs.springboot.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/transactions")
public class TransactionController {

    @RequestMapping(value = "/deposit", method = RequestMethod.GET)
    public String deposit() {
        return "site.deposit";
    }

    @RequestMapping(value = "/withdrawal", method = RequestMethod.GET)
    public String withdrawal() {
        return "site.withdrawal";
    }

    @RequestMapping(value = "/transfer", method = RequestMethod.GET)
    public String transfer() {
        return "site.transfer";
    }

    @RequestMapping(value = "/show-history", method = RequestMethod.GET)
    public String showHistory() {
        return "site.show-history";
    }
}
