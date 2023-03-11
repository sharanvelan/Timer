

let i=0
function start()
{
    setInterval(function() {
     document.getElementById("time").innerHTML=""+i 
    i++ 
    }, 1000);
}
