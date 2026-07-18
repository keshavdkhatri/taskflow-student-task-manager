# DESIGN.md

# Design Guidelines

**Project:** TaskFlow – Student Task Manager  
**Version:** 1.0  
**Status:** Draft

---

# 1. Design Philosophy

TaskFlow should feel modern, clean, and professional while remaining simple to build and maintain.

The design is inspired by Vercel's design philosophy, emphasizing clarity, consistency, and usability over visual effects.

Core principles:

- Minimal
- Professional
- Consistent
- Responsive
- Accessible
- Beginner-friendly

The interface should prioritize readability and ease of use.

---

# 2. Design Goals

The UI should:

- Be clean and uncluttered.
- Require minimal learning for new users.
- Work well on desktop, tablet, and mobile devices.
- Present information clearly.
- Feel consistent across all pages.

---

# 3. Visual Style

The overall appearance should be:

- Flat and modern
- Spacious
- Lightweight
- Neutral
- Professional

Avoid visual noise.

---

# 4. Color Palette

Primary

- Black
- White

Accent

- Blue

Success

- Green

Warning

- Orange

Danger

- Red

Background

- Very light gray or white

Text

Primary:
- Near black

Secondary:
- Medium gray

Avoid excessive colors.

---

# 5. Typography

Use a clean sans-serif font.

Examples:

- Inter
- Geist
- System UI fonts

Typography hierarchy:

Heading 1

- Page titles

Heading 2

- Section titles

Heading 3

- Card titles

Body

- General content

Small Text

- Helper text

Maintain consistent font weights.

---

# 6. Spacing

Use a consistent spacing system.

Recommended scale:

- 4px
- 8px
- 12px
- 16px
- 24px
- 32px
- 48px

Avoid inconsistent spacing.

Whitespace is encouraged.

---

# 7. Border Radius

Cards

- Medium radius

Buttons

- Medium radius

Inputs

- Medium radius

Avoid overly rounded components.

---

# 8. Shadows

Use subtle shadows only.

Cards may have light elevation.

Avoid heavy shadows.

---

# 9. Layout

The application should use a centered layout.

Recommended maximum content width:

- 1200px

Maintain comfortable margins.

---

# 10. Navigation

Keep navigation simple.

Initial MVP requires:

- Application title
- Main task page

Avoid complex navigation systems.

---

# 11. Cards

Each task should appear inside a card.

Each card should display:

- Title
- Description
- Due Date
- Priority
- Status
- Action buttons

Cards should be visually separated using spacing rather than heavy borders.

---

# 12. Buttons

Primary

Used for:

- Create
- Save

Secondary

Used for:

- Cancel

Danger

Used for:

- Delete

Buttons should have consistent sizing.

---

# 13. Forms

Forms should be simple.

Each field should include:

- Label
- Input
- Validation message when necessary

Required fields should be clearly indicated.

---

# 14. Input Components

The project will primarily use:

- Text input
- Textarea
- Select dropdown
- Date picker
- Buttons

Avoid custom form controls unless necessary.

---

# 15. Status Display

Task status should be visually distinguishable.

Pending

- Neutral

In Progress

- Blue

Completed

- Green

Do not rely only on color.

Labels should always be visible.

---

# 16. Priority Display

Priority should be displayed clearly.

Low

Medium

High

Keep styling simple.

---

# 17. Search and Filter Area

Place search and filters near the top of the page.

Recommended order:

- Search
- Status Filter
- Sort
- Create Task Button

---

# 18. Empty State

When no tasks exist, display:

- Friendly message
- Short explanation
- Call-to-action button

Example:

"No tasks yet."

"Create your first task to get started."

---

# 19. Loading State

While data is loading:

Display a simple loading indicator.

Avoid complex skeleton loaders for the MVP.

---

# 20. Error State

Errors should be displayed clearly.

Examples:

- Unable to load tasks.
- Failed to save task.

Avoid technical error messages.

---

# 21. Responsive Design

Desktop

Primary layout.

Tablet

Adjust spacing and card width.

Mobile

Single-column layout.

Buttons should remain easily tappable.

Forms should fit without horizontal scrolling.

---

# 22. Accessibility

Follow basic accessibility practices.

- Sufficient color contrast
- Visible focus states
- Keyboard navigation
- Proper labels
- Readable font sizes

---

# 23. Animation

Use minimal animations.

Examples:

- Button hover
- Card hover
- Modal appearance

Avoid excessive motion.

---

# 24. Icons

Use a single icon library consistently.

Icons should support actions such as:

- Edit
- Delete
- Search
- Add

Do not overuse icons.

---

# 25. Design Principles Summary

Every screen should feel:

- Simple
- Consistent
- Fast
- Professional
- Spacious
- Easy to understand

The design should enhance usability without distracting from the project's primary purpose: demonstrating clean MERN development.