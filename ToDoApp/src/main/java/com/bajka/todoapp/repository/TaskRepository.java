package com.bajka.todoapp.repository;

import com.bajka.todoapp.entity.Person;
import com.bajka.todoapp.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    Task findByName(String name);
    List<Task> findByUsername(String username);
}
