package com.taskmaster.domain.repository;

import com.taskmaster.domain.model.Task;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface TaskRepository {
    Task save(Task task);

    Optional<Task> findById(UUID id);

    List<Task> findAll();

    List<Task> findByStatus(String status);

    void deleteById(UUID id);
}
