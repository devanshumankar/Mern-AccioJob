// sum of first n natural numbers

function printSum(n){
    if(n<=0){
        return 0;
    }
    return n+printSum(n-1);
}
//console.log(printSum(5))
//tc-0(n) //sc->0(1);


//function that calculate gcd of two number

/* 
    sabse bada number jo dono ko divide karta hai
    gcd(8,32)=8
    gcd(9,15)=3
    gcd(10,25)=5
    gcd(7,15)=1
    gcd(0,20)=20 note gcd(0,x)=>x
    gcd(1,20)=1

*/

//while loop gcd
// function gcd(a,b){
//
//     while(a!=0){
//         let temp=a;
//         a=b%a;
//         b=temp;
//     }
//     return b
//     
// }
// console.log(gcd(7,15));
function gcdRecursion(a,b){
    if(a==0){
        return b;
    }
    return gcdRecursion(b%a,a);
}

// note -gcd(25,15)->
// gcd(15%25,25) -> gcd(15,25);


// console.log(gcdRecursion(3,0));

//gcd of more than 2 numbers

//gcd(a,b,c)=gcd((a,b),c)=gcd(a,(b,c))=gcd(b,gcd(a,c));

//gcd of array

// let array=[27,12,18,24,30];
// let gcdArray=0;
// for(let i=0;i<array.length;i++){
//     gcdArray=gcdRecursion(gcdArray,array[i]);
// }
// console.log(gcdArray)

//fibonacci sequence 
/*
    f(7)->f(6)+f(5)
        f(6)->f(5)+f(4)
        f(5)->f(4)+f(3)
        f(4)->f(3)+f(2)
        f(3)->f(2)(1)+f(1)(0)

        same for f(5)
        f(4)+f(3)
        f(4)->f(3)+f(2)
        f(3)->f(2)(1)+f(1)(0)

        13

        tc-0(2^n);

        here 2 is no of function calls and n is operations required to make n to zero

*/

//note time space should be less than 10**7 or 10**8

//Hw -Fibonacci Number using recursion

//binary exponential
 
//a^b
//using recursion
// function power(a,b){
//     if(b==0){
//         return 1;
//     }
//     return a*power(a,b-1);
// }
// console.log(power(2,10))

//using loop
// function power1(a,b){
//     let result=1;
//     for(let i=0;i<b;i++){
//         result*=a;
//     }
//     console.log(result);
// }
// power1(2,10)

function exponentialPower(a,b){
    if(b==0){
        return 1;
    }
    if(b==1){
        return a;
    }

    let result=exponentialPower(a,Math.floor(b/2));

    if(b%2==0){
        return result*result;
    }else{
        return a*result*result;
    }
    // result*result*a**(n%2);
}

//console.log(exponentialPower(5,4));



