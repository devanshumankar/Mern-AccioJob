//sum of first n natural numbers

// function printSum(n){
//     if(n<=0){
//         return 0;
//     }
//     return n+printSum(n-1);
// }

////console.log(printSum(5))

/*
working->
5+printSum(4)
5+4+printSum(3)
5+4+3+printSum(2)
5+4+3+2+printSum(1)
5+4+3+2+1+printSum(0)
5+4+3+2+1+0=>15
*/

//gcd

// function gcdRecursion(a,b){
//     if(a==0){
//         return b;
//     }
//     return gcdRecursion(b%a,a);
// }

/*
    working->gcd(4,16)
    gcd(2,4)
    gcd(0,2)
    a==0
    return 2
*/
//fibonacci sequence 
// 0 1 1 2 3 5 8

function fib(n){
    if(n<=2){
        return n-1;
    }
    return fib(n-1)+fib(n-2)
}

// console.log(fib(1))

/* working
    f(7)->f(6)+f(5)
        f(6)->f(5)+f(4)
        f(5)->f(4)+f(3)
        f(4)->f(3)+f(2)
        f(3)->f(2)(1)+f(1)(0)

        same for f(5)
        f(4)+f(3)
        f(4)->f(3)+f(2)
        f(3)->f(2)(1)+f(1)(0)
*/

