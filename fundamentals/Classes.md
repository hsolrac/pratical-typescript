### Classes

```typescript
class Book {
    public readonly title: string;
    public autor: string;
    private checkedOut: boolean = false;

    constructor(title:string, author:string){
        this.title = title, 
        this.autor = author,
    }

    public checkOut() {
        this.checkedOut = true;
    }

    public isCheckedOut() {
        return this.checkedOut
    }

    private toggleCheckOutStatus(){
        this.checkedOut = !this.checkedOut
    }
}

const deepWork = new Book('Deep Work', 'Cal Newport');
//{title: 'Deep Work', autor: 'Cal Newport'}
```

###### Type Data Modification

- public 
- private
- protected
- static
- readonly

-> TypeScript includes the readonly keyword that makes a property as read-only in the class, type or interface.

-> An interface can also have readonly member properties.

```typescript
interface Person {
    readonly name: string;
}
```

