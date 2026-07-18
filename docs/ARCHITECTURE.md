# ARCHITECTURE.md

# System Architecture

**Project:** TaskFlow – Student Task Manager  
**Version:** 1.0  
**Status:** Draft

---

# 1. Overview

TaskFlow follows a traditional MERN architecture.

```
React (Frontend)
        │
        │ HTTP Requests
        ▼
Express.js REST API
        │
        ▼
Business Logic (Controllers)
        │
        ▼
MongoDB (Database)
```

The architecture is intentionally simple, modular, and beginner-friendly.

---

# 2. Architecture Goals

The architecture should be:

- Simple
- Maintainable
- Modular
- Easy to explain
- Easy to debug
- Interview-friendly

Avoid enterprise patterns and unnecessary abstractions.

---

# 3. Technology Stack

## Frontend

- React
- Vite
- JavaScript

## Backend

- Node.js
- Express.js

## Database

- MongoDB

## API Style

- REST

---

# 4. High-Level Folder Structure

```
TaskFlow/

├── backend/
│
├── frontend/
│
├── docs/
│
├── .gitignore
│
└── README.md
```

---

# 5. Backend Structure

```
backend/

├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── app.js
├── server.js
└── package.json
```

### Purpose

config/

Database configuration.

controllers/

Business logic.

models/

MongoDB models.

routes/

REST API routes.

middleware/

Only middleware that is genuinely required.

---

# 6. Frontend Structure

```
frontend/

├── public/
├── src/
│
├── components/
├── pages/
├── services/
│
├── App.jsx
├── main.jsx
└── package.json
```

### Purpose

components/

Reusable UI components.

pages/

Application pages.

services/

API communication.

No unnecessary folders.

---

# 7. Data Flow

```
User

↓

React UI

↓

React State

↓

Axios Request

↓

Express Route

↓

Controller

↓

MongoDB Model

↓

MongoDB

↓

Response

↓

React State Update

↓

UI Re-render
```

---

# 8. Database

Database

TaskFlow

Collection

tasks

Each document represents one task.

---

# 9. Task Model

Fields

- title
- description
- dueDate
- priority
- status
- createdAt
- updatedAt

IDs are generated automatically by MongoDB.

---

# 10. REST API

Task APIs

GET /tasks

Return all tasks.

---

GET /tasks/:id

Return one task.

---

POST /tasks

Create a task.

---

PUT /tasks/:id

Update a task.

---

DELETE /tasks/:id

Delete a task.

---

# 11. HTTP Methods

GET

Retrieve data.

POST

Create data.

PUT

Update data.

DELETE

Remove data.

---

# 12. Frontend State

Initially, React state will manage:

- Task list
- Loading state
- Error state
- Search value
- Filter value
- Sort option

No external state management library is required.

---

# 13. Error Handling

Backend

Return proper HTTP status codes.

Examples

200

201

400

404

500

Frontend

Display user-friendly messages.

Avoid exposing technical errors.

---

# 14. Validation

Frontend

Basic form validation.

Backend

Request validation before database operations.

Never rely only on frontend validation.

---

# 15. Security

For MVP:

- Basic input validation
- Environment variables
- CORS configuration

Authentication is intentionally excluded.

---

# 16. API Communication

Frontend communicates with backend using Axios.

JSON is used for request and response bodies.

---

# 17. Design Principles

The architecture follows:

- KISS
- YAGNI
- Separation of concerns
- Readability
- Maintainability

Avoid unnecessary abstraction.

---

# 18. Scalability

The architecture should support future additions such as:

- Authentication
- Categories
- Tags
- Notifications

However, these should not influence the MVP implementation.

---

# 19. Interview Talking Points

This architecture demonstrates:

- MERN architecture
- REST APIs
- MVC-inspired backend organization
- CRUD operations
- Client-server communication
- MongoDB integration
- React state management
- Modular project organization

The architecture intentionally avoids unnecessary complexity while following professional software engineering practices.