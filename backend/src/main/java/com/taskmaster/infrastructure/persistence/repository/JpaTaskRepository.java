package com.taskmaster.infrastructure.persistence.repository;

import com.taskmaster.infrastructure.persistence.entity.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface JpaTaskRepository extends JpaRepository<TaskEntity, UUID> {
    List<TaskEntity> findByStatus(String status);
}
