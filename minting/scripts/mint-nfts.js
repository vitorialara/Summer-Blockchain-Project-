//THIS IS THE FILE THAT MINTS THE NFTS
// import Account from "../../components/Account";

// require('dotenv').config();

// const contract = require("../artifacts/contracts/smartcontract.sol/CliqueMint.json");
// // Contract deployment address 
// const contractAddress = "0xf3d76e19c42CBb892c5F566155288Ca4636B93a6";
// const nftContract = new alchemyWeb3.eth.Contract(contract.abi, contractAddress); 

// const METAMASK_PUBLIC_KEY = process.env.METAMASK_PUBLIC_KEY;
// const METAMASK_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY;

// async function mintNFT(tokenURI) {
//     // get the nonce - nonce is needed for security reasons. It keeps track of the number of
//     // transactions sent from our address and prevents replay attacks.
//   const nonce = await alchemyWeb3.eth.getTransactionCount(METAMASK_PUBLIC_KEY, 'latest');
//   const tx = {
//     from: METAMASK_PUBLIC_KEY, // our MetaMask public key
//     to: contractAddress, // the smart contract address we want to interact with
//     nonce: nonce, // nonce with the no of transactions from our account
//     gas: 1000000, // fee estimate to complete the transaction
//     data: nftContract.methods
//       .createNFT(Account.account, tokenURI) ///***** TRYING TO CALL THE ACCOUNT NUMBER FROM ACCOUNT FILE.
//       .encodeABI(), // call the createNFT function from our OsunRiverNFT.sol file and pass the account that should receive the minted NFT.
//   };

//   const signPromise = alchemyWeb3.eth.accounts.signTransaction(
//     tx,
//     METAMASK_PRIVATE_KEY
//   );
//   signPromise
//     .then((signedTx) => {
//       alchemyWeb3.eth.sendSignedTransaction(
//         signedTx.rawTransaction,
//         function (err, hash) {
//           if (!err) {
//             console.log(
//               "The hash of our transaction is: ",
//               hash,
//               "\nCheck Alchemy's Mempool to view the status of our transaction!"
//             );
//           } else {
//             console.log("Something went wrong when submitting our transaction:",
//             err
//           );
//         }
//       }
//     );
//   })
//   .catch((err) => {
//     console.log(" Promise failed:", err);
//   });
// }



