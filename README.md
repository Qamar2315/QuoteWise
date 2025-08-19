
# QuoteWise 🖋️

**Unleash your creativity with AI-powered quote generation. QuoteWise is a full-stack web application built with Angular and Node.js that empowers users to craft unique quotes using Google's Gemini API.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


QuoteWise is a dynamic platform where users can not only generate insightful and creative quotes based on their own prompts but also share them with a community. It features a complete user authentication system, profile management, and social interaction features like likes, comments, and favorites.

---

## ✨ Key Features

-   **🤖 AI-Powered Quote Generation**: Leverage the power of Google's Gemini API to generate unique quotes (max 25 words) from user-defined prompts.
-   **🔐 Secure User Authentication**: A complete authentication system with user registration and login, secured using JSON Web Tokens (JWT).
-   **👤 Comprehensive Profile Management**:
    -   View user profiles with their created quotes, liked quotes, and favorites.
    -   Ability for users to edit their own profile information (username, email).
    -   Secure password change functionality.
-   **🌐 Interactive Quote Feed**: A homepage that displays a feed of all AI-generated quotes from the community.
-   **❤️ Social Engagement**:
    -   **Like**: Like or unlike quotes to show appreciation.
    -   **Comment**: Engage in discussions by adding comments to quotes.
    -   **Favorite**: Bookmark quotes to save them to your profile for easy access.
-   **🔒 Route Protection & Authorization**: Secure application routes and actions using Angular Route Guards and server-side middleware, ensuring users can only modify their own content and profiles.
-   **🚀 Server-Side Rendering (SSR)**: Built with Angular SSR for improved performance and SEO.
-   **📄 Single Page Application (SPA)**: A smooth and responsive user experience powered by Angular.

---

## 🛠️ Technology Stack

The project is a monorepo containing two main parts: a `client` (Angular) and a `server` (Node.js).

| Category          | Technologies                                                                                             |
| ----------------- | -------------------------------------------------------------------------------------------------------- |
| **Frontend**      | `Angular`, `TypeScript`, `Angular SSR`, `RxJS`, `FontAwesome`                                              |
| **Backend**       | `Node.js`, `Express.js`, `TypeScript`                                                                    |
| **Database**      | `MongoDB` with `Mongoose` ODM                                                                            |
| **Authentication**| `JSON Web Tokens (JWT)`, `bcrypt.js`                                                                     |
| **API**           | `Google Generative AI (Gemini API)`                                                                      |
| **Validation**    | `Joi` (for server-side schema validation)                                                                |
| **Dev Tools**     | `Express.js`, `Cors`, `dotenv`                                                                           |

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18.x or later recommended)
-   [npm](https://www.npmjs.com/) (usually comes with Node.js)
-   [MongoDB](https://www.mongodb.com/try/download/community) instance (local or cloud-based like MongoDB Atlas)
-   A **Google Gemini API Key**. You can get one from [Google AI Studio](https://makersuite.google.com/).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Qamar2315/QuoteWise.git
    cd QuoteWise
    ```

2.  **Set up the Backend Server:**
    ```bash
    # Navigate to the server directory
    cd server

    # Install dependencies
    npm install

    # Create a .env file in the /server directory
    touch .env
    ```
    Add the following environment variables to your `.env` file:
    ```env
    # The port your server will run on
    PORT=8080

    # Your MongoDB connection string
    MONGODB_URI=mongodb://127.0.0.1:27017/quotewise_database

    # Your Google Gemini API Key
    GEN_API="YOUR_GEMINI_API_KEY"
    ```

3.  **Set up the Frontend Client:**
    ```bash
    # Navigate to the client directory from the root
    cd client

    # Install dependencies
    npm install
    ```
    The client is configured to connect to the backend running on `http://localhost:8080`. If your server is running elsewhere, modify the `apiUrl` in `client/environment.dev.ts`.

### Running the Application

You need to run both the server and the client in separate terminal windows.

1.  **Start the Backend Server:**
    ```bash
    # In the /server directory
    npm start
    ```
    The server should now be running on `http://localhost:8080`.

2.  **Start the Frontend Client:**
    ```bash
    # In the /client directory
    npm run dev
    ```
    The Angular application will be accessible at `http://localhost:4000`.

---

## 🔐 API Endpoints

The server exposes a RESTful API for managing users, quotes, and comments.

| Endpoint                               | Method | Description                               | Auth Required |
| -------------------------------------- | ------ | ----------------------------------------- | :-----------: |
| `/api/users/signup`                    | `POST` | Register a new user.                      |       ❌       |
| `/api/users/login`                     | `POST` | Log in a user and get a JWT.              |       ❌       |
| `/api/users/:userId`                   | `GET`  | Get a user's profile details.             |       ✅       |
| `/api/users/:userId`                   | `PUT`  | Update a user's profile.                  |       ✅       |
| `/api/users/:userId/update-password`   | `PUT`  | Change a user's password.                 |       ✅       |
| `/api/quotes`                          | `GET`  | Get all quotes.                           |       ❌       |
| `/api/quotes`                          | `POST` | Upload a new quote.                       |       ✅       |
| `/api/quotes/generate`                 | `POST` | Generate a quote from a prompt.           |       ✅       |
| `/api/quotes/:id`                      | `GET`  | Get a single quote by its ID.             |       ❌       |
| `/api/quotes/:id`                      | `DELETE`| Delete a quote.                          |       ✅       |
| `/api/quotes/:id/like`                 | `POST` | Like or unlike a quote.                   |       ✅       |
| `/api/quotes/:id/favorite`             | `POST` | Favorite or unfavorite a quote.           |       ✅       |
| `/api/comments/:qId`                   | `GET`  | Get all comments for a specific quote.    |       ✅       |
| `/api/comments/:qId`                   | `POST` | Add a comment to a quote.                 |       ✅       |
| `/api/comments/:id`                    | `DELETE`| Delete a comment.                        |       ✅       |

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/Qamar2315/QuoteWise/blob/main/LICENSE) file for more details.

---

## 👨‍💻 Author

-   **Qamar Ul Islam** - [GitHub Profile](https://github.com/Qamar2315)