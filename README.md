# Third-Party-Order-Status-Tracker
The Third-Party Order Status Tracker is a web application designed to allow third-party users to create and track orders. Users can create an account and log in using JSON Web Tokens (JWT). Upon creating an order, a unique order ID is generated. Users can use this order ID to check the status of their orders. A separate login is provided for "Order Movers," who can update the status of orders to reflect their current state (e.g., Started, In Progress, Completed). These updates are reflected in real-time for the users tracking their orders.

# Architecture Diagram

Frontend (React.js)
  |
  |-- User Login/Register (JWT)
  |
  |-- Create Order / Track Order
  |
Backend (Node.js + Express)
  |
  |-- Authentication Service
  |   |-- User Registration
  |   |-- User Login
  |
  |-- Order Management Service
  |   |-- Create Order (Generate Order ID)
  |   |-- Track Order by Order ID
  |
  |-- Order Status Service
  |   |-- Update Order Status
  |
  |-- Caching Layer (Redis)
  |
Database (PostgreSQL)
  |-- Users Table
  |-- Orders Table
  |-- Order Status Table
