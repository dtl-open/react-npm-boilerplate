# React NPM Components - Boilerplate Project

Boilerplate Project which can be used to develop react components and publish them to NPM repository.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


# How to use

1. Root component which is going to be published as NPM package should be placed inside `src/components/index.js`. All other components can be structured inside components folder.
 
2. Run `npm install` first

3. First develop your component using normal React Development Project. Use `npm start` to develop the component interactively.

4. Once the component is in a publishable stage:

- Update the `npmify\README.md` with the details related to component. This is what going to be displayed in NPM page.
- Login to NPM if you are not logged in. [Follow](https://docs.npmjs.com/getting-started/publishing-npm-packages)
- Run the command `npm run npmify` to publish the package.  