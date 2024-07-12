package com.bajka.todoapp.service;

import com.bajka.todoapp.entity.Person;
import com.bajka.todoapp.repository.PersonRepository;
import jakarta.persistence.NonUniqueResultException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    private final PersonRepository personRepository;

    @Autowired
    public PersonService(PersonRepository personRepository) {
        this.personRepository = personRepository;
    }

    public Person findPerson(Person person) {
        return personRepository.findByNameAndPassword(person.getName(), person.getPassword()).orElse(null);
    }

    public boolean doesPersonExist(String username, String password) {
        boolean usernameExists;
        boolean passwordExists;
        try {
            usernameExists = personRepository.findTopByName(username).isPresent();
            System.out.println("Username exists: " + usernameExists);
            passwordExists = personRepository.findByNameAndPassword(username, password).isPresent();
            System.out.println("Password exists: " + passwordExists);
        } catch (NonUniqueResultException e) {
            return true;
        }
        return usernameExists && passwordExists;
    }

    public boolean isUsernameTaken(String username) {
        boolean usernameExists;
        try {
            usernameExists = personRepository.findTopByName(username).isPresent();
            System.out.println("Username exists: " + usernameExists);
        } catch (NonUniqueResultException e) {
            return true;
        }
        return usernameExists;
    }

    public void registerPerson(Person person) {
        personRepository.save(person);
    }
}
