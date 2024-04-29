## Typescript for functional programming

This introduction is designed for working Haskell or ML programmers who want to learn TypeScript. It describes how the type system of TypeScript differs from Haskell’s type system. It also describes unique features of TypeScript’s type system that arise from its modelling of JavaScript code

##### Built-in Types

| Type | Explanation |
| --- | --- |
| `Nuber`  | floating point double-precision |
| `String` | an immutable sequence of UTF-16 code units |
| `BigInt` | Integers in the arbitrary precision format |
| `Boolean`| true and false |
| `Symbol` | a unique value usually used as key |
| `Null`   |  equivalent to the unit type  |
| `Undefined` | also equivalent to the unit type   |
| `Object` | similar to records  |


##### Other important TypeScript types 

|Type	  | Explanation |
| ---     |	--- |
|unknown  |  the top type. |
|never	  |  the bottom type. |
|object   |  literal	eg { property: Type } | 
|void	  |  for functions with no documented return value |
|T[]	  |  mutable arrays, also written Array<T> |
|[T, T]	  |  tuples, which are fixed-length but mutable |
|(t: T) => U |  	functions |

> Note<br>
> Syntax includes parameters names. 
> `let fst: (a: any, b: any) => any = (a, b) => a;`
