# research-Harshil1823

This is a simple Node.js and Express application for managing comments, designed to demonstrate CRUD (Create, Read, Update, Delete) operations. The project uses MongoDB for data storage and Bootstrap for styling.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Screenshots](#screenshots)
- [Troubleshooting](#troubleshooting)
- [Additional Resources](#additional-resources)

---

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)
- **Git**

### Steps to Set Up

1. **Clone the repository**:

    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory**:

    ```bash
    cd research-Harshil1823
    ```

3. **Remove the existing `node_modules` folder**:

    ```bash
    rm -rf node_modules
    ```

4. **Install the dependencies**:

    ```bash
    sudo npm install
    ```

5. **Start the MongoDB server** (if using locally):

    mongod
    or
    mogosh

6. **Run the server**:

    You can use either of the following commands to start the server:

    node app.js
    or
    nodemon app.js


7. **Access the app**:

    Open your web browser and go to:
    http://localhost:3000/comments

8. **Shut down the server**:

    When you're done, stop the server by pressing:
    Ctrl + C

---

## Usage

Once the app is up and running, you can:

- **Create** a new comment
- **View** all comments
- **Edit** an existing comment
- **Delete** a comment

Navigate through the app to add, update, or delete comments from the database.

---

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Frontend**: EJS (Embedded JavaScript), Bootstrap for styling
- **Templating Engine**: EJS
- **Version Control**: Git
- **Tools**: Nodemon (for development)

---

## Features

- Full CRUD functionality for comments.
- Simple and intuitive UI using Bootstrap.
- MongoDB for persistent data storage.

---

## Troubleshooting

If you encounter any issues, try the following:

1. **Ensure MongoDB is running**:
    If you're using a local MongoDB instance, ensure it's running with:
    ```bash
    mongod
    ```

2. **Check Node.js Version**:
    Ensure you are using Node.js version 14 or higher. You can check by running:
    ```bash
    node -v
    ```

3. **Missing Dependencies**:
    Run `sudo npm install` again to ensure all dependencies are properly installed.

---

## Additional Resources

For a step-by-step guide, check out this [YouTube video tutorial](https://youtu.be/PlD-M6cvawU).

---
