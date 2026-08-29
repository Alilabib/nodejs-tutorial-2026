// callback 

// function processData(arr,callback){
//  const result = [];
//  for (const element of arr) {
//     result.push(callback(element));    // ([1,2,3,4,5],(element)=>{return element*2}    )
//  }

//  return result;
// }


// var arr = [1,2,3,4,5];
// function double(element){
//     return element*2;
// }


// var result = processData(arr,double);
// console.log(result);



// socpe & hoisting 

// let , var , const 
// const globalVar = "I am a global variable";
// myFunction(); // Calling the function to see the output

// function myFunction(){
//     const fucntionConst = "functionConst";
//     let functionLet = "functionLet";
//     var functionVar = "functionVar";
//     let x = 10;
//     if(x > 6){
//         let conditionLet = "conditionLet";
//         var conditionVar = "conditionVar";
//         const conditionConst = "conditionConst";

//         console.log(conditionLet); // Accessible here
//         console.log(conditionVar); // Accessible here
//         console.log(conditionConst); // Accessible here
//     }
//     let conditionLet = 'new conditionLet';
//     console.log(conditionVar); // Accessible here because var is function-scoped
//     console.log(conditionLet); // This will throw an error because conditionLet is block-scoped
//     console.log(conditionConst); // This will
// }   
// console.log(globalVar); // Accessing the global variable outside the function

// let x = '10 ';
// let y = '20';

// console.log(`${x}${y}`); // Output: ahmed mohammed



function createGreeter(greeting){
        return function(name){
            return `${greeting}, ${name}!`;
        }
} 

const WelcomeStudy = createGreeter("Welcome to the study");
console.log(WelcomeStudy("Ali Labib")); // Output: Welcome to the study, Ali Labib Mohammed!


const WelcomeRamadan = createGreeter("Welcome to the Ramadan");
console.log(WelcomeRamadan("Ahmed Mohamed")); // Output: Welcome to the Ramadan, Ahmed Mohamed!