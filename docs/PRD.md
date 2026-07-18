# Product Requirements Document (PRD)

**Project:** TaskFlow – Student Task Manager  
**Version:** 1.0  
**Status:** Draft (Pending Approval)  
**Project Type:** MERN Stack Portfolio Project  
**Primary Purpose:** Resume, Portfolio, GitHub, Internship Interviews

---

# 1. Executive Summary

TaskFlow is a beginner-friendly MERN Stack web application that enables students to organize and track their academic and personal tasks.

The application demonstrates complete CRUD functionality, RESTful API development, React frontend integration, Express.js backend development, and MongoDB database operations.

The project is intentionally scoped as an MVP to maximize learning while avoiding unnecessary complexity. Every implemented feature should contribute directly to the portfolio, resume, or interview readiness.

---

# 2. Problem Statement

Students often manage assignments, projects, deadlines, and personal tasks using scattered notes or multiple applications.

TaskFlow provides a simple, centralized interface for creating, organizing, updating, and tracking daily tasks.

The project focuses on demonstrating full-stack software engineering practices rather than building a production-scale application.

---

# 3. Project Goals

The project should demonstrate:

- MERN Stack architecture
- CRUD operations
- RESTful API design
- React state management
- MongoDB integration
- Responsive UI development
- Clean project organization
- Professional Git workflow
- Beginner-friendly, maintainable code

---

# 4. Success Criteria

The project will be considered complete when users can:

- Create tasks
- View all tasks
- Update tasks
- Delete tasks
- Track task status
- Assign task priority
- View due dates
- Search tasks
- Filter tasks
- Sort tasks
- Use the application comfortably on desktop and mobile devices

---

# 5. Target User

Primary User:

A single student managing personal academic and daily tasks.

Characteristics:

- Individual use
- No authentication required
- No collaboration
- No multi-user support

---

# 6. Project Scope

## Included (MVP)

### Task Management

- Create Task
- View Tasks
- Edit Task
- Delete Task

### Task Properties

Each task contains:

- Title
- Description
- Due Date
- Priority
    - Low
    - Medium
    - High
- Status
    - Pending
    - In Progress
    - Completed

### Organization

- Search tasks
- Filter by status
- Sort by due date

### User Interface

- Responsive design
- Clean layout
- Consistent spacing
- Accessible forms
- Simple navigation

---

# 7. Out of Scope

The following features are intentionally excluded from the MVP.

## Authentication

- Login
- Registration
- JWT
- Password Reset

Reason:

Authentication will be demonstrated in another portfolio project.

---

## Collaboration

- Multiple users
- Shared tasks
- Teams

---

## Notifications

- Email reminders
- Browser notifications
- SMS

---

## File Uploads

- Attachments
- Images
- Documents

---

## Advanced Features

- Drag and Drop Boards
- Analytics Dashboard
- Real-Time Updates
- Chat
- Comments
- Activity Logs

---

## UI Enhancements

- Dark Mode
- Themes
- Advanced Animations

---

# 8. Functional Requirements

## FR-1 Create Task

The user should be able to create a new task by providing the required information.

---

## FR-2 View Tasks

The application should display all existing tasks.

---

## FR-3 Update Task

The user should be able to modify any task.

---

## FR-4 Delete Task

The user should be able to remove any task after confirmation.

---

## FR-5 Search

The user should be able to search tasks using the task title.

---

## FR-6 Filter

The user should be able to filter tasks by status.

---

## FR-7 Sort

The user should be able to sort tasks by due date.

---

## FR-8 Responsive Design

The interface should work correctly on:

- Desktop
- Tablet
- Mobile

---

# 9. Non-Functional Requirements

The application should be:

- Responsive
- Maintainable
- Beginner-friendly
- Readable
- Modular
- Lightweight
- Easy to explain during interviews

Performance optimization is not a primary goal beyond normal responsiveness.

---

# 10. Technology Stack

## Frontend

- React
- Vite
- JavaScript

## Backend

- Node.js
- Express.js

## Database

- MongoDB

## Tools

- Git
- GitHub
- Postman

---

# 11. High-Level Data Model

Task

- Title
- Description
- Due Date
- Priority
- Status
- Created At
- Updated At

The detailed database schema will be finalized during the Architecture phase.

---

# 12. High-Level API Overview

The application will expose RESTful APIs.

Expected endpoints include:

- GET /tasks
- GET /tasks/:id
- POST /tasks
- PUT /tasks/:id
- DELETE /tasks/:id

Detailed request and response specifications will be documented during the Architecture phase.

---

# 13. UI/UX Requirements

The interface should be:

- Clean
- Modern
- Minimal
- Consistent
- Responsive
- Accessible

The design will be inspired by Vercel's design philosophy while remaining simple and beginner-friendly.

---

# 14. AI Development Guidelines

This project will be developed with AI assistance.

The AI must follow these principles:

- KISS
- YAGNI
- Readability over cleverness
- Explain before implementing
- Avoid unnecessary abstractions
- Avoid unnecessary files
- Avoid unnecessary dependencies
- Make minimal code changes
- Fix root causes instead of layering workarounds
- Keep the project interview-friendly

The AI should always recommend the simplest correct implementation.

---

# 15. Acceptance Criteria

The MVP is complete when:

- All CRUD operations work correctly.
- Data is stored in MongoDB.
- React communicates successfully with Express APIs.
- REST APIs behave correctly.
- Search, filter, and sort work.
- The UI is responsive.
- The project structure is clean.
- Documentation is complete.
- The application supports every resume bullet honestly.

---

# 16. Risks

Potential risks include:

- Feature creep
- AI-generated over-engineering
- Excessive dependencies
- Unnecessary abstractions
- Large refactors
- Inconsistent UI

These risks will be mitigated by following the project philosophy.

---

# 17. Assumptions

This project assumes:

- Single-user usage
- Local development during implementation
- MongoDB database availability
- Modern web browsers
- Stable internet connection during development

---

# 18. Future Enhancements

The following may be implemented after the MVP if desired:

- Authentication
- Authorization
- Categories
- Tags
- Dark Mode
- Notifications
- File Attachments
- Drag-and-Drop Boards
- Team Collaboration
- Analytics Dashboard
- Calendar View
- Recurring Tasks

These enhancements are **not** part of the MVP and should not influence the architecture or implementation of the initial release.