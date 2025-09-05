function primeNumberInRange(a,b){
    let str="";
    for(let i=a;i<=b;i++){
        if(isPrime(i)){
            str+=i+" ";
        }
    }
    console.log(str.trim());
}
function isPrime(n){
    if(n==1){
        return false;
    }
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
// primeNumberInRange(2,100);

function armstrongNumberInRange(a,b){
    let str=""
    for(let i=a;i<=b;i++){
        if(isArmstrong(i)){
            str+=i+" ";
        }
    }
    console.log(str.trim());
}
function isArmstrong(num){
    let original=num;
    let n=String(num).length;
    let sum=0;
    while(num>0){
        let digit=num%10;
        sum+=digit**n;
        num=Math.floor(num/10);
    }
    return original==sum;
}
// armstrongNumberInRange(1,200)

function angleTriangle(side1,side2,side3){
    let maximumSide=Math.max(side1,side2,side3);
    switch(true){
        case 2*(maximumSide**2)<side1**2+side2**2+side3**2:
            console.log("Acute")
            break;
        case 2*(maximumSide**2)<side1**2+side2**2+side3**2:
            console.log("Obtuse")
            break;
        default:
            console.log("Right");
            break;
    }
}
// angleTriangle(3,3,3)

function gradeClassification(marks){
    switch(true){
        case marks>90:
            console.log("Excellent");
            break;
        case marks>80 && marks<=90:
            console.log("Good");
            break;
        case marks>70 && marks<=80:
            console.log("Fair");
            break;
        case marks>60 && marks<=70:
            console.log("Meets Expectations")
            break;
        default:
            console.log("Below Expectation");
            break;
    }
}
//gradeClassification(95)