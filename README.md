# Frontend React Template

![](https://github.com/amsterdam/frontend-react-template/actions/workflows/ci.yml/badge.svg)
![](https://github.com/amsterdam/frontend-react-template/actions/workflows/gh-pages.yml/badge.svg)


A live demo can be found here [https://amsterdam.github.io/frontend-react-template/](https://amsterdam.github.io/frontend-react-template/)

This project can be used to create a new frontend react project from scratch for projects within the community of Amsterdam open source projects.

It includes:
- `@amsterdam/asc-ui`
- `@amsterdam/asc-assets`
- `@amsterdam/arm-core`
- `styled-components`
- `leaflet`
- hooks/`useFetchData` that uses `axios` with support for get, patch, post and put methods
- `react-scripts`, containing:
  - `typescript`
  - `eslint`
  - `prettier`
  - `jest`
  - `@testing-library`
  - `lerna`


Also this project uses [github actions workflows](https://github.com/Amsterdam/frontend-react-template/actions) for CI deployment.

If you want to use a form utility we suggest you use: [`react-hook-form`](https://www.npmjs.com/package/react-hook-form).

If you want to use keycloak? Be sure to get keycloak implementation from [blackspots](https://github.com/Amsterdam/blackspots-frontend).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project specifically does NOT include. We are phasing out these dependencies:
- `redux`
- `saga`
- `enzyme`
- `@amsterdam/react-maps` all dependencies can be found in `@amsterdam/arm-core`


## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Ohter commands:

#### `npm run lint`

#### `npm run test`

#### `npm run test:watch`

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

