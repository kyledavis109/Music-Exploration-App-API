# Kyle's React Spotify App API

## About

This is the API needed to run the frontend music app from my GitHub repository at the address located [here](https://github.com/kyledavis109/Kyles-React-Spotify-App). Documentation is available there for getting setup and running the frontend of the app. You must have this API up and running before you can launch the frontend of the app.
s
### Installation

1. To get started you will need to install Node.js on your computer (https://nodejs.org/en/download/).

2. Next you will need to install Git to pull the code from my repository (https://git-scm.com/downloads).

3. You will also need to have a GitHub account as well as a SSH Key [SSH Key Tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

4. Once you have installed everything and are setup, you are ready to clone the repository. To clone the repository, open up a terminal and run `git clone https://github.com/kyledavis109/Spotify-App-Express` to clone the repository into a folder on your computer.

5. You will need a few npm packages installed to run this app. To install the packages, in the terminal navigate to the root folder of the repository and then run `npm i`.

6. A `.env` file to store environmental variables for the API is required. These variables will be sensitive information so it's best to not share them with anyone. Create a `.env` file in the root directory of this file and store the environmental variables as follows:

 ```
PORT=
CLIENT_ID=
CLIENT_SECRET=
```

6. Pick a PORT number and assign it to `PORT=` as an environmental variable.

7. You will now need to setup a Spotify Developer account to obtain a `CLIENT_ID` and a `CLIENT_SECRET` to communicate with the Spotify API. A guide and documentation is available at [Spotify Developer Docs](https://developer.spotify.com/documentation/web-api/quick-start/).

8. Using the PORT number that you have selected, add your redirect URI (ex. `http://localhost:PORT/callback`). Once you have created an app in the Spotify Developer Dashboard you can obtain your Client ID and Client Secret from the app. Store your Client ID and Client Secret in the specified `.env` variables (***This information is sensitive! Do not share it with anyone!***).

9. Now you need to install the needed npm packages. To do so, first navigate to the root folder of this repository and then run `npm i`.

***Congratulations! You've completed installation!***

#### To Start API
 To run the API, run the command `nodemon reactExpressRoutes` to start the API. You are now ready to run the frontend of the application!

### Support

If you need any help along the way getting this app started, please contact me by email at kyledavis109@gmail.com.