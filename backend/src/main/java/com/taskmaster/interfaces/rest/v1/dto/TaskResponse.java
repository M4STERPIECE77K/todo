package com.taskmaster.interfaces.rest.v1.dto;

import lombok.Data;
import java.time.OffsetDateTime;
import java.util.UUID;

@Data
public class TaskResponse {
    private UUID id;
    private String title;
    private String description;
    private String priority;
    private String category;
    private boolean routine;
    private OffsetDateTime dueDate;
    private String status;
    private OffsetDateTime createdAt;
}
