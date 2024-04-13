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

```typescript
function identify<T>(name: T): T {
    return name;
}

let name = identify("John");
```
