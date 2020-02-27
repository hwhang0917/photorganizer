# Photorganizer

- Quick Note
  - Use the following command to clone git repository to your local computer
  ```shell
  git clone https://github.com/hwhang0917/photorganizer.git
  ```
  - [Install Yarn](https://yarnpkg.com/getting-started/install)

## Project Members

- Heesang Mark Whang
- Subin Kim
- Akhigbe Unuigbe

## Project Description

This is an image organizing web based application. This is a group project for the course Software Engineering (CSCI450) instructed by professor Grace Lew.

- #### General Guide

  We will use [Yarn Package Manager](https://yarnpkg.com/) for all dependency management.

- #### Backend Side Guide

  Our project uses is written with JavaScript. Thus the project uses [Node.JS](https://nodejs.org/), which is a tool helps run JavaScript outside of the browser and run within the system. Node JS has a server framework called [ExpressJS](https://expressjs.com/) that can be used to build quick servers.

- #### Frontend Side Guide

  Our project renders HTTP requests and show user interface through [PugJS]() and [SCSS / SASS](https://sass-lang.com/) as view engine.

- #### Dev Ops Guide

  Our project uses [GulpJS](https://gulpjs.com/) to control build flow and pipeline to integrate [Babel](https://babeljs.io/) / [Scss](https://sass-lang.com/) / [Pug](http://pugjs.org/) into browser compatible JavaScript, CSS , and HTML.

## Dev Command Guide

This process will start a development server in localhost

1. Install Dependencies

   ```shell
   yarn install
   ```

2. Run Develop Assets

   This process will watch client side assets (JS, SCSS, PUG, etc)

   ```shell
   yarn run dev:assets
   ```

3. Run Develop Server

   This process will watch server side code (express server, etc)

   ```shell
   yarn run dev:server
   ```

## Build Command Guide

This process will build deployable code to common JavaScript using Gulp

1. Install Dependencies

   ```shell
   yarn install
   ```

2. Build project

   ```shell
   yarn run build
   ```

## Dependencies Reference and Guides

The following are useful links and dependency documentations.

##### Used Tool Links

- [Node JS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Figma Wireframing Tool](https://www.figma.com/)

##### Dependency Suggestion

- [Electron JS](https://www.electronjs.org/)

##### Express Server Middleware

The backend Express server utilizes some middleware. These are the imported middleware for convenience.

- [Morgan](https://www.npmjs.com/package/morgan)
  - HTTP Logger
- [Helmet](https://www.npmjs.com/package/helmet)
  - HTTP header security

##### Guide Links

Most of the NPM/YARN packages have their own documentations. You can view their documentations for more information. The following are extra resources that can be guide for this project.

- [Git Cheatsheet](https://rogerdudler.github.io/git-guide/index.html)

## Tasks Checklist

- [x] [SPMP](https://docs.google.com/document/d/1efZlZqXOyssNrvKTeD-z5PMA7D-dw2AZRmiQvfEBhv8/edit?usp=sharing)
- [x] [SRS](https://docs.google.com/document/d/11epIAPKunG_suhRi7M4IBe1h7vPPXuk_Qj3y8QR6Vw4/edit?usp=sharing)
- [x] [SDD](https://docs.google.com/document/d/1ACKGWFZgQT5GJlm6Oa4l6Cc52V0TqhxrQ5hAnHAdXaU/edit?usp=sharing)
- [x] [Scrum Back Log](https://docs.google.com/spreadsheets/d/1froPASSCHChP8bctYNTxjJfjIjAtwvmkpMPh1d5ASao/edit?usp=sharing)
- [x] [Wireframe](https://www.figma.com/file/QkBPxaX2kneznzkUjByjNu/Photorganizer?node-id=0%3A1)
- [x] [Scrum Product Backlog](https://docs.google.com/spreadsheets/d/1froPASSCHChP8bctYNTxjJfjIjAtwvmkpMPh1d5ASao/edit?usp=sharing)
- [ ] Sprint #1 / Backlog Burndown #1
- [ ] Sprint #2 / Backlog Burndown #2
- [ ] Sprint #3 / Backlog Burndown #3
- [ ] Sprint #4 / Backlog Burndown #4
- [ ] Testing
- [ ] Deployment
- [ ] Final Presentation Prepare

#### Sprint #1 Tasks

- [ ] Project Setting (Dev Ops)
  - [ ] SCSS / Babel Build flow
- [x] Routing
- [x] Server
- [ ] Page Rendering using Pug and SCSS
  - [x] Pug
  - [ ] SCSS
- [ ] Pages
  - [ ] Landing Page (Home)
  - [ ] Login
  - [ ] Reset Password
  - [ ] Join
  - [ ] Dashboard
  - [ ] Image Detail
  - [ ] Settings
