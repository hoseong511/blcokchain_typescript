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
Block.calculateBlockhash = (index, previoushash, timestamp, data) => CryptoJS.SHA256(index + previoushash + timestamp + data).toString();
Block.validateStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previoushash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";
const genesisBlock = new Block(0, "2020202020", "", "Hello", 123456);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatesBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatesBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newhash = Block.calculateBlockhash(newIndex, previousBlock.hash, newTimestamp, data);
    const newblock = new Block(newIndex, newhash, previousBlock.hash, data, newTimestamp);
    addBlock(newblock);
    return newblock;
};
const getHashForBlock = (aBlock) => Block.calculateBlockhash(aBlock.index, aBlock.previoushash, aBlock.timestamp, aBlock.data);
const isBlockValid = (candidateBlock, previousBlock) => {
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    }
    else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previoushash) {
        return false;
    }
    else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLatesBlock())) {
        blockchain.push(candidateBlock);
    }
};
createNewBlock("second block");
createNewBlock("second2 block");
createNewBlock("second3 block");
console.log(getBlockchain());
//# sourceMappingURL=index.js.map