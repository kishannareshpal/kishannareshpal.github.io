# Kishan Jadav

[`https://kishanjadav.com`](https://kishanjadav.com)

<img src="./docs/banner.png" style="border-radius: 12px" />

## Requirements

- [NodeJS LTS](https://nodejs.org/) - Recommendation: Use [`nvm`](https://github.com/nvm-sh/nvm) to manage your NodeJS versions.

## Getting Started

1. Ensure you have the correct NodeJS version supported by this application: `nvm use`
2. Install node dependencies `npm install`
3. Start up the development server by running `npm start`
4. The website will be hosted at [http://localhost:3000](http://localhost:3000).

## Deploy

This website's deployments are managed by GitHub workflow via `.github/workflows/build-and-deploy.yml`. They occur
automatically on push to the `main` branch or manually by triggering the `Deploy site to Pages` workflow.
