package com.taskmaster.interfaces.rest.v1.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import java.time.OffsetDateTime;
import java.util.UUID;

@Data
public class TaskRequest {
    @NotBlank(message = "Title is required")
    private String title;
    private String description;
    private String priority;
    private String category;
    private boolean routine;
    private OffsetDateTime dueDate;
    private UUID userId;
}
