# React MV3 Chrome Extension #
This project was initialized from a Create React App (CRA) template and boilerplate code for rapid development of Manifest V3 Chrome extensions. [Learn more about this template](https://github.com/lewxdev/cra-template-mv3-chrome-extension).

## Dependencies ##
*Optional*
+ [`@mui/material`](https://mui.com/) Alongside its sibling dependencies (`@emotion/styled`, `@emotion/react`), MUI provides an optional UI framework for rapid development of interfaces such as popups and option pages.

*Development*
+ [`@types/chrome`](https://www.npmjs.com/package/@types/chrome) Provides autocomplete/intellisense for the `chrome` global during development of background and content scripts
+ [`concurrently`](https://www.npmjs.com/package/concurrently) Enables the nodemon watcher to run in tandem with `npm start`
+ [`nodemon`](https://www.npmjs.com/package/nodemon) Allows realtime development of extension components (found in the `public/` folder) to partially rebuild the extension (update the `public/` folder in the build)

## Usage ##
On creation of a new react app using this template, follow these steps to start developing an MV3 Chrome extension:

*Setup*
1. Immediately run `npm run build`, this will create a build at `extension/`
2. Navigate to [the Extensions page](chrome://extensions) in Chrome
3. Ensure **"Developer mode"** is enabled (top right) and select **"Load unpacked"**
4. Select the `extension/` directory built from step 1
5. Now you can start hacking!

*Scripts*
+ `npm run start` start a development server for building UI components/interfaces
+ `npm run build` create a production build from all existing changes
+ `npm run update` update the existing build with changes in `public/`
+ `npm run dev` start a development server and `public/` watcher to run `update`
