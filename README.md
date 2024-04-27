# QuoteWise

QuoteWise is a web application where users can generate quotes using the Gemeni API, showcasing their creativity in crafting prompts for the AI. The app features a homepage, a quotes page displaying AI-generated quotes with user prompts, a generate quote page, a view quote page, user authentication, profile management, likes, comments, and a favorites system.

## Features

- **Homepage:** Introduction to QuoteWise and its functionalities. Navigation to different sections of the application.
- **Quotes Page:** Display AI-generated quotes with user prompts. Show number of likes and comments for each quote. Allow users to like and comment on quotes.
- **Generate Quote Page:** Input field for users to provide prompts for quote generation. Generate quotes of length 25 to 30 words using the Gemeni API.
- **View Quote Page:** Display individual quotes along with their details (likes, comments). Allow users to like and comment on individual quotes.
- **User Authentication and Profile Management:** Sign-up and login functionality for users. Secure authentication and session management. User profile page displaying name, email, and profile details. Ability to edit profile details and change password.
- **Favorites System:** Allow users to mark quotes as favorites for quick access. Display favorite quotes on the user's profile page.

## Technology Stack

- **Frontend:** Angular for interactive UI components.
- **Backend:** Node.js with Express.js for server-side logic.
- **Database:** MongoDB for storing user profiles, quotes, likes, and comments.
- **API Integration:** Utilize Gemeni API for generating quotes based on user prompts.

## Usage

1. Clone the repository.
2. Navigate to the project directory.
3. Install client dependencies in client folder: `npm install`.
4. Start the client : `npm run dev`.
5. Install server dependencies in server folder: `npm install`.
6. Start the server folder: `npm start`.
7. Access the application at `http://localhost:4200`.

## Contributors

- Qamar Ul Islam

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Qamar2315/QuoteWise/blob/main/LICENSE) file for details.
