//sorting-> Data is arranged in specific manner such that we can take  decision about data

// let array=[3,2,1]
// for(let i=0;i<array.length;i++){
//     let index=i;
//     for(let j=i;j<array.length;j++){
//         if(array[index]>array[j]){
//             let temp=array[j];
//             array[j]=array[index]
//             array[index]=temp
//         }
//     }
// }
// console.log(array)

// for(let i=0;i<array.length;i++){
//     let index=i;
//     for(let j=i;j<array.length;j++){
//         if(array[index]>array[j]){
//             index=j
//         }
//     }
//     let temp=array[i];
//     array[i]=array[index];
//     array[index]=temp
// }
// console.log(array)

// let array=[3,1,2,4];
// function merge(array,low,high){
//     if(low==high){
//         return
//     }
//     let mid=Math.floor((low+high)/2);
//     merge(array,low,mid);
//     merge(array,mid+1,high);
//     merging(array,low,mid,high);
// }
// function merging(array,low,mid,high){
//     let i=low;
//     let j=mid+1;
//     let temp=[]
//     while(i<=mid && j<=high){
//         if(array[i]<array[j]){
//             temp.push(array[i]);
//             i++;
//         }else{
//             temp.push(array[j]);
//             j++;
//         }
//     }
//     while(i<=mid){
//         temp.push(array[i]);
//         i++;
//     }
//     while(j<=high){
//         temp.push(array[j]);
//         j++
//     }
//     for(let i=0;i<temp.length;i++){
//         array[i+low]=temp[i]
//     }
    
// }
// merge(array,0,array.length-1)
// console.log(array)


//bubble sort-0(n**2) s-0(1)

//best case -0(n) all are sorted

//worst case -0(n**2) all elements are in decreasing order and we want to do it in increasing


// let array=[4,0,5,1,3,2,9];
// for(let i=array.length-1;i>0;i--){
//        let swaps=false;
//     for(let j=0;j<i;j++){
//         if(array[j]>array[j+1]){
            //swaps=true
//             let temp=array[j];
//             array[j]=array[j+1];
//             array[j+1]=temp
//         }
//     }
        // if(swaps==false){
        //     return;
        // }
// }
// console.log(array)

//stable sorting-[2A,1A,2B,1B,2C,3A]
//[1A,1B,2A,2B,2C,3A]
//dry run

//inplace sorting->without using any extra space

/*summary of bubble sort

    swap adj ele of curr>next ele in single pass

    after first pass the greatest element will be at the last position

    after each pass one element will be placed at its current sorted position

    tc-best 0(n) worst-0(n^2)
    sc-0(1)

    inplace sorting=true not using any extra space

    stable sorting=yes
    
*/