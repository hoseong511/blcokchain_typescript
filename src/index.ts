interface Human {
  name:string,
  age:number,
  gender:string
}

const person = {
  name: "hoho12",
  age: 29,
  gender: "male",
}

const sayHi = (a:Human):string =>{
  return `Hello ${a.name}!! you are ${a.age} years old! you are ${a.gender}!`;  
};

const name1 = "hoho",
      age = 2911,
      gender = "male";

console.log(sayHi(person));


