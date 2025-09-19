//sorting -> arraanging data in specific manner


// function sorting(array){
//     let max=array[0];
//     let min=array[0];
//     for(let i=0;i<array.length;i++){
//         if(array[i]>max){
//             max=array[i]
//         }else if(array[i]<min){
//             min=array[i]
//         }
//     }
//     min=Math.abs(min)

//     let positiveArray=new Array(max+1).fill(0)
//     let negativeArray=new Array(min+1).fill(0)
    
//     for(let i=0;i<array.length;i++){
//         if(array[i]>0){
//             positiveArray[array[i]]=positiveArray[array[i]]+1
//         }else{
//             array[i]=Math.abs(array[i])
//             negativeArray[array[i]]=negativeArray[array[i]]+1
//         }
//     }
//     let ans=[];
//     for(let i=negativeArray.length-1;i>=0;i--){
//         while(negativeArray[i]!=0){
//             ans.push(-i);
//             negativeArray[i]--;
//         }
        
//     }
//     for(let i=0;i<positiveArray.length;i++){
//         while(positiveArray[i]!=0){
//             ans.push(i)
//             positiveArray[i]--
//         }
//     }
//     console.log(ans)
// }
// let array=[3,1,4,1,2,2,6,-4,-2,-1,-2];
// sorting(array)

//bubble sorting



function bubbleSort(array){
    for(let i=array.length-1;i>=0;i--){
        let swap=false
        for(let j=0;j<i;j++){
            if(array[j]>array[j+1]){
                swap=true
                let temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp
            }
        }
        if(swap==false){
            return array;
        }
    }
    return array
}

//console.log(bubbleSort([4,1,2,3]))

/*
    find the max by adjacent swaps and push it to the last element

    for each element compare the prev>curr if yes thn swap 

    automatically the larger element will come to the end

    working [4,1,2,3]

    pass 1: 4>1 swap(4,1) [1,4,2,3] 
            4>2 wap(4,2) [1,2,4,3]
            4>3 swap(4,3) [1,2,3,4]

    pass 2:
        1<2 no change
        2<3 no change

    pass 3: 2<3 no change

    we get:[1,2,3,4]

    time complexity:
    best case:0(n) when all the elements are sorted and no swap happens [1,2,3]

    worst case:0(n^2) when all elements are in descending order and we need them in ascending [3,2,1]

    average case: 0(n^2) elements are arranged randomly 

    inplace sorting:yes since we are not using any extra space

    stable sorting =yes

    [3a,3b,1a]=> pass 1: 3b>1a swap [3a,1a,3b]
                pass 2: 3a>1a swap [1a,3a,3b]

                since order of elemet is not changing so it is stabl sorting algorithm


*/

//selection sort

function selectionSort(array){
    for(let i=0;i<array.length;i++){
        let minIndex=i
        for(let j=i;j<array.length;j++){
            if(array[minIndex]>array[j]){
                minIndex=j
            }
        }
        [array[i],array[minIndex]]=[array[minIndex],array[i]]
    }
    console.log(array)
}

//selectionSort([3,4,1,2])
/*
    working:
    find the min element to the right of current element and swap it with the curr element
    
    the main goal is to find minimum and push it to the front

    example:[4,1,5,2]

    pass 1:curr=4 find min to right of 4 we get 1
            swap(4 and 1)
            [1,4,5,2]

    pass 2: curr=4
            find min to the right of 4 we get 2
            swap(4,2)
            [1,2,5,4]
    
    pass 3: curr=5
            find min to the right of 5 we get 4
            swap(5,4)
            [1,2,4,5]
    pass 4: no element is to the right of 5
        stop

    return array

    inplace sorting =yes
    since we are not using any extra space

    stable sorting=No

    example :[4a,4b,1a]
    pass 1:swap(4a,1a) :[1a,4b,4a]
    pass 3:no swap happens

    final array [1a,4b,4a]

    here order of 4 changes so this is not a stable soring algorithm

    time complexity:

    best case:0(n)== array is already sorted [1,2,3]

    worst case:0(n^2)== array is reverse sorted [3,2,1]
    
    average case :0(n^2)== random order [3,1,2]
                here both loop will still run to check wheter the array is sorted or not

    space complexity:0(1) no extra space is taken

    
*/