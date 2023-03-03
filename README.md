    
## Example

```typescript
type Cat = {
    name:string
    age:number
}

type ExampleEventMap = {
    'add': Cat;
}
let newcat = new CustomEventTarget<ExampleEventMap>();

newcat.addEventListener("add", (cat) => {
    console.log(`I have a new cat named ${cat.name}, who is ${cat.age} years old.`);
})

I have a new cat named Andy who is 9 years old.
newcat.dispatchEvent("add", {name:"andy", age:9})
```

