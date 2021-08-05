function f1(){

    var a = document.myscreen.num1.value;
    var b = document.myscreen.num2.value; 
    var y= document.getElementById(cal);

    switch (y) {
        case '0':
            c = a+b;
            break;

        case '1':
            c = a-b;
            break;

        case '2':
            c = a*b;
            break;

        case '3':
            c = a/b;
            break;

        default:
            c = "Don't really know..";
    }
}
