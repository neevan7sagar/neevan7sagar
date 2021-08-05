function f1(){
    var num1 = parseInt(prompt("Enter the first number",0))
    var num2 = parseInt(prompt("Enter the number",0))
    choice = confirm("Do you to show result")
    if(choice==true)
    {
        var num3 = num1+num2;
        alert("Result is:"+num3);
    }
    else
    {
        alert("user does not wasnt tp display")

    }
   


}