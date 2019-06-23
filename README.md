# Adverity Tech Test

## Introduction

This project is a type ahead aggregates that fetches a CSV file. The file contains two metrics (clicks, impressions) for two dimensions (channel, campaign).
The web application is using a typeahead, that looks for entries in the channel and campaign
dimension and then produces sum-aggregates for clicks and impressions on the selected dimension.

## Installation 

### Requirements 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>
Papaparse : to fetch the data and directly convert them in a json format, this project is using papaparse. To install it: https://www.npmjs.com/package/papaparse<br>
React-select: the typeahead is made with the npm package called react-select. To know more about it and to install it:  https://www.npmjs.com/package/react-select

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

