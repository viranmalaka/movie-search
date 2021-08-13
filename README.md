# Movie Search App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Key points
- The project was created by `create-react-app` cli tool
- Used TypeScript 
- Used SCSS for styling
- Used jest + enzyme for unit testing
- The docker is also configured `viranmalaka/movie-search`

## Setup
Create `.env` file as follows
```
REACT_APP_OMDB_API_KEY='<your OMDB api-key>'
```

## Docker Run
```
docker run -p 8080:80  viranmalaka/movie-search
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

