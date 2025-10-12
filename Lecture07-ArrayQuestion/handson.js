//print sum of each subarray
function allSubarraySum(array){
    for(let i=0;i<array.length;i++){
        let sum=0;
        for(let j=i;j<array.length;j++){
            sum+=array[j];
            console.log(sum);
        }
    }
}
let array=[1,2,3,4]
//allSubarraySum(array)

function maxSubarraySum(array){
    let max=-Infinity;
    let sum=0;
    let start=0;
    let end=0;
    let ansStart=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
        if(sum>max){
            max=sum
            ansStart=start;
            end=i;
        }
        if(sum<0){
            sum=0;
            start=i+1;
        }
    }
    console.log(max);
}
//maxSubarraySum(array)

//count subarray with sum k
const arr2 = [1, 2, -3, 0, 1, -1, 1];
let k=0;
function countSubarrayWithSumK(array,k){
    let map=new Map();
    let count=0;
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum+=array[i];
        if(sum==k){
            count++;
        }
        if(map.has(sum-k)){
            count+=map.get(sum-k);
        }

        let cnt=map.has(sum)?map.get(sum):0;
        map.set(sum,cnt+1);
    }
    console.log(count);
}
// countSubarrayWithSumK(arr2,0);

//print all subarray of size k;
function subarrrayWithSizeK(array,k){
    let result=[];
    for(let i=0;i<array.length-k;i++){
        result.push(array.slice(i,i+k));
    }
    console.log(result);
}
// subarrrayWithSizeK([1, 2, -3, 0, 1, -1, 1],3)
// array questions