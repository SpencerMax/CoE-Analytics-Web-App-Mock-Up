# LU-Engineering-Web-Analytics

## Description

Computer Science Capstone Project

## Features

To run the code do `npm run start`.
In the `public` folder there are different components we are focusing on.
`NavigationBar` - this is one of the most important components in the project
This is where the navigation bar is stored and will be updated every time you add a new component.
The `script.js` file links the files together so that we can navigate between components.
In each of the other folders: `About`, `GradRecruiting`, `NewsCenter`, and `SocialNetworks`will each contain 
a file and a corresponding CSS file. 
If you ever want to add components to a specific category, create a new file in the corresponding folder
and go from there. 
`Pictures` folder contains all the pictures used throughout the project. So if you want to use a picture,
save it in the folder and then call it in your code.
`index.html` file is the main menu of the website, and what you see when you go onto `localhost:3000`.
`index.css` is the corresponsing style sheets for that file.
Other than that, we include all the different packages we used throughout the project.
Before you npm run start, you have to do `npm i` to get the new packages that were added since the last commit.

`.env` file holds the environment variables for the `CLIENT_ID` and `CLIENT_SECRET`.
You will need to create this file before running code.


# Code Base

## /public

- Frontend HTML, CSS, and Javascript
- Currently Google Analytics API calls are done in Javascript embedded in HTML pages.
- Navigation Bar is a component inorder to ensure consistancy.

## /routes

- Backend: Javascript (Node.js)
- Frontend: HTML, CSS, JS

## Resources

- [Google Reporting API Overview](https://developers.google.com/analytics/devguides/reporting/core/v4)

- [Google API Client Library](https://github.com/google/google-api-javascript-client)

- [Google Analytics Embedded Reports API](https://developers.google.com/analytics/devguides/reporting/embed/v1/getting-started)

- [Express Routing Guide](https://expressjs.com/en/guide/routing.html)

- [Tutorial using Express and Google Reporting](https://www.crowdbotics.com/blog/how-to-visualize-google-analytics-data-in-a-nodejs-app)

- [Interact with the Google Analytics API using Node.js](https://flaviocopes.com/google-analytics-api-nodejs/#create-the-jwt)

- [UA Dimensions & Metrics Explorer](https://ga-dev-tools.web.app/dimensions-metrics-explorer/)

- [Google Button created](https://developers.google.com/identity/sign-in/web/build-button)

- [Google creating views website](https://developers.google.com/analytics/devguides/config/mgmt/v3/mgmtReference/management/profiles insert#javascript)
- https://www.youtube.com/watch?v=YesSVqjcDts
- https://www.youtube.com/watch?v=ES8vJcUqE7s
