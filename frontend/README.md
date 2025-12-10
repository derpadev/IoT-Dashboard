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

