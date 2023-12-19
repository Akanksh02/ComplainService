Complain Service Endpoints README
This README provides an overview of the API endpoints for the Complaint Service. These endpoints are responsible for handling various functionalities such as user authentication, complaint submission, and data retrieval. Below are the available endpoints and their corresponding functionalities.

Endpoints

1. User Authentication
   1.1 Login
   Endpoint: POST /api/login
   Functionality: Authenticates a user and returns authentication details.
   1.2 Register
   Endpoint: POST /api/register
   Functionality: Registers a new user with the provided details.
2. Complaint Management
   2.1 Insert Complaints
   Endpoint: POST /api/insertComplains
   Functionality: Inserts a new complaint into the system.
   2.2 Get Complaints
   Endpoint: POST /api/getComplains
   Functionality: Retrieves a list of all complaints.
   2.3 Get Recent Complaints
   Endpoint: POST /api/getComplains/recent
   Functionality: Retrieves a list of complaints submitted today.
3. Contact Us Form
   3.1 Contact Us
   Endpoint: POST /api/contactus
   Functionality: Handles submissions from the contact us form.
4. User Profile Update
   4.1 Update User Profile
   Endpoint: PATCH /api/update
   Functionality: Updates user profile information.
   Usage
   Ensure the Complaint Service server is running.
   Make HTTP requests to the specified endpoints using an HTTP client or tools like curl or Postman.
   Example Usage
5. User Login
   http
   Copy code
   POST /api/login
   Content-Type: application/json

{
"username": "example_user",
"password": "secretpassword"
} 2. Insert Complaint
http
Copy code
POST /api/insertComplains
Content-Type: application/json

{
"userId": "123",
"complaint": "Issue with product delivery",
"category": "Logistics"
} 3. Get Recent Complaints
http
Copy code
POST /api/getComplains/recent
Content-Type: application/json

{
"userId": "123"
}
