function add(num1,num2=10){
    //num2 = num2 || 5;
    
    // if(num2==null){
    //     num2 = 2;
    // }
    return num1+num2;
}

const total = add(15);
console.log(total);