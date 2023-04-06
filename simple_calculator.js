let result=0;
const calculator=(operator, num1, num2)=>{
    if(operator=='+'){
        result=num1+num2; 
        return result;
    }
    else if(operator=='-'){
        result=num1-num2;
        return result;
    }
    else if(operator=='*'){
        result=num1*num2;
        return result;
    }
    else if(operator=='/' && num2!==0){
        result=num1/num2;
        return result;
    }
    else return;
}

console.log(calculator('/',8,4));