# IoT Device Monitor Dashboard

## Motate Interview Project Demo

## Overview

The **IoT Device Monitor Dashboard** is an interactive web application that visualizes real-time IoT device data. It supports authentication, live updates, chart-based visualizations, and reporting capabilities. Users can monitor multiple devices, such as thermostats, air quality monitors, and room occupancy sensors, through a clean and responsive interface.

---

## Features

- **Authentication**
  - JWT-based login system
  
- **IoT Device Data**
  - Mock IoT device data stream using polling 
  - Live updates for multiple devices (Thermostat, Air Quality Monitor, Room Occupancy)
  
- **Visualization**
  - Interactive charts using **Recharts**
  - Separate charts for each device
  - Supports dynamic updates as new data arrives

- **Reporting**
  - Export reports as CSV

- **Responsive Design**
  - Tailwind CSS for clean, modern styling

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Recharts  
- **Backend:** Node.js, Express  
- **Database:** MongoDB  
- **Authentication:** JWT  

---

## Project Structure

```
iot-dashboard/
├── backend/
│   ├── models/            # MongoDB models
│   │   └── User.js
│   │
│   ├── routes/            # API route definitions
│   │   ├── auth.js
│   │   ├── device.js
│   │   └── user.js
│   │
│   ├── server.js          # Server entry point
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── AirChart.jsx
│   │   │   ├── Occupancy.jsx
│   │   │   └── TempChart.jsx
│   │   │
│   │   ├── hooks/         # Custom React hooks
│   │   │   └── useDevices.js
│   │   │
│   │   ├── pages/         # Page-level components
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Home.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
├── README.md
└── .gitignore
```



