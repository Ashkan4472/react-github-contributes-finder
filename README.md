# Getting Started React Github Contributes Finder

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template. Also used [Material UI](https://mui.com/) and [react-router](https://reactrouter.com/en/main)

## How To Run Project

To have a functional application you must have create and [Github App](https://docs.github.com/en/developers/apps/getting-started-with-apps/about-apps) and create and `TOKEN` and use it to be able to see collaborators. `TOKEN` must be placed in a `.env` or `.env.local` file. An example available on `.env.example`.

## Known limitations

- It was mentions that a user should be able to search a repository with conditions like `*react*` but after researching and reading github docs, github performs its own regex search based on [search query](https://docs.github.com/en/rest/search#constructing-a-search-query) that has made.
- Without a TOKEN user is limited to do Repository search request 10 times in every minute but it is increased to 30 if TOKEN is given
- Without a TOKEN user cannot check collaborators of the project. [Doc](https://docs.github.com/en/rest/search#search-repositories)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run deply`

If you want to deploy app on a github pages you can run this script. this also runs `predeply` with builds app and with `gh-pages` push it to the branch that you run the script and deploys it
