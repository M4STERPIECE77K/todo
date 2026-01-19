package com.taskmaster.domain.model;

import lombok.Builder;
import lombok.Data;
import java.time.OffsetDateTime;
import java.util.UUID;

@Data
@Builder
public class Task {
    private UUID id;
    private UUID userId;
    private String title;
    private String description;
    private String priority;
    private String category;
    private boolean routine;
    private OffsetDateTime dueDate;
    private String status;
    private OffsetDateTime createdAt;
    private OffsetDateTime updatedAt;
}
