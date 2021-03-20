"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previoushash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previoushash = previoushash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
// 객체가 생성되지 않아도 실행될 스태틱메서드!
Block.claculateBlockhash = (index, previoushash, timestamp, data) => CryptoJS.SHA256(index + previoushash + timestamp + data).toString();
Block.validateStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previoushash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";
const genesisBlock = new Block(0, "2020202020", "", "Hello", 123456);
let blockchain = [genesisBlock];
console.log(blockchain);
const getBlockchain = () => blockchain;
const getLatesBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatesBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newhash = Block.claculateBlockhash(newIndex, previousBlock.hash, newTimestamp, data);
    const newblock = new Block(newIndex, newhash, previousBlock.hash, data, newTimestamp);
    return newblock;
};
const isBlockValid = (candidateBlock, previousBlock) => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    }
};
//# sourceMappingURL=index.js.map