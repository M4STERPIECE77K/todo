export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 'High' | 'Medium' | 'Low';
  category?: string;
  routine: boolean;
  dueDate?: string;
  status: string;
  createdAt: string;
}

export interface TaskRequest {
  title: string;
  description?: string;
  priority: 'High' | 'Medium' | 'Low';
  category?: string;
  routine: boolean;
  dueDate?: string;
  userId?: string;
}

export interface TaskResponse {
  id: string;
  title: string;
  description?: string;
  priority: 'High' | 'Medium' | 'Low';
  category?: string;
  routine: boolean;
  dueDate?: string;
  status: string;
  createdAt: string;
}
