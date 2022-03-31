### install env-cmd
npm i env-cmd

### make edits to the package.json as follows 
 "scripts": {
    "start:local": "env-cmd -f .env.local rimraf ./build && react-scripts start",
    "start:development": "env-cmd -f .env.development rimraf ./build && react-scripts start",

### add .env.development and .env.local files 
REACT_APP_ENV = development
REACT_APP_URL = http://google.com/

### `npm run start:development`
run react using following command 
development environment : npm run start:development
local environment : npm run start:local

### add other environment configurations on similar pattern 

### react code
<p> api url : {process.env.REACT_APP_URL}</p>

