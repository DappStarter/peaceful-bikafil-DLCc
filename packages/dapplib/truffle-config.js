require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remain essay hidden arctic olympic summer'; 
let testAccounts = [
"0x50ec99ee7ae7c126035907c1dc66cf676a1e1046b06841b2926227a432b0a52d",
"0x7ef236f37b9eb1fcbab8a12d7cb8eaf7990d12165e92cec5120f987abe8de7f3",
"0x02e5e6b611c20c6e086bfc326b93f8bfce728132a870b877490ce0ba693a38cd",
"0xa0b5d1f855a5a6a664721251dfebc79bc11579a8a3db49a71e9b9452d2bba6b5",
"0xba279862f25128f3baab2e8b5f605268ed9a978e37c22df9420302e000ddcc1c",
"0xde0d21d986a4a9762019f54de0b1de34298f45952d345ced366d2c7884c51d55",
"0xe5d70692aa68ffccfa2f1ca470d6ef21cc974ab3db58097a91bf5a6b8fc4e8cf",
"0xc88c480a4de97268cd06d104f42984b4ca0b733876f96cac735c09a5672bc559",
"0x2934605782521bd0988de9319a236def08cb792e2f8fd9139a6e0a29a5067ed6",
"0x7666ed6eb477ebc239071ca69bc2ff4c6c054dad9a2f4c48878657f07b4edc99"
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
            version: '^0.8.0'
        }
    }
};

