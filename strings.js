//strings
// let firstName = "Sujeeth ";
// let secondName = "kolli";
// 1. concatenation
// let fullName= firstName.concat(secondName);
// console.log(fullName)

//2. append
// firstName += "programmer";
// console.log(firstName);

//3. length
// console.log(firstName.length);

//4. Cases
// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

//5. slice
// console.log(firstName.slice(1,6));

//6. split & join 
// console.log(firstName.split(" "));
// console.log(firstName.split(" ").join(""));

//7. includes
// console.log(firstName.includes("S"));

// 8. trim
// console.log(firstName.trim());


//1. create variable name (favActorFirstName) and store your favorite actor's first name in it
//2. create variable name (favActorLastName) and store your favorite actor's last name in it
//3. create variable name (FullName) and concatenate the first name and last name
//4. create variable name (uppercase) & CAPITALIZE your fav actor name
//5. Create a variable name (message) & store `my favorite Actor is (favActorName) & say something about your fav actor `name should be uppercase.
//6. Now append this message to the (message variable) `his best show is Silicon Valley`
//7. Now log your message.

let favActorFirstName = 'chris';
let favActorLastName = 'evans';
let FullName = favActorFirstName.concat(favActorLastName);
console.log(FullName);
let upperCase = FullName.toUpperCase();
console.log(upperCase);
let message = `my favorite actor is ${upperCase} `;
message += `he played captain america `;
console.log(message);


