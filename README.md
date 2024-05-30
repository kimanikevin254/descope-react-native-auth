# Adding Authentication to a React Native App

## Project Description

This project is the completed fullstack application for [Descope: Adding Authentication to a React Native Project](). The backend is created using [Express](https://expressjs.com/https://expressjs.com/) to handle requests and 
[Prisma](https://www.prisma.io/) as the ORM. It uses a [SQLite](https://www.sqlite.org/index.html) database. To communicate with the Descope API, the backend uses the [Descope SDK for Node.js](https://github.com/descope/node-sdk).

The frontend application is created using [React Native](https://reactnative.dev/) and has the following screens:

1. **Welcome Screen**: This is presented when the application is launched. It has a **LOG IN** button that navigates the user to the hosted Descope authentication page.
2. **Authentication Screen**: Prompts the user for their email address and allows them to choose between using passkeys or OTP to log in.
3. **Passkey Screen**: Allows the user to input the passkey.
4. **OTP Screen**: Allows the user to input the OTP sent to their email address.
5. **Additional Info Screen**: Prompts the user to input their full name on initial signup.
6. **Home Screen**: Displays the available posts to the authenticated users.
7. **Details Screen**: Displays the posts details and editor actions.
