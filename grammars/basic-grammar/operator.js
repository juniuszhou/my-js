
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

