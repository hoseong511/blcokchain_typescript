
const name1 = "hoho",
      age = 2911,
      gender = "male";

const sayHi = (a:string, b:number, c?:string):string =>{
  return `Hello ${a}!! you are ${b} years old! you are ${c}!`;  
};

console.log(sayHi(name1,age, gender));


