package com.bajka.todoapp.controller;

import com.bajka.todoapp.entity.Person;
import com.bajka.todoapp.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = { "http://localhost:3000" })
@RequestMapping("/persons")
public class PersonController {

    private final PersonService personService;

    @Autowired
    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    @PostMapping("/login")
    public Person getPersonByCredentials(@RequestBody Person person) {
        System.out.println("Retrieving Person by username and password");
        return personService.findPerson(person);
    }

    @GetMapping("/login/{username}/{password}")
    public boolean checkPersonCredentials(@PathVariable String username, @PathVariable String password) {
        System.out.println("Checking Person credentials by username and password");
        return personService.doesPersonExist(username, password);
    }

    @PostMapping("/create")
    public boolean createPerson(@RequestBody Person person) {
        boolean userExists = personService.isUsernameTaken(person.getName());
        if (userExists) {
            System.out.println("Cannot create person, username already taken");
            return false;
        }
        personService.registerPerson(person);
        return true;
    }
}
