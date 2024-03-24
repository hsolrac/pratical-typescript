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
