class Human {
  public name: string ;
  private age: number = 100;
  public gender: string;
  constructor(name: string, gender?:string){
    this.name =name;    
    this.gender = gender;
  }

  
  public get getAge() : number {
    return this.age;
  }
  
}

const ho = new Human("hoho" )

const person = {
  name: "hoho12",
  age: 29,
  gender: "male",
}

const sayHi = (a:Human):string =>{
  return `Hello ${a.name}!! you are ${a.getAge} years old! you are ${a.gender}!`;  
};

const name1 = "hoho",
      age = 2911,
      gender = "male";

ho.name ="hohoho"
console.log(ho.getAge);

console.log(sayHi(ho));


