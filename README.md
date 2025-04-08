# 🎨 NFT Marketplace for Influencers

This full-stack Web3 project enables influencers to upload, mint, and sell their digital art as NFTs. Built with **Next.js**, **TailwindCSS**, and **smart contract integration**, this summer project demonstrates skills in frontend engineering, blockchain interaction, and decentralized asset management.

---

## 💡 Project Overview

This decentralized NFT platform was designed to empower content creators and influencers to monetize their art. Users can:

- Connect their wallets (e.g. MetaMask)
- Upload and preview artwork
- Mint NFTs to the blockchain
- List them for sale
- Browse and buy NFTs directly through the web interface

---

## 🛠️ Technologies Used

### Frontend
- **Next.js** – React framework for SSR and routing
- **TailwindCSS** – Utility-first styling
- **Web3 / Ethers.js** – For interacting with Ethereum smart contracts
- **React Hooks** – Custom hooks for wallet connection and blockchain state

### Smart Contract (Minting)
- **Solidity + Hardhat/Ganache** (in `/minting` folder)
- Local blockchain for testing NFT minting logic

---

## 🚀 Features

- 💰 **Minting NFTs** from uploaded art files
- 🖼️ **Preview & metadata configuration**
- 🧠 **Wallet connection** (MetaMask integration)
- 🛒 **Marketplace UI** for browsing and purchasing
- ⚡ Responsive design and smooth user experience

---

## 🧪 Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MetaMask or other Web3 wallet

### Setup

```bash
# Install frontend dependencies
npm install

# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Minting Backend (Optional)
Inside the `minting/` folder, you can simulate smart contract deployment and minting using Ganache or Hardhat.

```bash
cd minting
npm install
npx hardhat node
```

---

## 📂 Project Structure Highlights

- `/pages/` – Next.js routes and API endpoints
- `/components/` – UI components like NFT cards, uploaders, etc.
- `/minting/` – Smart contract logic and testnet integration
- `/hooks/` – Wallet connection logic and blockchain state management

---

## ✨ Skills Demonstrated

- ✅ Full-stack Web3 DApp development
- ✅ Blockchain interactions and wallet integration
- ✅ Smart contract fundamentals
- ✅ Frontend architecture and UI/UX design
- ✅ State management and async handling in React
- ✅ Project structuring and modular development

---

## ✍️ Author

Developed by Vitoria Lara as an a summer project to explore blockchain applications and empower creators through decentralized technologies.

---

## 📜 License

MIT License
