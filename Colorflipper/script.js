const colorList = ['black','white','red','green','yellow','blue','chocolate','darkviolet','hotpink']

let btn = document.getElementById("btn").addEventListener("click",changeColor);
function changeColor(){
    var randomColor  = colorList[Math.floor(Math.random()*colorList.length)];
    document.querySelector("h2").innerText = "Background Color: "+ randomColor;
    document.querySelector("main").style.backgroundColor = randomColor;
}
    