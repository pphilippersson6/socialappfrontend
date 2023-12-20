# Social Posts App

![Frontpage]()

## About 
**Social Posts App** is a web application designed for posting, liking, and following. Users can explore posts, check creators' profiles, and read bios. The platform encourages users to share diverse content such as news, gaming, food, feelings, thoughts, and more!

# Table of Contents
- [Project Purpose](#project-purpose)
  - [Target Audience](#target-audience)
- [UX](#ux)
  - [Project Scope](#project-scope)
  - [User Stories](#user-stories)
- [Design](#design)
  - [Website Structure](#website-structure)
  - [Relational Database](#relational-database)
  - [Design](#design-1)
  - [Color Design](#color-design)
- [Features](#features)
  - [Existing Features](#existing-features)
  - [Features to Implement in the Future](#features-to-implement-in-the-future)
  - [CRUD Operations](#crud-operations)
- [Data Validation](#data-validation)
- [Technologies and Libraries Used](#technologies-and-libraries-used)
  - [Languages](#languages)
  - [Database Platform and Cloud Storage](#database-platform-and-cloud-storage)
- [Testing](#testing)
  - [Introduction](#introduction)
  - [Testing Accessibility and Performance](#testing-accessibility-and-performance)
  - [Validator Testing](#validator-testing)
  - [Lighthouse](#lighthouse)
  - [Code Validation](#code-validation)
- [Bugs during Development](#bugs-during-development)
  - [Fixed Bugs and Solutions](#fixed-bugs-and-solutions)
  - [Ongoing Bugs](#ongoing-bugs)
- [Development and Deployment](#development-and-deployment)
  - [Local Deployment](#local-deployment)
  - [Deployment to Heroku](#deployment-to-heroku)
  - [Libraries and Other Credits](#libraries-and-other-credits)
    - [Images](#images)
    - [Content](#content)

# Description

The Social app allows users to share, like, and comment on posts. It also facilitates user following.

## User Stories

- As a new user, I want to create an account using my email, username, and password for access to the website.
- As a registered user, I want to log in using my credentials.
- As a logged-in user, I want to see all posts shared by others.
- As a logged-in user, I want to create a post.
- As a logged-in user, I should be able to like and comment on posts.
- As a logged-in user, I should be able to follow other users.

## Pages

This website includes:

- Sign-up page
- Login page
- Home page
- Profiles page
- Post page

# Installation
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

# Usage

To interact with the application:

1. **Login page:**
    - Enter valid credentials (username and password).
    - Users will receive feedback based on the correctness of the entered credentials.
    - Incorrect credentials will prompt an error message.

2. **Post page:**
    - Represents a basic social media platform.
    - Features post creation, liking, and sorting based on different criteria.

## Features

- **User Authentication:** Login functionality for user identification.
- **Post Creation:** Users can create posts with titles and content.
- **Interactive Post Footer:** Includes a "like" button and displays the number of likes for each post.
- **Search and Sort:** Users can search for posts and sort them based on date.

## Web Vitals

The `reportWebVitals` function measures web performance metrics:

- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- First Contentful Paint (FCP)
- Time to First Byte (TTFB)

# React Application API Utility Functions

This section describes API utility functions for handling HTTP requests to the backend API.

## API Utility Functions

### `sendGetRequest`
Sends a GET request to the specified API endpoint.

### `sendPostRequest`
Sends a POST request to the specified API endpoint with provided data.

### `sendPutRequest`
Sends a PUT request to the specified API endpoint with provided data.

# Note

**Token Handling:** These functions manage token-based authentication by checking and including the token from local storage in requests, except for specific endpoints like login where the token is not required.

# Deployment to Heroku

1. Create Heroku app: `heroku create socialappfrontend`
2. Set Buildpack: Specify the buildpack for your React app: `heroku create --buildpack https://github.com/mars/socialappfrontend.git`
3. Add environment variables: Set them in your Heroku app's settings through the Heroku Dashboard or using the CLI: `heroku config:set KEY=VALUE -a socialappfrontend`
4. Push to Heroku: Deploy your app to Heroku: `git push heroku master`
