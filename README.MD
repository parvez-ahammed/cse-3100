<div align="center">

# 🎓 CSE-3100 — Web Application Development with DevOps

**Course repository for full-stack web development with a DevOps focus — Laravel, React, Docker, and CI/CD.**

_Ahsanullah University of Science and Technology · Fall 2024_

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](./LICENSE)
[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?logo=laravel&logoColor=white)](https://laravel.com)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://react.dev)
[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)](https://www.docker.com)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#-for-students)

</div>

---

## 📖 About

This course introduces modern web application development with a strong emphasis on DevOps principles and practices. Students learn both front-end and back-end development, version control, containerization, and continuous integration / delivery.

It is intended for undergraduate students taking **CSE 3100** at Ahsanullah University of Science and Technology, and is openly published so that learners and educators anywhere can reuse the materials.

**By the end of this course, you will be able to:**

- Design visually appealing, responsive, and user-friendly websites.
- Develop dynamic, data-driven web applications using the **Laravel framework**.
- Implement RESTful APIs and manage application logic effectively.
- Collaborate using Git and GitHub, applying advanced branching and merging techniques.
- Set up containerized environments using Docker.
- Understand and implement CI/CD pipelines and their role in modern development.
- Automate development workflows using DevOps best practices.
- Deliver a full-stack web application deployed in a containerized environment.

---

## 🗂️ Contents

This repository is organized into multiple **branches** — each branch corresponds to a lecture, assignment, example, or template. Switch between them to access the relevant material:

```bash
git checkout <branch-name>
```

| Branch                     | Description                                          |
| -------------------------- | ---------------------------------------------------- |
| `main`                     | Course overview, structure, and these guidelines.    |
| `class-1`                  | Lecture material for class 1.                         |
| `assignment-1`             | Assignment 1 brief and starter files.                |
| `simple-api`               | Example RESTful API implementation.                  |
| `docker-example`           | Containerization example with Docker.                |
| `test-nodejs-ci`           | CI pipeline example for a Node.js project.           |
| `project-report-template`  | Template for the course project report.              |

> New branches are added throughout the semester as lectures and assignments are released.

### Topics Covered

- HTML, CSS, Bootstrap, JavaScript, PHP, and Version Control
- Laravel Basics: CSR vs SSR, Routing, View Engine
- Middleware, Authentication & Authorization, Request Lifecycle
- MySQL, ORM, Service Providers, DevOps & CI/CD Concepts
- Docker & Containerization, Cloud Deployment
- Application Monitoring & Security

---

## 🚀 Getting Started

Most material lives on dedicated branches. To explore a runnable example such as the Docker or API demos:

```bash
# Clone the repository
git clone https://github.com/parvez-ahammed/cse-3100.git
cd cse-3100

# List available branches
git branch -a

# Switch to an example branch (e.g. the Docker example)
git checkout docker-example
```

Each example branch includes its own instructions in that branch's README where applicable. Branches that ship containerized examples (e.g. `docker-example`) can typically be brought up with Docker:

```bash
docker compose up
```

Refer to the README on the specific branch for exact prerequisites and commands.

---

## 🍴 For Students

This repository is meant to be **forked and used**. To work with it for your own coursework:

1. Click **Fork** at the top-right of this page to create your own copy.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/cse-3100.git
   ```
3. Check out the branch for the relevant lecture or assignment:
   ```bash
   git checkout assignment-1
   ```
4. Do your work on a branch of your own, commit, and push to your fork.

Spotted a typo or have an improvement to the materials? Pull requests are welcome — open one against this repository.

### Marks Distribution

| Component                | Weight (%) |
| ------------------------ | ---------- |
| Attendance               | 20%        |
| Assignment               | 10%        |
| Project Proposal         | 5%         |
| Project Checkpoint 1     | 15%        |
| Project Checkpoint 2     | 15%        |
| Final Project Submission | 20%        |
| Lab Exam                 | 15%        |
| **Total**                | **100%**   |

---

## 📄 License

Course materials licensed under **CC-BY-4.0** © 2026 Parvez Ahammed.

You are free to share and adapt this material for any purpose, including commercially, provided you give appropriate credit. See the [LICENSE](./LICENSE) file for the full Creative Commons Attribution 4.0 International legal text.
