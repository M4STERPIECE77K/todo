# TaskMaster - Fullstack Project

Project separated into Frontend (React) and Backend (Spring Boot).

## Project Structure

- `frontend/`: React + Vite + Chakra UI + Shadcn
- `backend/`: Java 21 + Spring Boot + Clean Architecture
- `database/`: SQL scripts for PostgreSQL initialization
- `scripts/`: Initialization and utility scripts
- `docker-compose.yml`: Integrated stack management

## Getting Started

### 1. Initialization

Run the initialization script to prepare the `.env` file:

```bash
./scripts/init.sh
```

### 2. Launch with Docker

```bash
docker-compose up --build -d
```

### 3. Access the services

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8080/api/v1/tasks
- **Swagger Documentation**: http://localhost:8080/api/swagger-ui.html

## Development

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
./gradlew bootRun
```

_(Requires JDK 21 and Gradle installed locally, otherwise use Docker)_
