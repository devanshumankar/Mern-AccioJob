//let array=[1,2,7,9,6];
function insertInSortedArray(arr) {
    let n = arr.length;
    let lastElement = arr[arr.length - 1];
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > lastElement) {
            arr[i + 1] = arr[i]
        } else {
            arr[i + 1] = lastElement
            return
        }
    }
    return arr;
}

function insertionSort(array) {
    let ind = 0;
    let n = array.length;
    for (let i = 1; i < n; i++) {
        let firstElementIndex = array[i];
        let indexToInsert = 0;
        for (let j = ind; j >= 0; j--) {
            if (array[j] > firstElementIndex) {
                array[j + 1] = array[j]
            } else {
                indexToInsert = j + 1;
                break;
            }
        }
        array[indexToInsert] = firstElementIndex;
        ind++
    }
    return array
}
//console.log(insertionSort([3,2,1]))

//[2,1,7,5,4]
//[1,2,4,7,5]

let array = [7, 5, 2, 1, 4];


// let greater=[];
// let smaller=[];
// for(let i=0;i<array.length-1;i++){
//     if(array[i]>array[array.length-1]){
//         greater.push(array[i])
//     }else{
//         smaller.push(array[i])
//     }
// }
// let ans=[]
// for(let i=smaller.length-1;i>=0;i--){
//     ans.push(smaller[i])
// }
// ans.push(array[array.length-1]);
// for(let i=0;i<greater.length;i++){
//     ans.push(greater[i])
// }
//console.log(ans)


array = [3,1,6,2,8,7,4]
function placeCorrect(array,i,j) {
    let k = i;
    while (i < j) {
        if (array[i] <= array[j]) {
            [array[k], array[i]] = [array[i], array[k]];
            k++;
        }
        i++
    }
    [array[k], array[j]] = [array[j], array[k]];
    return k
}


function quickSort(array, low, high) {
    if(low>=high){
        return 
    }
    let i=placeCorrect(array,low,high)
    quickSort(array,low,i-1);
    quickSort(array,i+1,high)
}
//quickSort(array,0,array.length-1)
//console.log(array)

//sort() method 
let arr=[3,1,6,2,8,7,4]
arr.sort((a,b)=>a-b)
console.log(arr)
