# IoT Device Monitor Dashboard

## Overview

The **IoT Device Monitor Dashboard** is an interactive web application that visualizes real-time IoT device data. It supports authentication, live updates, chart-based visualizations, and reporting capabilities. Users can monitor multiple devices, such as thermostats, air quality monitors, and room occupancy sensors, through a clean and responsive interface.

---

## Features

- **Authentication**
  - JWT-based login system
  - Role-based access (admin/user)
  
- **IoT Device Data**
  - Mock IoT device data stream using polling (or WebSockets)
  - Live updates for multiple devices (Thermostat, Air Quality Monitor, Room Occupancy)
  
- **Visualization**
  - Interactive charts using **Recharts**
  - Separate charts for each device
  - Supports dynamic updates as new data arrives

- **Reporting**
  - Export reports as PDF or CSV
  - View data from the last 24 hours

- **Responsive Design**
  - Dashboard layout adapts to different screen sizes
  - Tailwind CSS for clean, modern styling

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Recharts  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Authentication:** JWT  
- **Optional:** WebSockets for real-time streaming  

---

## Project Structure

iot-dashboard/
├── backend/ 
├── frontend/ 
├── README.md
├── .gitignore

# Backend

backend/
│ ├── models/ # MongoDB models
│ │ ├── User.js
│ │
│ ├── routes/ # API route definitions
│ │ ├── auth.js
│ │ └── device.js
│ │ └── user.js
│
├── server.js # Server entry point
├── .env
├── package.json

# Frontend

frontend/
├── public/
│ └── index.html
│
├── src/
│ │
│ ├── components/ # Reusable UI components
│ │ ├── Navbar.jsx
│ │ ├── AirChart.jsx
│ │ └── Occupancy.jsx
│ │ └── TempChart.jsx
│ │
│ │
│ ├── hooks/ # Custom React hooks
│ │ └── useDevices.js
│ │
│ ├── pages/ # Page-level components
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ ├── Dashboard.jsx
│ │ └── Home.jsx
│ │
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
│
├── package.json
├── tailwind.config.js
└── vite.config.js


