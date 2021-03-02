const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('c63e005661c6980b245e3a8c9824ee8f6868f23027fecb49b7ff8f293ae9adef');
const myWalletAddress = myKey.getPublic('hex');

let sajeeCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
sajeeCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
sajeeCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of asaf is', sajeeCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', sajeeCoin.isChainValid());
