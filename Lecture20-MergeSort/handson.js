//merge sort
/*
    it is like divide the array the sort them and merge them 

                [3,5,2,8,6,2]                       o/p=[2,2,3,5,6,8]
                                                    ^
                                                    |
        [3,5,2]             [8,6,2]                merging [2,2,3,5,6,8]
                                                        ^
    [3]     [5,2]       [8]     [6,2]               merging [2,3,5]  [2,6,8]

                                                                        ^
         [5]  [2]               [6] [2]  from here merging will start  [2,5]  [2,6]


    time complexity:0(nlogn)

    space complexity:0(n)
 */

function mergeSort(array,low,high){
    let mid=Math.floor((low+high)/2)
    if(low==high){
        return [array[low]]
    }
    let left=mergeSort(array,low,mid)
    let right=mergeSort(array,mid+1,high)
    return mergeArray(left,right)
}
function mergeArray(array1,array2){
    let i=0;
    let j=0;
    let ans=[]
    while(i<array1.length && j<array2.length){
        if(array1[i]<array2[j]){
            ans.push(array1[i])
            i++;
        }else{
            ans.push(array2[j]);
            j++
        }
    }
    while(i<array1.length){
        ans.push(array1[i]);
        i++;
    }
    while(j<array2.length){
        ans.push(array2[j]);
        j++;
    }
    return ans
}
// let array=[3,4,2,6,1,8,5]
// console.log(mergeSort(array,0,array.length-1))


//insert last element to its correct position

//1 2 3 6 4
//o/p->1 2 3 4 6
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
// console.log(insertElement([1,2,7,9,6]))

//insertion sort
/*
    [3,2,6,1]
    [3][2,6,1] two array sorted and unsorted
    place ele from unsorted array in sorted such that 1st array always remains sorted

    [2,3][6,1]
    [2,3,6][1]
    [1,2,3,6]
*/
function insertionSort(array){
    if(array.length==1){
        return array
    }
    let temp=[array[0]];
    for(let i=1;i<array.length;i++){
        temp.push(array[i]);
        insertElement(temp)
    }
    return temp
}
console.log(insertionSort([3,2,6,1]))