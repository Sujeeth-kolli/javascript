// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

const a = document.querySelector("a");
const input = document.querySelector("input");


// getting attributes 
// console.log(a.href)
// console.log(a.href= "www.youtube.com/@napff")
// console.log(input.value);
// console.log(input.type);

// setting attributes

// a.href= "www.youtube.com/@napff"
// console.log(input.value="bye")
// console.log(input.type="password");
// console.log(input.placeholder="provide password");



//getAttribute(attrName)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"))

// setAttribute(attrName, value)
input.setAttribute("placeholder","password")
input.setAttribute("type","password")