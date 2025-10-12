//  function greetUser() {
//   console.log("Hello World again");
//   console.log("Welcome to function lecture");
// }

// calling/invoking a function
// greetUser();

/* Parameterized Functions */
// function greetUser(userName) {
//   console.log("Hello " + userName);
// // }

//function with default parameter
// function sum(a = 0, b = 0) {
//   return a + b;
// }

// console.log(sum(2,3)) //5
// console.log(sum(3)) //a=0 b=3 return 3

// const students = ["Rahul", "Puneet", "Prateek", "Rani", "Riya", "Sumit"];
// //print 2nd student
// console.log(students[1]);

//print all students using loops
// for (let i = 0; i < 5; i++) {
//   console.log(students[i]);
// }
// other types of array declarations
// const arr1 = [1, 2, 4, 5, 6];
// const arr2 = new Array(1, 2, 3, 4, 5);
// arr1[2] = 10;
// console.log(arr1);

// const emptyArr1 = [];
// const emptyArr2 = new Array();
// console.log(emptyArr1, emptyArr2);

// const iplTeams = ["CSK", "MI", "RCB", "SRH"];

// //add some elements
// //1
// console.log("PUSH: ", iplTeams.push("GT")); // insert at end
// //2
// iplTeams.unshift("KKR"); //insert at begining

// //Remove some elements
// //
// iplTeams.pop(); // deletes from end
// //2
// iplTeams.shift(); // deletes from begining

// console.log("IPL teams: ", iplTeams);

// //length
// console.log("No. of IPL teams", iplTeams.length);
// // print IPL teams
// console.log("IPL teams: ", iplTeams);

// //slice
// // keeps all elements after first 2 elements
// console.log("Sliced: ", iplTeams.slice(2)); 
// // keeps 2 elements from end
// console.log("Negative Sliced: ", iplTeams.slice(-2));


// console.log("Real teams: ", iplTeams);