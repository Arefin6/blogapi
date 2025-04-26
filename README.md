# 📝 Blog Post API

A simple RESTful API for creating and retrieving blog posts built with Node.js, Express.js, and Joi for input validation.

## 🚀 Features

- Create blog posts with title, content, and author
- Retrieve blog posts by ID
- Input validation with custom error messages
- In-memory storage (no database required)
- Modular folder structure (routes, controllers, models, utils)

## 📦 Installation

git clone https://github.com/Arefin6/blog-api
cd blog-api
npm install

## ▶️ Run the Server

node app.js

Server will run on:
http://localhost:3000

## 📬 API Endpoints

### 1. POST /posts – Create a Blog Post

Request Body:
{
  "title": "My First Post",
  "content": "This is the blog content. It must be at least 10 characters.",
  "author": "Tamzid"
}

Response (201):
{
  "message": "Blog post created successfully",
  "post": {
    "id": 1,
    "title": "My First Post",
    "content": "...",
    "author": "Tamzid",
    "createdAt": "2025-04-18T15:00:00Z"
  }
}

### 2. GET /posts/:id – Get Post by ID

Response (200):
{
  "id": 1,
  "title": "My First Post",
  "content": "...",
  "author": "Tamzid",
  "createdAt": "2025-04-18T15:00:00Z"
}

Response (404):
{
  "error": "Blog post with ID 5 not found"
}

## 🛠 Dependencies

- express
- joi

Install with:
npm install express joi

## ✅ To Do / Future Improvements

- Connect to a real database (MongoDB, PostgreSQL)
- Add PUT / DELETE endpoints
- Add authentication (JWT)

## 👨‍💻 Author

Arefin Chowdhury
