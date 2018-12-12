# Laravel React SSR Proof of Concept
This is a sample project that uses React.js SSR(Server side rendering) with Laravel.
It also demonstrates the use of routing and forms.

There are 2 folders:
* frontend : contains the React project
* backend : contains php Laravel project

## Frontend project

To get started, do the following:

Swtich to the frontend folder:
_cd frontend_

1. Install npm packages:
```bash
yarn install
``` 

2. Run development server:
```bash
yarn dev
```

3. Build production bundle:

```bash
yarn build
```
_This step bundles all static resources and and adds them to: `./backend/public/` folder._


## Backend project
This project uses the [spatie/laravel-server-side-rendering](https://github.com/spatie/laravel-server-side-rendering) package.

Swtich to the backend folder:
_cd backend_

To get started:

1. Set up the NODE_PATH environment variable in your .env:
```bash
NODE_PATH=/path/to/my/node
```
for nvm users:
```bash
NODE_PATH='/Users/<USERNAME>/.nvm/versions/node/v<NODE_VERSION>/bin/node'

```


2. Run:
```bash
php artisan serve
```

