const readline = require('readline-sync');
let number = readline.questionInt("Enter a number: ");
let primeFactorArray = new Array();
for(i = 2;i <= number;i++)
{
    if((number % i == 0) && CheckingPrimeFactor(i) == true)
    primeFactorArray.push(i);
} 
 
console.log("Total prime factors : " +primeFactorArray.length);
console.log(primeFactorArray);
function CheckingPrimeFactor(n)
    {
        let factors = 0;
        for(i = 2;i < n ;i++)
        {
            if(n % i == 0)
                factors++;      
        }
        if(factors == 0)
        {
            return true;
        }
        return false;
    } 