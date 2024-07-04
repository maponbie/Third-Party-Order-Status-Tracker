# Third-Party-Order-Status-Tracker
The Third-Party Order Status Tracker is a web application designed to allow third-party users to create and track orders. Users can create an account and log in using JSON Web Tokens (JWT). Upon creating an order, a unique 10-digit alphanumeric order ID is generated. Users can use this order ID to check the status of their orders. A separate login is provided for "Order Movers," who can update the status of orders to reflect their current state (e.g., Started, In Progress, Completed). These updates are reflected in real-time for the users tracking their orders.

# Architecture Diagram
                                      +---------------+
                                      |               |
                         +------------>   PostgreSQL  |
                         |            |   Database    |
                         |            |               |
                         |            +---------------+
                         |
                         |
    +---------+          |            +---------------+
    |         |<--------------------->|               |
    |  Redis  |          |            |    Node.js    |
    |  Cache  |<--------------------->|    Backend    |
    |         |          |            |   (Express)   |
    +---------+          |            +---------------+
                         |
                         |
   +----------------+    |
   |                |    |
   |   React.js     |    |
   |   Frontend     |<--------------------+
   |                |    |                |
   +----------------+    |                |
                         |                |
             +-----------+--+  +----------+--+
             |              |  |             |
    +-------->  Third-Party |  | Order Movers|
    |        |    Users     |  |             |
    |        |              |  |             |
    |        +--------------+  +-------------+
    |
    |
+---+---+
|       |
|  JWT  |
|       |
+-------+


