window.onload = ()=>{
var btn = document.getElementById("lookup");
console.log(btn);
var request;

btn.addEventListener("click", function(ele)
{
    ele.preventDefault();
    const request = new XMLHttpRequest();
    var search = document.getElementById("country").value;
    console.log(search);
    var url = "http://localhost/info2180-lab5/world.php?country="+search;

    request.onreadystatechange = function ()
    {
        if (this.readyState === XMLHttpRequest.DONE)
        {
        if (request.status ===200)
        {
        var respnse = request.responseText;
        var holder = document.querySelector("#result").innerHTML = respnse;
        console.log(document.getElementById("result"));

        }


        }
    }
    request.open('Get', url);
    request.send();
})


}