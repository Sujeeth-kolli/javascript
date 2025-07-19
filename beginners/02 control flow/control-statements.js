// conditional statements
// let time=15;
//  let greeting;
//   if (time<10)
//   {
//     greeting="good morning";
//     console.log(greeting);

//   }
//   else if(time<20){
//  greeting="good afternoon";
//     console.log(greeting);
//   }
//   else {
//  greeting="good evening";
//     console.log(greeting);
//   }


// 1. Create variable name (password) store nothing.
// 2. If password is equal to 8 print "Welcome"
// 3. If password is less then or equal to 8 print "Password is too short"
// 4. If password is greater then or equal to 8 print "Too Long Password" & "Password should be 8 characters"
// 5. If all fails print "Please provide a password."

let password;
if(password===8){
    console.log("welcome")
}
else if(password<=8)
{
console.log("Password is too short");
}
else if(password>=8)
{
    console.log("too long password");
}
else {
    console.log("please provide password"); 
}