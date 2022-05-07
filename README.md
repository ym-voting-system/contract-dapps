# React Voting System

<a href="http://www.typescriptlang.org/"><img src="https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg?style=flat-square" height="20"></a>
<a href="https://twitter.com/younesmjl"><img src="https://img.shields.io/twitter/follow/younesmjl.svg?style=social&label=Follow&maxAge=3600" height="20"></a>
![badge](https://img.shields.io/endpoint?url=https://gist.githubusercontent.com/younesmjl/a34d78b87f5b70f82d398e90ba761749/raw/voting-dapps-badges.json)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

Repository containing the contracts and the interface of the react voting system project

[React](https://reactjs.org/), [ethers.js](https://docs.ethers.io/), and
[Solidity](https://soliditylang.org/).

-   [Getting Started](#getting-started)
-   [Directory Structure](#directory-sructure)
-   [Tech Stack](#tech-stack)
-   [Requirements](#requirements)
-   [Scripts](#scripts)
    -   [Backend](#repository)
    -   [Backend](#backend)
    -   [Frontend](#frontend)
-   [How to Update](#how-to-update)
- [Usefull links](#usefull-links)

## Getting Started <a name="getting-started"></a>

-   Clone the repo<br />
    `git clone -o seed -b main --single-branch https://github.com/YM-Voting-System/react-interface.git`

### Contract

-   Install project dependencies — `yarn install`
-   Compile your contract — `yarn hardhat compile`
-   Starts a JSON-RPC server — `yarn hardhat node`
-   Deploy your contract — `npx hardhat run scripts/deploy.ts --network localhost`

### Frontend

-   Open new terminal
-   Position yourself on the frontend directory `cd frontend`
-   Install project dependencies — `yarn install`
-   Launch the app — `yarn dev`, it will become available at [http://localhost:3000](http://localhost:3000/)
-   Add local network to your metamask wallet
    -   ChainID — `31337`
    -   Currency — `Ethereum`
    -   Currency Symbol — `ETH`
    -   Currency decimal's — `18`
    -   RPC URL — `http://127.0.0.1:8545/`

## Features


> **INDICATORS**
> + DONE : ✅ - [production](https://ym-voting-system.vercel.app)
> + IN PROGRESS : 🔁 - [development](https://github.com/ym-voting-system/contract-dapps/deployments/activity_log?environment=Preview)
> + TO DO : 🚧

| RELEASE |DESCRIPTION|STATUS|
|:--:|----|:--:|
|[v0.1.0](https://github.com/ym-voting-system/contract-dapps/releases/tag/v1.3.0)| 🛠️ Technicals Environnement | ✅ |
|[v0.2.0](https://github.com/ym-voting-system/contract-dapps/releases/tag/v1.3.0)| 📦 Registration of a blank list of voters.) | ✅ |
|[v0.3.0](https://github.com/ym-voting-system/contract-dapps/releases/tag/v1.3.0)| 🦾 The administrator to start the proposal registration session.) | ✅ |
|[v0.4.x](https://github.com/ym-voting-system/contract-dapps/releases/tag/v1.3.0)| ⚡️ Registered voters to register their proposals.)| ✅ |
|[v0.5.x](https://github.com/ym-voting-system/contract-dapps/releases/tag/v1.3.0)| 🦾 The administrator to end the proposal registration session) | ✅ |
|[v0.6.0](https://github.com/ym-voting-system/contract-dapps/releases/tag/v1.3.0)| 🦾 The administrator to begin the voting session. | ✅ |
|[v0.7.0](https://github.com/ym-voting-system/contract-dapps/releases/tag/v1.3.0)| ⚡️ Registered voters to vote for their preferred proposals. | ✅ |
|v0.8.0| 🦾 The administrator to end the voting session. |🔁|
|v0.9.0| 🦾 The administrator to tally the votes. |🚧|
|v1.0.0| 🔥 Everyone to see the results. |🚧|

## Directory Structure <a name="directory-sructure"></a>

`├──` [`.github`](.github) — GitHub configuration including CI/CD workflows<br>
`├──` [`.vscode`](.vscode) — VSCode settings including code snippets, recommended extensions etc.<br>
`├──` [`.husky`](./husky) — Git Hooks, for code quality<br>
`├──` [`contracts`](./contracts) — Solidity contracts<br>
`├──` [`deploy`](./deploy) — Automatic deployment script <br>
`├──` [`scripts`](./scripts) — Script to deploy contracts <br>
`├──` [`test`](./test) — Script to test contracts <br>
`├──` [`typechain`](./typechain) — Type declaration files for Contracts <br>
`├──` [`frontend`](./frontend) — dapp frontend <br>
`├────` [`artifacts`](./frontend/artifacts) — compiled artifacts (build-inf, abi...) <br>
`├────` [`src`](./frontend/src) — react component frontend <br>
`├──────` [`assets`](./frontend/src/assets) — Assets such as css, sass, img files<br>
`├──────` [`components`](./frontend/src/components) — Reusable components for pages and layout<br>
`├──────` [`hooks`](./frontend/src/hooks) — React hooks such as `UseContract`, etc.<br>
`├──────` [`layout`](.frontend//src/layout) — Reusable page templates<br>
`├──────` [`pages`](.frontend//src/pages) — Pages of applications<br>
`├──────` [`App.tsx`](.frontend//src/App.tx) — App Container and Routes<br>
`├──────` [`main.tsx`](.frontend//src/main.tx) — Inject app in index.html<br>
`├────` [`index.html`](.frontend//index.html) — Application entry point<br>

## Tech Stack <a name="tech-stack"></a>

-   [Hardhat](https://hardhat.org/), [ethers.js](https://docs.ethers.io/), [web3-react](https://github.com/NoahZinsmeister/web3-react),
    [TypeChain](https://github.com/dethcrypto/TypeChain/), [Waffle](https://getwaffle.io/)
-   [React](https://reactjs.org/), [React Router](https://reactrouter.com/),
    [Mantine](https://mantine.dev/), [Mantine UI](https://ui.mantine.dev/), [Vitest](https://vitest.dev/)
-   [TypeScript](https://www.typescriptlang.org/),
    [ESLint](https://eslint.org/), [Prettier](https://prettier.io/),
    [Yarn](https://yarnpkg.com/),
    [Vite](https://vitejs.dev/)
-   [Github Actions](https://docs.github.com/en/actions), [Vercel](https://vercel.com), [Dependabot](https://github.com/dependabot), [Gist](https://gist.github.com/)

## Requirements <a name="requirements"></a>

-   [Node.js](https://nodejs.org/) v16 or newer, [Yarn](https://yarnpkg.com/) package manager
-   [VS Code](https://code.visualstudio.com/) editor with [recommended extensions](.vscode/extensions.json)

**IMPORTANT**: Ensure that VSCode is using the workspace versions of TypeScript and ESLint.

![](https://files.tarkus.me/typescript-workspace.png)

## Scripts <a name="scripts"></a>

### Repository <a name="repository"></a>

-   `yarn prepare` — Install and configure husky hooks system
-   `yarn commit` — Run commitizen command line to receive assistance in drafting commit

### Backend <a name="backend"></a>

-   `npx hardhat accounts` — Prints the list of accounts
-   `npx hardhat compile` — Compiles the entire project, building all artifacts
-   `npx hardhat node` — Starts a JS ON-RP C server on top of Hardhat Network
-   `npx hardhat check` — Run Solhint for static code analysis
-   `npx hardhat test` — Runs mocha tests
-   `npx hardhat test --parallel` Run tests in parallel
-   `npx hardhat coverage` — Check the percentage of tests coverage
-   `npx hardhat clean` — Clears the cache a nd deletes all artifacts
-   `npx hardhat help` — Prints this message
-   `REPORT_GAS=true npx hardhat test` —
-   `npx hardhat run scripts/deployVoting.ts --network localhost` — Deploy smart contract to local network
-   `npx hardhat run scripts/deployVoting.ts --network rinkeby` — Deploy smart contract to testnet network
-   `TS_NODE_FILES=true npx ts-node scripts/deploy.ts` —
-   `npx eslint '**/\*.{js,ts}'` —
-   `npx eslint '**/_.{js,ts}' --fix` —
-   `npx prettier '\*\*/_.{json,sol,md}' --check` —
-   `npx prettier '**/\*.{json,sol,md}' --write` —
-   `npx solhint 'contracts/**/_.sol'` —
-   `npx solhint 'contracts/\*\*/_.sol' --fix` —

### Frontend <a name="frontend"></a>

-   `yarn dev` — Launches the app in development mode on [`http://localhost:3000`](http://localhost:3000/)
-   `yarn build` — Compiles and bundles the app for deployment
-   `yarn preview` — Preview your build app

## How to Update <a name="how-to-update"></a>

-   `yarn set version latest` — Bump Yarn to the latest version
-   `yarn upgrade-interactive` — Update Node.js modules (dependencies)
-   `yarn pnpify --sdk vscode` — Update TypeScript, ESLint, and Prettier settings in VSCode

## Usefull links <a name="usefull-links"></a>
- [uups-proxies-tutorial-solidity-javascript](https://forum.openzeppelin.com/t/uups-proxies-tutorial-solidity-javascript/7786)
- [Github OpenZeppelino proxy](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/proxy)
- [UUPS Modern walkthrough](https://r48b1t.medium.com/universal-upgrade-proxy-proxyfactory-a-modern-walkthrough-22d293e369cb)
- [UUPS vs Transparent & Deploying more efficient proxy](https://www.youtube.com/watch?v=kWUDTZhxKZI)
- [Old SDK Package from OZ](https://github.com/OpenZeppelin/openzeppelin-sdk/tree/master/packages/lib/contracts/upgradeability)
- [UUPS Factory](https://forum.openzeppelin.com/t/deploying-upgradeable-proxies-and-proxy-admin-from-factory-contract/12132/12)


---

<sup>Made with ♥ by Younès Manjal ([@younesmjl](https://twitter.com/younesmjl)).</sup>
