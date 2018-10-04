package com.mvmlabs.springboot.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/accounts")
public class AccountController {

    @RequestMapping(value = "/detail", method = RequestMethod.GET)
    public String detail() {
        return "site.account-detail";
    }

    @RequestMapping(value = "/change-password", method = RequestMethod.GET)
    public String changePass() {
        return "site.change-password";
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public String accounts() {
        return "site.accounts";
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public String search() {
        return "site.search";
    }

    @RequestMapping(value = "/show-account", method = RequestMethod.GET)
    public String showAccount() {
        return "site.search-account";
    }
}
