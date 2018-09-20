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

/**
 * Controller that demonstrates tiles mapping, reguest parameters and path variables.
 *
 * @author Mark Meany
 */
@Controller
public class GreetingController {
    private Log log = LogFactory.getLog(this.getClass());

    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public String home() {
        return "site.homepage";
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login() {
        return "site.login";
    }

    @RequestMapping(value = "/greet/{name}", method = RequestMethod.GET)
    public ModelAndView greetTwoWays(@PathVariable(value = "name") final String name, final Model model) {
        log.info("Controller has been invoked with Path Variable name = '" + name + "'.");
        return new ModelAndView("site.greeting", "name", name);
    }

    @RequestMapping("/atm")
    public String atmView() {
        return "site.atm";
    }
}
