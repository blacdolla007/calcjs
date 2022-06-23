sign=prompt("enter sign:")

function calc(){
    if (sign=="+"){
        num1=prompt("Enter the first number:")
        num2=prompt("Enter the second number")
        result=Number(num1)+Number(num2)
        alert(result)
    } else if (sign=="-"){
        num1=prompt("Enter the first number:")
        num2=prompt("Enter the second number")
        result=num1-num2
        alert(result)
    } else if (sign=="*"){
        num1=prompt("Enter the first number:")
        num2=prompt("Enter the second number")
        result=num1*num2
        alert(result)
    } else if (sign=="/"){
        num1=prompt("Enter the first number:")
        num2=prompt("Enter the second number")
        result=num1/num2
        alert(result)
    } else{
        alert("Enter the required sign")
    }
}
calc()