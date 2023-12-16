
function gcd(a , b){

    while(b !==0 ){
        temp = b
        b = a%b ;
        a = temp;

    }
    return a 

}

const num1 = 48;
const num2 = 18 ;

result = gcd (num1 , num2);

console.log(`${result}`)

