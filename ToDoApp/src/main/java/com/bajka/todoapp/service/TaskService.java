package com.bajka.todoapp.service;

import com.bajka.todoapp.entity.Task;
import com.bajka.todoapp.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }
    public List<Task> createTasks(List<Task> tasks) {
        return taskRepository.saveAll(tasks);
    }
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
    public Task findTaskById(Long id) {
        return taskRepository.findById(id).orElse(null);
    }

    public List<Task> findTasksByUsername(String username) {
        return taskRepository.findByUsername(username);
    }
    public Task modifyTask(Task task) {
        Task currentTask = taskRepository.findById(task.getId()).orElse(null);
        if (currentTask != null) {
            currentTask.setName(task.getName());
            currentTask.setDescription(task.getDescription());
            currentTask.setDeadline(task.getDeadline());
            currentTask.setCompleted(task.isCompleted());
            currentTask.setUsername(task.getUsername());
        }
        return taskRepository.save(currentTask);
    }
    public String removeTask(Long id) {
        taskRepository.deleteById(id);
        return "Task with ID " + id + " has been deleted";
    }
}
