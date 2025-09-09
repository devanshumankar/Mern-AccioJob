//map
// let map=new Map();

// map.set(1,"Devanshu");
// map.set(2,"Raj");
//console.log(map)

//get
//console.log(map.get(1));

//delete
// map.delete(1);
// console.log(map)

//all keys
// console.log(map.keys());

//all values
//console.log(map.values());

//size
// console.log(map.size)

//update
// map.set(2,"Rajesh");
// console.log(map)

//has
// console.log(map.has(1))

//set
//stores unique values

// let set=new Set();
// set.add(1);
// set.add(2);
// set.add(2);
// set.add(3);
// console.log(set)

//convert into array
// console.log([...set])

//has
//console.log(set.has(1));

//delete
// set.delete(1)
// console.log(set);

//square root of n problem

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
//squareRoot(64)

// let A=[1,3,6,7,9,11,15]
// let target=11;
// function indexOfElement(array,target){
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
//indexOfElement(A,target);

//first index of target element
// let array=[1,1,2,2,3,4,4,4];
// let target=4;
// function firstIndex(array,target){
//     let l=0;
//     let h=array.length-1;
//     let index=-1;
//     while(l<=h){
//         let mid=Math.floor(l+(h-l)/2);
//         if(array[mid]==target){
//             index=mid;
//             h=mid-1;
//         }else if(array[mid]>target){
//             h=mid-1;
//         }else{
//             l=mid+1;
//         }
//     }
//     return index;
// }
// console.log(firstIndex(array,target))

// upper bound(>x) and lower bound(>=x)

// let array=[1, 1, 2, 3, 4, 6, 7, 7, 11, 11];
// function upperbound(arr,target){
//     let low=0;
//     let high=arr.length-1;
//     let ind=arr.length;
//     while(low<=high){
//         let mid=Math.floor(low+(high-low)/2);
//         if(arr[mid]>target){
//             ind=mid;
//             high=mid-1;
//         }else{
//             low=mid+1;
//         }   
//     }
//     return ind;
// }

// function lowerbound(arr,target){
//     let low=0;
//     let high=arr.length-1;
//     let ind=arr.length;
//     while(low<=high){
//         let mid=Math.floor(low+(high-low)/2);
//         if(arr[mid]>=target){
//             ind=mid;
//             high=mid-1;
//         }else{
//             low=mid+1;
//         }   
//     }
//     return ind;
// }
// console.log("lowerBound(1):", lowerbound(array, 1)); // 0
// console.log("upperBound(1):", upperbound(array, 1)); // 2

//remove duplicates
// let array=[1,2,2,3,4];
// let set=new Set(array);
// console.log([...set])

// let arr1=[1,2,4,5,6],arr2=[2,5,6,3,1,3]
// let unionset=new Set([...arr1,...arr2]);
// console.log([...unionset])

//intersection

// let arr1=[1,2,4,3,3,3,5,6]
// let arr2=[2,5,6,3,1,3];

// let map=new Map();
// for(let i=0;i<arr1.length;i++){
//     let c=map.has(arr1[i])?map.get(arr1[i]):0;
//     map.set(arr1[i],c+1);
// }
// for(let i=0;i<arr2.length;i++){
//     if(map.has(arr2[i]) && map.get(arr2[i])>0){
//         console.log(arr2[i]);
//         map.set(arr2[i],map.get(arr2[i])-1);
//     }
// }


