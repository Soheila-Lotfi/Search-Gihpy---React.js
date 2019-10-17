# Search Giphy

In this app the users can query the Giphy API and display giphys searched for.

## Instructions

* This application allow users to search for giphys via the form on the left of the page, and display them 

* a `componentDidMount` method  utilizes the `API.js` module to query the Giphy API for the giphyse "smile" when the component mounts. Then update this component's `result` state with the result of the AJAX request.

  *  a `handleInputChange` method is called whenever the user types into the input field. Inside of this method, set `this.state.search` equal to the new value of the input field. 

  * a `handleFormSubmit` method is called when the form is submitted. Inside of this method, utilize the `API` module to search the Giphy API for the value of `this.state.search`. Then update this component's `result` state with the result. 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



![image](https://user-images.githubusercontent.com/49765334/67035550-e022cf00-f0e7-11e9-8698-2272e566ccdc.png)

