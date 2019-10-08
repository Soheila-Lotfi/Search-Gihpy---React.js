# Search Giphy

In this app the users can query the Giphy API and display giphys searched for.

## Instructions




```






* This application is supposed to allow users to search for giphys via the form on the left of the page, and display themfrom . Currently the application isn't fully functional.

* Open the `src/OmdbContainer.js` and add the following code:

  * Add a `componentDidMount` method which should utilize the `API.js` module to query the OMDB API for the movie "The Matrix" when the component mounts. Then update this component's `result` state with the result of the AJAX request. You can verify you completed this step correctly by refreshing the page in your web browser. If successful, the application should display information about the movie "The Matrix" when the page first loads.

  * Add a `handleInputChange` method which should be called whenever the user types into the input field. Inside of this method, set `this.state.search` equal to the new value of the input field. You can verify you've completed this step correctly if you can now type into the input field.

  * Add a `handleFormSubmit` method which should be called when the form is submitted. Inside of this method, utilize the `API` module to search the OMDB API for the value of `this.state.search`. Then update this component's `result` state with the result. You can verify you completed this step correctly by searching for the name of a movie. If successful, you should see the movie poster and some information about the movie appear in the left card.


![image](https://user-images.githubusercontent.com/49765334/66424571-e0321900-e9db-11e9-9501-d9309b8ede8b.png)



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

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
