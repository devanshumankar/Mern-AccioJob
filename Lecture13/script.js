/*binary search

A.When to Apply

B.How To Apply

ans-A-> When search space is Sorted

ans B-> Answer will always come at mid otherwise look for ans in left or right;

Q.Find the square root of n in 0(logN)

l=0 h=N=36 


*/

//coding

// if right range is eliminated high=mid-1

// if left range is eliminated low=mid+1

//while loop since we did not know whether how many time we have to loop or do a task


//Find the square root of number in 0(logN) tc

// let n=4;
// function squareRoot(N){
//     let low=0;
//     let high=N;
//     while(low<=high){
//         let mid=Math.floor(low+(high-low)/2);
//         if(mid*mid==N){
//             return mid;
//         }else if(mid*mid>N){
//             high=mid-1;
//         }else{
//             low=mid+1;
//         }
//     }
//     return -1;
// }

// console.log(squareRoot(n));

// let A=[1,3,6,7,9,11,15]
// let target=11;
// function elementIndex(array,target){
//     let low=0;
//     let high=array.length-1;
//     while(low<=high){
//         let mid=Math.floor(low+(high-low)/2);
//         if(array[mid]==target){
//             return mid;
//         }else if(array[mid]>target){
//             high=mid-1;
//         }else{
//             low=mid+1;
//         }
//     }
//     return -1;
// }

// console.log(elementIndex(A,target))


let array=[1,2,6,6,11,11,11,15]
let t=11;
function firstIndexOfTarget(arr,target){
    let low=0;
    let high=arr.length-1;
    let ind=-1;
    while(low<=high ){
        let mid=Math.floor(low+(high-low)/2);
        if(arr[mid]==target){
            ind=mid;
            high=mid-1;
        }else if(arr[mid]>target){
            high=mid-1;
        }else{
            low=mid+1
        }
    }
    return ind;
}
//console.log(firstIndexOfTarget(array,t))

//lowerbound-first index of  element greater than or equal to target element
//upperbound-first index of element that is just greater than target element

//lowerbound

function lowerbound(arr,target){
    let low=0;
    let high=arr.length-1;
    let ind=arr.length;
    while(low<=high){
        let mid=Math.floor(low+(high-low)/2);
        if(arr[mid]>=target){
            ind=mid;
            high=mid-1;
        }else{
            low=mid+1;
        }   
    }
    return ind;
}

//upperbound-hw

/*
    data structures
*/
//set -> [1,1,2,4,1,2]->{1,2,4}

//map->stores data in key value form and key must be unique

// let set=new Set([1,2,4,4,5,6]);
// //console.log(set);

// //method to add element
// set.add(23);
// set.add(200);
// set.add(3);
//console.log(set);

//method to check if number is in set
// console.log(set.has(30));
// console.log(set.has(200));

//size 
// console.log(set.size);

// //delete
// console.log(set);
// set.delete(4);
// console.log(set);

//remove duplicates from array
// let array1=[2,3,4,1,0,1,2,3,4,5,10];
// let set=new Set(array1);
// console.log([...set]);

// let map=new Map([
//     ["name3","abc"],["name4","xyz"]
// ]);
// map.set("name1","sunny");
// map.set("name2","sultan")
// const mapArr=[...map];
// console.log(mapArr)

//checking if key is present or not
// console.log(map.has("name1"));

//getting value of specific key

//console.log(map.get("name1"))

//deleting a key in map

// console.log(map.delete("name4"));

//question find frequency of each element in arr;
// let arr3=[2,3,4,1,0,1,2,3,4,5,10];
// let map=new Map();
// for(let i=0;i<arr3.length;i++){
//     let count=map.has(arr3[i])?map.get(arr3[i]):0;
//     map.set(arr3[i],count+1);
// }
// console.log(map)


let arr4=[1,2,4,5,6],arr5=[2,5,6,3,1,3]
//union
// const unionArr=[...new Set([...arr4,...arr5])];
// console.log(unionArr);


