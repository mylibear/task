# Getting Started with Create React App
1. 1. cd server:run "npm i express mongoose nodemon bcrypt cors dotenv socket.io"
2. cd public npm install (delete node_modules before installation) then npm start
3. NPM Dependency Resolution Conflicts:
   npm config set legacy-peer-deps true
   npm install --save --legacy-peer-deps
   npm install --force


steps:
1. download node.js from https://nodejs.org/en/
2. move to local directory of this project file, for example, it is C:\Users\user\Desktop\deco7381\simplify in my laptop, then type cmd
3. 'npm start' will open the webpage, 'code .' will open the code in VS code
'npm install' will install packages in this project
4. under pages, create a new folder for different pages then create files, html in .jsx, javascript in .js, css in .css
5. VS code left-hand side last icon "extension", download 'ES7+ React/Redux/React-N', then can just type 'rfc' in jsx
6. package to install in cmd(note: must in local directory of this project file) - 
   First of all: "npm install @mui/icons-material @mui/material @emotion/styled @emotion/react"
   To see icons: "npm install @material-ui/icons"
7. In src/pages/Home/home.jsx, i Import three jsx with path like:  from 'C:/Users/user/Desktop/deco7381/simplify/src/components/....' but the path may be different in your machine, remember to change it
8. you can access Calendar page by type /calendar after the url
9. package for calendar:
react-big-calendar, react-datepicker, date-fns

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
