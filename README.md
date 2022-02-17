
# Kyle's React Spotify App Express Server

## Server Description

This is the backend server needed to run the music app from my GitHub repository at the address https://github.com/kyledavis109/React-Music-Project. Documentation is available there for getting setup and running the front end of the app. You must have this server up and running before you can launch the front end of the app.

### Getting Started

To get started you will need to install Node.js on your computer (https://nodejs.org/en/download/).
You will also need a code editor such as Visual Studio Code to view the files (https://code.visualstudio.com/download). Next you will need to install Git to pull the code from my repository (https://git-scm.com/downloads). You will also need to have a GitHub account and repository initialized aswell as a SSH Key, which can be found in the settings of your GitHub account under the SSH and GPG Keys section in the left hand side bar. Once you have installed everything and are setup, you are ready to clone the repository. To clone the repository, run the command in your Git Bash terminal `git clone https://github.com/kyledavis109/React-Express.git` to clone the repository into a folder on your computer. This is only the back end of the application and you will need to also clone the front end of this app from my repository at the address https://github.com/kyledavis109/React-Music-Project. Clone the front end repository into a seperate folder from the back end repository. A README will also be included in that repository to get you started.

You will need a few npm packages installed to run this app. Open your command terminal and cd into the folder that you cloned the repository into. Run `npm i dotenv` to install dotenv (https://www.npmjs.com/package/dotenv). This is required to create a .env file to store enviornmental variables for the server. These variables will be sensitive information so it's best to not share them with anyone. Create a .env file in the root directory of this file and store the environmental variables as follows:
1. PORT=
2. CLIENT_ID=
3. CLIENT_SECRET=

Use whatever port you want to use to run this application (ex. 3000). You will now need to setup a Spotify Developer account to obtain a Client ID and a Client Secret. A guide and documentation is available at https://developer.spotify.com/documentation/web-api/quick-start/ to show you the necessary steps to setup a Spotify Developer account to communicate with the Spotify API. Provide the port as your redirect URI (ex. http://localhost:3000/callback). Once you have created an app in the Spotify Developer Dashboard you can obtain your Client ID and Client Secret from the app. Store your Client ID and Client Secret in the specified .env variables (this information is sensitive do not share it with anyone.) Now you need to run the command npm i express to install express (https://www.npmjs.com/package/express). Next, run the command npm i cors to install cors (https://www.npmjs.com/package/cors). Now run the command npm i path to install path (https://www.npmjs.com/package/path). Next, run the command npm i node-fetch to install node-fetch (https://www.npmjs.com/package/node-fetch). Finally, run the command npm i nodemon to install nodemon (https://www.npmjs.com/package/nodemon). These are all the npm packages you will need to run this server. To start the server, run the command `nodemon reactExpressRoutes` to spin up the server. You are now ready to run the front end of the application!

### Support

If you need any help along the way getting this app started, please contact me by email at kyledavis109@gmail.com.