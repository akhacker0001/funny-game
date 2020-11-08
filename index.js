
var array = ["0","you look like stupid","you look like rat","you look like rabbit","you look like Hen","you look like ghost","you look like cat","your luck is very poor","you look like donckey","you look like dog","you look like ant","you look like goat","you look like peocock"]




var buttons = document.querySelectorAll("button").length;
for (let i = 0; i <buttons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var randomNumber = Math.floor(Math.random()*12)+1;
        var img = "img/img"+ randomNumber + ".jpg"
        document.querySelector("img").setAttribute("src",img);
        document.querySelector("h1").innerHTML = array[randomNumber];
    })
    
}