#Description

Social app allows user to share, like comment on posts. It also allows users to follow each other.s
User

    As a new user, I want to create an account using my email and a username I choose for myself and also a password so that I can have access to the website.
    As a registered user, I want to use the credentials I created during registration to login into the website.
    As a logged-in user, I want to be able to see all posts shared by people on the platform.
    As a logged-in user, I want to create a post.
    As a logged-in user, I should be able to like a post and comment on it.
    As a logged-in user, I should be able to follow other users.

Pages

This website has the following pages

    a sign up page
    a login page
    a home page
    Profiles page
    A post page

#Installation
Step 1: Clone the repository

Step 2: Navigate to the project directory
Step 3: Install dependencies
npm install
Step 4: Start the development server
npm start

#usage
Below are the steps to interact with the application:
Login page
Upon accessing the application, users will be directed to the login page.

    Enter valid credentials (username and password) to log in.
    Users will receive feedback based on the correctness of the entered credentials.
    Incorrect credentials will prompt an error message, while successful login attempts will grant access to a "Dashboard" or another restricted area.

post page
This React application represents a basic social media platform, featuring functionalities such as posting content, liking posts, and sorting posts based on different criteria. It utilizes React components to manage the rendering of posts and user interactions.

Features

    User Authentication: Login functionality to identify users and their posts.
    Post Creation: Users can create posts by providing titles and content.
    Interactive Post Footer: Post footer includes a "like" button and displays the number of likes for each post.
    Search and Sort: Users can search for posts and sort them based on date.
## Web Vitals
The `reportWebVitals` function measures the following web performance metrics:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- First Contentful Paint (FCP)
- Time to First Byte (TTFB)

# React application API utility function

This section describes the API utility functions used within the React application to handle HTTP requests to the backend API.

API Utility Functions
sendGetRequest
Description: This function sends a GET request to the specified API endpoint.

sendPostRequest
Description: Sends a POST request to the specified API endpoint with provided data.

sendPutRequest
Description: Sends a PUT request to the specified API endpoint with provided data.

# Note
Token Handling: These functions handle token-based authentication by checking and including the token from local storage in requests, except for specific endpoints like login where the token is not required.