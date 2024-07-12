package com.bajka.todoapp.controller;

import com.bajka.todoapp.entity.Task;
import com.bajka.todoapp.service.TaskService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
@RequestMapping("/tasks")
public class TaskController {

    private final TaskService taskService;
    private final Logger logger = LoggerFactory.getLogger(TaskController.class);

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @PostMapping("/add")
    public Task addTask(@RequestBody Task task) {
        logger.info("Task object {}", task.toString());
        return taskService.createTask(task);
    }

    @PostMapping("/addMultiple")
    public List<Task> addTasks(@RequestBody List<Task> tasks) {
        return taskService.createTasks(tasks);
    }

    @GetMapping
    public List<Task> getAllTasks() {
        return taskService.getAllTasks();
    }

    @GetMapping("/{id}")
    public Task findTaskById(@PathVariable Long id) {
        return taskService.findTaskById(id);
    }

    @GetMapping("/username/{username}")
    public List<Task> findTasksByUsername(@PathVariable String username) {
        return taskService.findTasksByUsername(username);
    }

    @PutMapping("/update")
    public Task updateTask(@RequestBody Task task) {
        System.out.println("Task updated");
        return taskService.modifyTask(task);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteTask(@PathVariable Long id) {
        return taskService.removeTask(id);
    }
}
