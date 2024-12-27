# Hirrd Job Portal

A simple and efficient job portal built using the **MERN stack** to help users find job listings, apply for jobs, and manage their profiles. This project was developed to improve my skills in building interactive web applications and to learn how a job portal functions.

## Tech Stack

- **Frontend:** React.js, Redux Toolkit, Tailwind CSS, Shadcn/UI
- **Backend:** Express.js, MongoDB, RESTful APIs
- **Tools:** Postman for API testing

![Job_portal Interface](Frontend/public/images/Job_portal.png)



## Features

- **User-friendly, responsive UI**
- **Job listing search and filter** based on job title, location, and skills
- **Create and manage profiles** (add, update, delete personal details)
- **Job application system**: apply for jobs directly through the portal
- **Admin panel**: manage job listings, view applications, and control user accounts
- **Instant notifications** for job application updates
- **User authentication** and authorization (sign up, login, logout)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/karunakarusala/Hirrd-Job-Portal.git
cd Hirrd-Job-Portal
2. Install dependencies for both frontend and backend

Frontend:
cd Frontend
npm install

Backend:
cd Backend
npm install

3. Set up the environment variables
Create a .env file in both the Frontend and Backend directories.
Add the following variables to each respective .env file:
Frontend .env (in Frontend folder):

REACT_APP_API_URL=http://localhost:5000



Backend .env (in Backend folder):

MONGO_URI=your-mongodb-uri
PORT=5000
SECRET_KEY=your-secret-key


4. Run the application


Run the backend:
cd Backend
npm start

Run the frontend:
cd Frontend
npm start

The application should now be running on http://localhost:3000 for the frontend and http://localhost:5000 for the backend.

Testing the API
You can use Postman to test the API endpoints. Make sure the server is running and use the provided routes for testing purposes.

Additional Notes:

Environment Variables: Make sure to replace your-mongodb-uri and your-secret-key with your actual MongoDB connection URI and secret key.
Running both frontend and backend: You can either run them in separate terminals or use concurrently if you want to run both in a single terminal.

Project Overview

This job portal project helps users search for job listings, manage their profiles, and apply for jobs. It includes an admin panel for job management and user control. Through this project, I’ve learned how to build a real-world application with user authentication, RESTful APIs, and real-time updates, improving my skills in building full-stack web apps with the MERN stack.
