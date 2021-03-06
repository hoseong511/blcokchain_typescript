import * as CryptoJS from "crypto-js";

class Block {
  // 객체가 생성되지 않아도 실행될 스태틱메서드!
  static calculateBlockhash = (
    index:number,
    previoushash: string,
    timestamp: number, 
    data: string
    ): string =>
     CryptoJS.SHA256(index + previoushash + timestamp + data).toString();

  static validateStructure = (aBlock: Block) : boolean => 
    typeof aBlock.index === "number" && 
    typeof aBlock.hash === "string" && 
    typeof aBlock.previoushash === "string"&&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";

  public index:number;
  public hash:string;
  public previoushash:string;
  public data:string;
  public timestamp:number;

  constructor(
    index:number,
    hash:string,
    previoushash:string,
    data:string,
    timestamp:number){
      this.index = index;
      this.hash = hash;
      this.previoushash = previoushash;
      this.data = data;
      this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, "2020202020", "", "Hello", 123456);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatesBlock = (): Block => blockchain[blockchain.length -1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime()/ 1000);

const createNewBlock = (data:string): Block =>{
  const previousBlock: Block = getLatesBlock();
  const newIndex : number = previousBlock.index + 1;
  const newTimestamp :number = getNewTimeStamp();
  const newhash : string = Block.calculateBlockhash(
    newIndex, 
    previousBlock.hash, 
    newTimestamp, 
    data
    );  
  const newblock : Block = new Block(
    newIndex, 
    newhash,
    previousBlock.hash,
    data,
    newTimestamp
    );   
    addBlock(newblock);
    return newblock;
};

const getHashForBlock = (aBlock : Block) :string => Block.calculateBlockhash(
  aBlock.index,
  aBlock.previoushash,
  aBlock.timestamp,
  aBlock.data
);

const isBlockValid = (candidateBlock : Block, previousBlock: Block) : boolean => {
  if(!Block.validateStructure(candidateBlock)){
    return false;
  } else if(previousBlock.index + 1 !== candidateBlock.index){
    return false;
  } else if(previousBlock.hash !== candidateBlock.previoushash){
    return false;
  } else if(getHashForBlock(candidateBlock) !== candidateBlock.hash){ 
    return false;
  } else{
    return true;
  }
};

const addBlock = (candidateBlock: Block) : void => {
  if(isBlockValid(candidateBlock, getLatesBlock())){
    blockchain.push(candidateBlock); 
  }
};

createNewBlock("second block");
createNewBlock("second2 block");
createNewBlock("second3 block");

console.log(getBlockchain());

