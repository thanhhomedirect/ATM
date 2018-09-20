package com.mvmlabs.springboot.web;

import com.mvmlabs.springboot.model.Account;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.client.RestTemplate;

@Controller
@RequestMapping("/accounts")
public class AccountController {
    @RequestMapping(value = "/detail", method = RequestMethod.GET)
    public String detail(@PathVariable Integer id) {
        return "site.accounts-detail";
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public String accounts() {
        return "site.accounts";
    }
}
