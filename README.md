# React-Flask Minimalist Application

Welcome to the React-Flask Minimalist Application! This project is a starter template designed to help you get up and running with a modern web application using React for the frontend and Flask for the backend. The application also utilizes Tailwind CSS for styling and PostCSS for processing CSS.

## Purpose of the Application

The primary purpose of this application is to provide a simple yet powerful starter template for developers who want to build a web application using React and Flask. By combining these technologies, you can leverage the strengths of both frontend and backend frameworks to create a responsive, dynamic, and robust web application.

This template is designed with minimalism in mind, providing only the essential setup required to get started. It includes a basic structure, essential dependencies, and configurations that can be easily extended to suit more complex requirements.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces. React allows you to create reusable components and manage the state of your application efficiently.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs. Tailwind provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins. PostCSS is used to process Tailwind CSS and other CSS transformations.

### Backend

- **Flask**: A lightweight WSGI web application framework in Python. Flask is designed to make getting started quick and easy, with the ability to scale up to complex applications.

## How to Run

### Prerequisites

- Node.js and npm (Node Package Manager) installed
- Python installed

### Clone the Repository

First, clone the repository to your local machine:

```
git clone https://github.com/ege-ayan/react-flask-starter.git
cd react-flask-starter
```

### Install Frontend Dependencies

Navigate to the frontend directory and install the necessary dependencies:

```
cd frontend
npm install
```

### Install Backend Dependencies

Navigate to the backend directory and install the necessary dependencies using pip:

```
cd backend
pip install -r requirements.txt
```

## Running the Application

Running the Backend Server
Start the Flask backend server. By default, Flask runs on port 5000:

```
cd backend
python server.py
```

If you wish to run the Flask server on a different port, you can specify the port like this:

```
python server.py --port 5001
```

## Running the Frontend Server

Start the React frontend server. By default, React runs on port 3000:

```
cd frontend
npm start
```

## Configuring Proxy for Different Ports

If you choose to run the Flask server on a port other than 5000, you will need to update the proxy setting in the package.json file located in the frontend directory. This ensures that the React frontend correctly proxies API requests to the Flask backend.

Open frontend/package.json and modify the proxy field:

```
{
  "proxy": "http://localhost:5001"
}
```
