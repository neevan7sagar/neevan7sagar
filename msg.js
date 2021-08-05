function fun(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username=="admin" && password=="pass")
    {
        document.getElementById("msg").innerHTML="<font color='#2d862d' size='8'>welcome</font>";
    }
    else{
        document.getElementById("msg").innerHTML="<font color='red' size='8'>invalid</font>";
    }
}
