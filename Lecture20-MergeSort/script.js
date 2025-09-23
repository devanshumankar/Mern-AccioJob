//given two sorted array A && B merge both of them


function mergeArray(array1,array2) {
    let i = 0;
    let j = 0;
    let ans = [];
    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            ans.push(array1[i]);
            i++;
        } else {
            ans.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        ans.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        ans.push(array2[j])
        j++;
    }
    return ans;
}
function mergeSort(array,low,high){
    if(low==high){
        return [array[low]];
    }
    let mid=Math.floor((low+high)/2);
    let temp1=mergeSort(array,low,mid);
    let temp2=mergeSort(array,mid+1,high);
    return mergeArray(temp1,temp2)
    
}

let array=[3,7,1,5,8,2,4]
//console.log(mergeSort(array,0,array.length-1))

//time -0(nlogn)

//space-0(n)

//insertion sort
//assume first element is a sorted array and remaining is unsorted
//pick one element from unsorted array ans inserted it into sorted arr such that sorted array remain sorted

//1 2 7 9 6
//1 2 6 7 9
function insertElement(array){
    for(let i=array.length-1;i>=0;i--){
        if(array[i]<array[i-1]){
            [array[i],array[i-1]]=[array[i-1],array[i]]
        }else{
            break
        }
    }
    return array
}
console.log(insertElement([1,2,7,9,6]))