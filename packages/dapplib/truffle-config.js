require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain coconut gesture person obscure solar'; 
let testAccounts = [
"0xf2d9e85d6259708c9f893fb6f4deb0853ff41343aac4e454abf06470987f9336",
"0xc7fd1c0b53c4cf02b41c9f784e83bf79b9e8d59486c6d5c2b563dbcac3e46549",
"0x1c95014953edf7b5938597192a4a2b3ff967c76857792c550724c9bdce8f6881",
"0xd1726c517bf50e41767d34bec1917ad24beef62c3f7477483b34a1301cc28eed",
"0x176b4edd717d05a05e8d78729af8e2e580b68c2d74016b9f8b262ff0c7f1de4b",
"0x9ca35edfa8317cb997cca4c6d0802f30cff5d66d758f758a64e1044577c5f979",
"0x02b943dce832bfabbea8d83f19c8c12f9b5fe4e68a6d1c7cc7c0f76f96f9e393",
"0x5785b8308af717221b398bee7abb58f798bef8e411b39e45aff01b64fca7bac1",
"0xa911e57e1689f64c38d5dfb57d6c64e1c94d9e64080f3a47236d5b4e88af3e07",
"0x61a4886ad75e1d46c44019d44f77aeb68482bc409b3716ea3cc5813aef149bc8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
