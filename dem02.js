/*function f1()
{
 var site = prompt("Enter site url:")
 var w = window.open(site,"_blank","width")
 window.setTimeout(function(){window.close(),5000});
}*/
function f1()
{
    var x = parseInt(document.getElementById("t1").value)
    var y = parseInt(document.getElementById("t2").value)
    var z = 0
    if(x>y)
    {
        z = x-y;
    }
    else{
        z = y-x;
    }
    document.getElementById("t3").value = z;

}