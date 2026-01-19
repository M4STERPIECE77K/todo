import axios from 'axios';
import type { Task, TaskRequest, TaskResponse } from '../types/task';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const taskService = {
  /**
   * Récupère toutes les tâches
   * @param status - Filtre optionnel par statut
   */
  getAllTasks: async (status?: string): Promise<Task[]> => {
    const params = status ? { status } : {};
    const response = await apiClient.get<TaskResponse[]>('/v1/tasks', { params });
    return response.data;
  },

  /**
   * Crée une nouvelle tâche
   * @param task - Les données de la tâche à créer
   */
  createTask: async (task: TaskRequest): Promise<Task> => {
    const response = await apiClient.post<TaskResponse>('/v1/tasks', task);
    return response.data;
  },

  /**
   * Met à jour le statut d'une tâche
   * @param id - L'ID de la tâche
   * @param status - Le nouveau statut
   */
  updateTaskStatus: async (id: string, status: string): Promise<Task> => {
    const response = await apiClient.patch<TaskResponse>(
      `/v1/tasks/${id}/status`,
      null,
      { params: { status } }
    );
    return response.data;
  },

  /**
   * Supprime une tâche
   * @param id - L'ID de la tâche à supprimer
   */
  deleteTask: async (id: string): Promise<void> => {
    await apiClient.delete(`/v1/tasks/${id}`);
  },
};
