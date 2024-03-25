function addThree(number: any) {
  let anotherNumber: number = 3; 
  return number + anotherNumber; 
}

const result = addThree(3)
const someValue = result

// runtime error
console.log(someValue);


const names:string[] = ['test', 'test1', 'test2', 'test3'];

for(let i = 0; i < names.length; i++){
  console.log(names[i])
}


/////params type and return with other type
//

function isNameList(name: string):boolean {
  return names.includes(name)
}

let nameToCheck = 'test'

if(isNameList(nameToCheck)){
  console.log(`name ${nameToCheck} is in the names`)
} else {
  console.log(`name ${nameToCheck} is not the list names`)
}

//// optional params

function calculatePrice(price: number, discount?: number):number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);

function calculateScore(
  initialScore:number,
  penaltyPont:number = 0
):number{
  return initialScore - penaltyPont; 
}

let scoreAfterPenalty = calculateScore(100,20);
let scoreWithoutPenalty = calculateScore(100);


// Object params 

function createEmploye({id}: { id: number }): {
  id: number;
  isActive: boolean; 
} {
  return { id, isActive: id % 2 === 0 }
}

const first = createEmploye({id:2})
const second = createEmploye({id:3})

console.log(first)
console.log(second)
