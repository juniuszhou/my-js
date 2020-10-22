
// ?? ||
// ?? get first not-null / undefined value

let firstName = null;
let secondName;
let finalName = 'fanal';
console.log(firstName ?? secondName ?? finalName);

// || get first truthy value, ignore the default value. since default value taken as true
let height = 0
console.log(height || 100) // get 100

// &&


// spread operator ... array to parameter serial with comma
let a = [0, 1, 2]
console.log(...a) // equal console.lgo(0, 1, 2)  output is 0 1 2

let [first, ...rest] = a
console.log(rest)
// 

// format string with `
let a = 'Hello'
let b = 'world'
let c = `{$a} {$b}`
console.log(c)

