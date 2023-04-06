//fizz buzz 


const FizzBuzz=(num)=>{
    if(num%3===0 && num%5===0){
        console.log(num+"=FizzBuzz");
    }
    else if(num%3===0){
        console.log(num+"=Fizz");
    }
    else if(num%5===0){
        console.log(num+"=Buzz");
    }
    else
    console.log("neither divisible by 3 nor 5");
};

FizzBuzz(45);