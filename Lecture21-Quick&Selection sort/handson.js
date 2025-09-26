let array = [2, 7, 1, 5, 8]
//brute force
let greater = [];
let smaller = [];
for (let i = 0; i < array.length - 1; i++) {
    if (array[i] >= array[array.length - 1]) {
        greater.push(array[i])
    } else {
        smaller.push(array[i])
    }
}

for (let i = 0; i < smaller.length; i++) {
    array[i] = smaller[i]
}
array[smaller.length] = array[array.length - 1]
let i = 0
for (let j = smaller.length + 1; j < array.length; j++) {
    array[j] = greater[i]
    i++;
}
// console.log(array)

//optimized

function placeAtCorrectPosition(array) {
    let i = 0
    let j = array.length - 1;
    let k = 0;
    while (i < j) {
        if (array[i] <= array[j]) {
            [array[k], array[i]] = [array[i], array[k]]
            k++;
        }
        i++;
    }
    [array[k], array[j]] = [array[j], array[k]]
    console.log(array, k)
}
// let arr = [2, 7, 6, 5, 4, 4];
// placeAtCorrectPosition(arr)

//quick sort
/*
    [3,2,1,5,4]
    low=0 high=array.length-1

    1st place high at its correct position

    [3 ,2 ,1, 4, 5]
    now 4 is at correct position
    [3,2,1] [5] same apply for them

    first 1
    [1 2 3] [5]

    [2,3] again repeat

    time complexity :Best Case: O(n log n) every time pivot divides array in two equal half

                    Average Case: O(n log n)

                    Worst Case: O(n²) when pivot is always smallest

    space:0(1)
*/

function correctPlace(array, i, j) {
    let k = i
    while (i < j) {
        if (array[i] <= array[j]) {
            [array[i], array[k]] = [array[k], array[i]]
            k++;
        }
        i++;
    }
    [array[j], array[k]] = [array[k], array[j]]
    return k;
}

function quickSort(array, low, high) {
    if (low >= high) {
        return;
    }
    let pivot = correctPlace(array, low, high);
    mergeSort(array, low, pivot - 1);
    mergeSort(array, pivot + 1, high)
}
//  array=[4,2,3,1,6,1]
// mergeSort(array,0,array.length-1);
// console.log(array)


//insertion sort

/*
working 

let we have 4 5 1 and 2
and assume 2 pass have done already

now array[i]=1 we are here

j=5 to 4

compare 1 with 5 since 5>1 right shift [4,5,5,2]
compare 1 with 4 since 4>1 right shift [4,4,5,2]
now insert at 0 pos 1

[1,4,5,2]

next phase

array[i]=2 and j=i-1 i.e 5
5>2
[1,4,5,5]

4>2
[1,4,4,5]

now we are at 0pos ie 1 but 1<2 so here 
we have to insert at j+1 pos and break as we now that left side is already sorted

[1,2,4,5]

time complexity:0(n^2)

works on assuming array has two parts 1 is sorted(left) and othr one is unsorted(right)
take 1st element of unsorted and place it in its correct positon in sorted

*/
function insertionSort(array) {
    if (array.length == 1) {
        return array;
    }
    for (let i = 1; i < array.length; i++) {
        let key = array[i]
        let inserAt = 0
        for (let j = i - 1; j >= 0; j--) {
            if (array[j] > key) {
                array[j + 1] = array[j]
            } else {
                inserAt = j + 1
                break;
            }
        }
        array[inserAt] = key
    }
    return array
}
// console.log(insertionSort([2,3,1,4]))


array = [3, 1, 4, 6, 2]

//ascending
// array.sort();
// console.log(array)

//descending
// array.sort().reverse();
// console.log(array)

//ascending other way
// array.sort((a,b)=>{
//     return a-b
// })
// console.log(array)

//descending other way
// array.sort((a,b)=>{
//     return b-a
// })
// console.log(array)

let students = [{
    name: "Devanshu",
    age: 22
}, {
    name: "Raj",
    age: 21
},{
    name:"Abhi",
    age:25
}
]

//sort by age desc
// students.sort((a,b)=>{
//     return b.age-a.age
// })
// console.log(students)

//sort by age asc
// students.sort((a,b)=>{
//     return a.age-b.age
// })
// console.log(students)


const nestedArr = [
  [1, 3],
  [2, 1],
  [1, 2],
  [2, 4],
];
/* H.w: sort the above array according to first value and then according to second value 
output should be: 
[
  [1, 2],
  [1, 3],
  [2, 1],
  [2, 4],
]
*/
nestedArr.sort((a,b)=>{
   if(a[0]==b[0]){
        return a[1]-b[1]
   }
   return a[0]-b[0]
})
//console.log(nestedArr)

//localeCompare : string1.localeCompare(string2, locales, options)

//locales : "en", "fr", "de", "hi-IN"

//options : controls case-sensitivity, accent sensitivity, numeric sorting


 array=["apple","mango","banana"]
 //increasing
// array.sort((a,b)=>{
//     return a.localeCompare(b);
// })
// console.log(array)

//decreasing
// array.sort((a,b)=>{
//     return b.localeCompare(a)
// })
// console.log(array)

// array=["Apple","mango","Banana"]
// array.sort((a,b)=>{
//     return a.localeCompare(b,"en",{sensetivity:"base"})
// })
// console.log(array)

// let codes = ["A2", "A10", "A1"];
// codes.sort((a, b) => a.localeCompare(b, "en", { numeric: true }));
// console.log(codes);




/* EXTRA */
/* Cricket Team */
const team = {
  name: "Indian Cricket Team",
  /* this will store an object with two properties -> {id: 1, scores: [10, 34, 80]} */
  players: [{ id: 1, scores: [10, 34, 80] }],
  display: function () {
    /* display all details */
    return this.players.join(" ")
  },
  addPlayers: function (id) {
    /* assume always a new player is coming with unique id, this function should create 
    a new player with this id and empty scores array, then push this player to players array
    */
   let temp={
    id,
    scores:[]
   }
   this.players.push(temp)

    
  },
  addScore: function (id, score) {
    /* find the player with this id, and push this score to its score array */
    for(let ele of this.players){
        if(ele.id==id){
            ele.scores.push(score)
        }
    }
  },
  averageScore: function (id) {
    /* find the player with this id and calculate its avg score and return it*/
    let score=0
    let n=0;
    for(let ele of this.players){
        if(ele.id==id){
            n=ele.scores.length;
            for(let i=0;i<ele.scores.length;i++){
                score+=ele.scores[i]
            }
        }
    }
    return (score/n).toFixed(2);
  },
  teamAverage: function () {
    //optional
    /* calculate the average of scores of all players combined */
    let score=0;
    let n=0
    for(let ele of this.players){
        n+=ele.scores.length
        for(let j=0;j<ele.scores.length;j++){
            score+=ele.scores[j]
        }
    }
    return score/n
    
  },
};

team.addPlayers(2);
team.addPlayers(3);

team.addScore(1, 29);
team.addScore(3, 80);
team.addScore(2, 40);
team.addScore(2, 100);
team.addScore(2, 120);
team.addScore(3, 20);

team.display();
console.log("average score of player 1 - " + team.averageScore(1)); // => 153/4 = 38.25
console.log("average score of player 2 - " + team.averageScore(2)); // => 260/3 = 86.67

console.log("average score of team - " + team.teamAverage()); // => 513/9 = 57