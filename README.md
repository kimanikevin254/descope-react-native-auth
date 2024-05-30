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

Here are the screenshots of all these screens in the order they are listed above:

<table>
  <tr>
    <td><img src="https://i.imgur.com/SjUCKrq.png" alt="Welcome Screen" height="500"></td>
    <td><img src="https://i.imgur.com/lJ7zYNk.png" alt="Authentication Screen" height="500"></td>
    <td><img src="https://i.imgur.com/bWjNm1I.png" alt="Passkey Screen" height="500"></td>
    <td><img src="https://i.imgur.com/yajSWIN.png" alt="OTP Screen" height="500"></td>
  </tr>
  <tr>
    <td><img src="https://i.imgur.com/tX4DWQx.png" alt="Additional Info Screen" height="500"></td>
    <td><img src="https://i.imgur.com/zNjw3B8.png" alt="Home Screen" height="500"></td>
    <td><img src="https://i.imgur.com/k8yoxTb.png" alt="Details Screen" height="500"></td>
  </tr>
</table>

## Getting Started

### Prerequisites

To run this project locally, you will need to have the following:

- A **React Native development environment** [set up](https://reactnative.dev/docs/environment-setup?guide=native).
- **[Node.js v18](https://nodejs.org/en/download)** and **[Yarn](https://classic.yarnpkg.com/en/docs/install)** installed on your local machine.
- An **[emulator](https://developer.android.com/studio/run/emulator)** with Google Play Store support (indicated by the Google Play icon when creating a new emulator device). This guide uses Pixel 4:

    ![Selecting hardware](https://i.imgur.com/UUoNZ30.png)
    > **Note:** Make sure that you set up a screen lock for your emulator. For this guide, the emulator has a PIN set up.

- A free **[GitHub account](https://github.com/)**.
- The [**Git CLI** installed](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on your local machine.
- A free [**Descope** account](https://www.descope.com/sign-up) and a basic understanding of [how to customize Descope flows](https://docs.descope.com/customize/flows/).
- A [**Gmail** account](https://mail.google.com). Make sure you are signed into the Gmail account on the emulator.

### Running the Project Locally

Having met all the prerequisites, you follow the steps below to run the project locally.

1. Clone the repo:
   
   ```bash
   git clone https://github.com/kimanikevin254/descope-react-native-auth.git --single-branch -b main
   ```

2. Install the dependencies:

    ```bash
    cd descope-react-native-auth
    
    # Server dependencies
    cd server
    yarn

    # React Native dependencies
    cd DescopeReactNativeAuth
    yarn
    ```
4. Run the servers:

   ```bash
   # Express server
   yarn dev

   # React Native server
   yarn start
   ```
