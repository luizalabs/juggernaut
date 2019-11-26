# Tatooine blog

A blog from far and hot tatooine system 🌕 📚 📝

Bootstraped with [Juggernaut](https://github.com/SoftboxLab/juggernaut)


![tatooine blog](https://i.imgur.com/7OoLti1.png)

## Startup

Step by step to get this up and running

### Clone repo and go to project folder

> git clone https://github.com/SoftboxLab/juggernaut.git && cd juggernaut

### Install dependencies

```bash
yarn
```

### Start server

```bash
yarn start
```

## Patterns

These are some of patterns definitions to help us to keep a default configuration and front-end arquitecture.

- NPM or Yarn? `npm` has a known issue with hoisted packages ([here](https://npm.community/t/packages-with-peerdependencies-are-incorrectly-hoisted/4794)), that is the reason we use `yarn`;
- UI Kit library? Jump into [MaterialUI](https://material-ui.com);
- Linter: If You don't use [Gandalf Lint](https://github.com/SoftboxLab/gandalf-lint), you shall not pass;
- Do you want a component pattern? [Get here](src/containers/Home/index.jsx);
- Why [Formik?](https://jaredpalmer.com/formik/docs/overview#motivation)
- Why [Axios?](https://github.com/axios/axios#features)
- Why [Material?](https://material-ui.com/blog/material-ui-v4-is-out)

### Project structure

- **src/assets**: Static files (images, fonts and icons);
- **src/components**: Components of React to be shared and reused in the project;
- **src/common**: Utilities, resources, constants, assets, configurations, i18n and others;
- **src/containers**: Page components that apply business knowledge and present themselves as pages;
- **src/routes**: Routes of app to be used by SPA and user navigation;
- **src/store**: State configuration with Redux;
- **docs**: Docs configuration.

