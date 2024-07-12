package com.bajka.todoapp.repository;

import com.bajka.todoapp.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {
    Optional<Person> findByNameAndPassword(String name, String password);

    Optional<Person> findTopByName(String username);
}
