// let count=0;
function array11(array,index){
    
    if(index==array.length){
        return count;
    }
    if(array[index]==11){
        count++;
    }
    return array11(array,index+1);
}
let array=[1, 3, 11, 11, 2];
// console.log(array11(array,0));

function printArrayRecursively(array,i,n){
    if(i==n){
        return "";
    }
    return array[i]+" "+printArrayRecursively(array,i+1,n);
}
// console.log(printArrayRecursively(array,0,array.length))

function printReverseArrayRecursive(arr, i, n){
    if(n==0){
        return "";
    }
    return arr[n-1]+" "+printReverseArrayRecursive(arr,i,n-1);
}
// console.log(printReverseArrayRecursive(array,0,array.length))

function lastIndex(array, element, index){
    if(index<0){
        return -1;
    }
    if(array[index]==element){
        return index;
    }
    return lastIndex(array,element,index-1)
}
// console.log(lastIndex(array,11,array.length-1))
// let maxi=array[0];
function maxElement(array,i){
    if(i==array.length){
        return maxi;
    }
    maxi=Math.max(maxi,array[i]);
    return maxElement(array,i+1);
}
// console.log(maxElement(array,0))

function isPalindromic(array, begin, end) {
    if(begin>=end){
        return true;
    }
    if(array[begin]!=array[end]){
        return false
    }
    return isPalindromic(array,begin+1,end-1);
}
// console.log(isPalindromic([1,2,1,3],0,[1,2,1,3].length-1));

