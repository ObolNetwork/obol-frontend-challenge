# Obol DApp Challenge

Welcome to Obol's frontend and Web3 developer challenge, focusing on modern web technologies and blockchain interactions.

## Intro
Obol’s mission extends into Web3! We aim to not only list and preview Pokemon but also enable users to interact with them through Ethereum blockchain technology.

## Assignment
Enhance the Pokemon application to integrate Web3 functionalities. Users should be able to connect their MetaMask wallet and "Collect" a Pokemon by signing a simple Ethereum transaction.

## Design Reference

Refer to our updated Figma file for design guidelines: [Figma File](https://www.figma.com/file/lUoH5dEVFi8NgbptXNsJUI/Obol-Design-Files-(Copy)?type=design&node-id=3495-7764&mode=design)

## Key Features and Technical Requirements

- **MetaMask Wallet Connection:** Implement functionality to connect to a user's MetaMask wallet using libraries like RainbowKit and wagmi.
- **Ethereum Transaction Signing:** Allow users to "Collect" a Pokemon by initiating and signing a simple Ethereum transaction.
- **Server-Side Rendering (SSR):** Continue using SSR for enhanced performance and SEO.
- **Tooltip with Web Scraping:** Display basic Pokemon info in a tooltip using server-side web scraping (e.g., with Cheerio).
- **Atomic Design:** Choose your preferred CSS technology (e.g., Tailwind CSS) and follow the Atomic Design methodology for component development.
- **Use of React Hooks and Custom Hooks:** Emphasize the use of React Hooks for state and lifecycle management, particularly in managing Web3 interactions.
- **API Integration and Web3 Integration:** Use the provided Pokemon API and integrate Web3 functionalities for blockchain interactions.
- **Deployment:** Deploy the application ensuring that both SSR and Web3 functionalities work seamlessly in the production environment.

## API and Blockchain Endpoints

- Pokemon List: `https://pokeapi.co/api/v2/pokemon?limit=151`
- Individual Pokemon Data: `https://pokeapi.co/api/v2/pokemon/{id-or-name}/`
- Bulbapedia Link: `https://bulbapedia.bulbagarden.net/wiki/{name}`

## Getting Started

1. Ensure Node.js is installed.
2. Initialize the project using Create Next.js App with Yarn.
3. Implement features following the Git Flow model.
👀
### Development Commands

- `nvm use`
- `yarn && yarn dev` (for development)
- `yarn start` (for production)

## Evaluation Criteria

- Successful integration of Web3 functionalities.
- Clean and efficient implementation of SSR, data state, and web scraping.
- Quality and organization of code, following best practices.
- Effective use of React Hooks and custom hooks.
- Styling accuracy, responsiveness, and adherence to design patterns.
- Documentation and ease of understanding.

Use TS please 👀

This challenge is your opportunity to showcase your skills in both advanced frontend development and  Web3 interactions. We are excited to see how you creatively integrate these technologies!

## deploy

Deploy this using something like vercel or similar, and share the deployed link in your PR description.

## Bonus

Create a basic user authorization layer that allows authenticated users to access a dedicated page. You can implement authentication using JWT and SIWE, also you can utilise @rainbow-me/rainbowkit-siwe-next-auth. 

Support multiple wallets, like WalletConnect, in addition to MetaMask.

## Note

Since PRs to this repo are not required, cretae your repo as private and add us (HananINouman, agaskrobot) as collaborators to review it.



