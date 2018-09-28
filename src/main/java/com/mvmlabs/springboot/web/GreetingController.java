package com.mvmlabs.springboot.web;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class GreetingController {
    private Log log = LogFactory.getLog(this.getClass());

    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public String home() {
        return "site.homepage";
    }

	@RequestMapping(value = "/afterlogin", method=RequestMethod.GET)
	public String afterlogin() {
		return "site.afterlogin";
	}


    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login() {
        return "site.login";
    }

    @RequestMapping(value = "/register", method = RequestMethod.GET)
    public String create() {
        return "site.register";
    }

    @RequestMapping(value = "/conditions", method=RequestMethod.GET)
    public String conditions() {
        return "site.conditions";
    }
}
