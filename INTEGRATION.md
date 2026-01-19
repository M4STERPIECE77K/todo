# Intégration Frontend-Backend

## Vue d'ensemble

Le frontend React a été connecté au backend Spring Boot. Voici les changements effectués:

## Fichiers créés

### 1. Types TypeScript (`/frontend/src/types/task.ts`)

- Définit les interfaces `Task`, `TaskRequest`, et `TaskResponse`
- Correspond aux DTOs du backend Java

### 2. Service API (`/frontend/src/services/taskService.ts`)

- Utilise Axios pour communiquer avec le backend
- Fonctions disponibles:
  - `getAllTasks(status?)` - Récupère toutes les tâches
  - `createTask(task)` - Crée une nouvelle tâche
  - `updateTaskStatus(id, status)` - Met à jour le statut d'une tâche
  - `deleteTask(id)` - Supprime une tâche

## Composants mis à jour

### 1. Dashboard (`/frontend/src/pages/TaskInput.tsx`)

- Gère l'état global des tâches
- Charge les tâches au montage du composant
- Passe les tâches aux composants enfants

### 2. TaskInput

- Permet de créer de nouvelles tâches
- Appelle l'API backend lors de la soumission
- Affiche un état de chargement pendant la création

### 3. Pages (Today, Inbox, Upcoming, Completed)

- Acceptent les tâches via props
- Affichent les tâches dynamiquement depuis le backend
- Filtrent les tâches selon le contexte de la page

## Configuration

### Variables d'environnement (`.env`)

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

## Utilisation

### 1. Démarrer le backend

```bash
cd backend
./gradlew bootRun
```

### 2. Démarrer le frontend

```bash
cd frontend
npm run dev
```

### 3. Accéder à l'application

Ouvrez votre navigateur à `http://localhost:5173`

## Fonctionnalités implémentées

✅ **Création de tâches** - Créez de nouvelles tâches via l'interface
✅ **Affichage des tâches** - Les tâches sont chargées depuis le backend
✅ **Filtrage par priorité** - Les tâches haute priorité sont affichées séparément
✅ **Tâches routinières** - Les tâches routinières sont identifiées visuellement
✅ **Gestion d'erreurs** - Messages d'erreur si le backend n'est pas disponible

## Fonctionnalités à implémenter

⏳ **Mise à jour du statut** - Marquer les tâches comme complétées
⏳ **Suppression de tâches** - Supprimer des tâches existantes
⏳ **Édition de tâches** - Modifier les détails d'une tâche
⏳ **Filtrage par date** - Afficher les tâches d'aujourd'hui, à venir, etc.
⏳ **Recherche** - Rechercher des tâches par titre ou description

## API Endpoints utilisés

- `GET /v1/tasks` - Récupérer toutes les tâches
- `GET /v1/tasks?status={status}` - Filtrer par statut
- `POST /v1/tasks` - Créer une nouvelle tâche
- `PATCH /v1/tasks/{id}/status?status={status}` - Mettre à jour le statut
- `DELETE /v1/tasks/{id}` - Supprimer une tâche

## Structure des données

### TaskRequest (Frontend → Backend)

```typescript
{
  title: string;
  description?: string;
  priority: 'High' | 'Medium' | 'Low';
  category?: string;
  routine: boolean;
  dueDate?: string;
  userId?: string;
}
```

### TaskResponse (Backend → Frontend)

```typescript
{
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
```

## Notes importantes

1. **CORS**: Le backend est configuré avec `@CrossOrigin(origins = "*")` pour permettre les requêtes du frontend
2. **Base URL**: L'URL de l'API est configurable via la variable d'environnement `VITE_API_BASE_URL`
3. **Gestion d'erreurs**: Des alertes sont affichées si le backend n'est pas accessible
4. **État de chargement**: L'interface affiche "Loading tasks..." pendant le chargement initial

## Dépannage

### Le frontend ne peut pas se connecter au backend

- Vérifiez que le backend est démarré sur le port 8080
- Vérifiez la variable `VITE_API_BASE_URL` dans `.env`
- Vérifiez la console du navigateur pour les erreurs CORS

### Les tâches ne s'affichent pas

- Ouvrez la console du navigateur (F12)
- Vérifiez les erreurs réseau dans l'onglet Network
- Vérifiez que le backend retourne des données valides

### Erreur lors de la création de tâches

- Vérifiez que tous les champs requis sont remplis
- Vérifiez les logs du backend pour les erreurs de validation
