package com.taskmaster.interfaces.rest.v1.controller;

import com.taskmaster.application.service.TaskService;
import com.taskmaster.domain.model.Task;
import com.taskmaster.interfaces.rest.v1.dto.TaskRequest;
import com.taskmaster.interfaces.rest.v1.dto.TaskResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/v1/tasks")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class TaskController {
    private final TaskService taskService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TaskResponse createTask(@Valid @RequestBody TaskRequest request) {
        Task task = Task.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .priority(request.getPriority())
                .category(request.getCategory())
                .routine(request.isRoutine())
                .dueDate(request.getDueDate())
                .userId(request.getUserId())
                .build();

        return toResponse(taskService.createTask(task));
    }

    @GetMapping
    public List<TaskResponse> getAllTasks(@RequestParam(required = false) String status) {
        List<Task> tasks = (status != null)
                ? taskService.getTasksByStatus(status)
                : taskService.getAllTasks();

        return tasks.stream().map(this::toResponse).collect(Collectors.toList());
    }

    @PatchMapping("/{id}/status")
    public TaskResponse updateStatus(@PathVariable UUID id, @RequestParam String status) {
        return toResponse(taskService.updateTaskStatus(id, status));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteTask(@PathVariable UUID id) {
        taskService.deleteTask(id);
    }

    private TaskResponse toResponse(Task domain) {
        TaskResponse response = new TaskResponse();
        response.setId(domain.getId());
        response.setTitle(domain.getTitle());
        response.setDescription(domain.getDescription());
        response.setPriority(domain.getPriority());
        response.setCategory(domain.getCategory());
        response.setRoutine(domain.isRoutine());
        response.setDueDate(domain.getDueDate());
        response.setStatus(domain.getStatus());
        response.setCreatedAt(domain.getCreatedAt());
        return response;
    }
}
