# Welcome to 24 Hours Code Challenge | Weather Forecast 👏

## 📌 Prerequisites

- NodeJS >= 16.10.0
- Yarn >= 1.22.9

## ⚙️ Installation

#### Create `.env` file

> Contact with Frontend Team Leader to be sharing information to fill in this file

```bash
$ cp .env.example .env
```

#### Install `Yarn`

> You can use `NPM` but we recommended `Yarn`

```bash
$ npm install --global yarn
```

#### Install dependencies

```bash
# Install dependencies
$ yarn

# Start development
$ yarn start
```

## 📕 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

| Variable                        | Usage                                                             |
| ------------------------------- | ----------------------------------------------------------------- |
| `REACT_APP_AUTH0_DOMAIN`        | Auth0 DOMAIN of application                                       |
| `REACT_APP_AUTH0_CLIENT_ID`     | Auth0 CLIENT ID of application                                    |
| `REACT_APP_AUTH0_AUDIENCE`      | Auth0 AUDIENCE of application                                     |

## ✍️ `package.json` scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn lint:fix`

**Check** your JS/TS convention using `ESLint`.

## 💚 TechStacks

- [Create React App](https://create-react-app.dev/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Typescript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [React Query](https://react-query-v3.tanstack.com/)
