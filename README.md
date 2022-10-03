# customer-reward-asif

This application shows list of customers and corresponding points based on their recent purchases

# Tech stack
- Back-end: Node Js, Express
- Front-end: React Js, Material UI
- Unit testing: React testing library

# Getting started
- Check if machine has `Node Js` installed otherwise install `v16.15.0`
- Clone git repository `https://github.com/oni20/customer-reward-asif.git` on your machine.

# How to run the application
Please follow below steps to run both back-end and front-end side

## Back end
- Navigate to `root` folder of the project and run `npm install`
- Then run `npm run start`. Node JS server will start running on port number `3001`

## Front end
- Navigate to `client` folder from the project and run `npm install`
- Then run `npm run start`. UI will start running on port number `3000`. Localhost URL is `http://localhost:3000/`
- Run command `npm run test` to perform unit testing

## Feature flag
This config file will allow developer to show/hide feature behind the flag which will be displayed based on business requirement.
Find the feature flag inside `Utility` folder on client side with name `FeatureFlag.js`. The only flag I have mentioned there, is
to show latest 3 months period data. Although this functionality can be achieved via `DropDown or DatePicker` on screen.
