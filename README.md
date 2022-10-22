# OneNine AI Documentation website
This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## How to Setup for Windows?

### Step 1
Clone this repository  
```
git clone https://github.com/Onenine-AI/onenine-ai.github.io.git
```

### Step 2
Checkout to the dev branch
```
git checkout dev
```

### Step 3
Make the changes to the md files in the dev branch and use ```yarn start``` to start a local development server

### Step 4
Once the changes are done, use the following commands to deploy the local changes
```
SET DEPLOYMENT_BRANCH=main
SET GIT_USER=<Your GitHub username>
cmd /C "set 'GIT_USER=<Your GitHub username>' && yarn deploy"
```


## How to setup for Linux?

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
