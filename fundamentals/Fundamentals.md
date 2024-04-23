### The primitives: 
- string 
- number
- boolean

JavaScript has three very commonly used primitives: string, number, and boolean. Each has a corresponding type in TypeScript. As you might expect, these are the same names you’d see if you used the JavaScript typeof operator on a value of those types:

#### Type Annotations

Explicity specify the types of variables, parameters, return values, and other entities in your code.

1. Variable declaration:
```typescript
let number: number; 
let myString: string; 
let myBoolean: boolean = true;
```

2. Funcion Parameters and Return Types:

```typescript
function add(x: number, y: number): number {
    return x + y;
}
```

3. Object Properties:

```typescript
interface Person {
    name: string; 
    age: number;
}

function great(person: Person): string {
    return `Hello, ${person.name}! You are ${person.age} years old.`
}
```

4. Array Types:

```typescript
let numbers: number[] = [1,2,3,4]; 
let names: string[] = ["Alice", "Bob", "Charlie"]
```

5. Union Types: 

```typescript
let value: string | number; 

function display(value: string | value): void {
    console.log(value)
}
```

6. Type Alias:

```typescript
type Point = { x: number; y: number };
let point: Point = { x: 10, y: 20 };
```

7. Funcion Types: 

```typescript
type AddFunction = (x: number, y: number) => number; 
ler add: AddFunction = (x, y) => x + y;
```

### Tuplas and Enums

Tuplas and Enums are similar to arrays and objects, but their elements can be of any type.

- Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.

```typescript
enum StatusResponse {
    Success = 200, 
    Error = 500
}

interface Response {
    status: StatusResponse;
    data: string[];
}

function getServerResponse(): Response {
    return {
        status: StatusResponse.Sucess,
        data: ["data1", "data2"]
    }
}

```


- A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

### Type Manipulation

- Generics - Type which take parameters
- Keyof Type Operator 
- Typeof Type Operator
- Indexed Access Types
- Conditional Types
- Mapped Types
- Template Literals Types

##### Hello World, Genercis 

Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems.


```typescript
function identify<T>(name: T): T {
    return name;
}

let name = identify("John");


funtion genericFunction<T>(arg: T): T {
    return arg;
}

const someStringValue = genericFunction<string>("Hello");
const someNumberValue = genericFunction<number>(10);


interface genericInterface<T> {
    value:T; 
    getValue: () => T;
}

const genericString: genericInterface<string> = {
    value: "Hello",
    getValue() {
        return this.value
    }
}

async function someFunc():Promise<string> {
    return "Hello";
}

```


##### Generic Classes 

A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (<>) following the name of the class.

```typescript
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```


###### Fetch Data

- Tipical axios and React Query
- we wont set any state values
