document.querySelectorAll(".btn")[2].addEventListener("click",increase);
var totalCount = document.getElementById("value")
var count = 0
totalCount.innerHTML = count

function increase(){
    count++;
    totalCount.style.color = 'green';
    totalCount.innerHTML = count;
    if(count < 0){
        totalCount.style.color = 'red';
    }
    else if (count === 0){
        totalCount.style.color = 'black';
    }
} 

document.querySelectorAll(".btn")[1].addEventListener("click",reset);
function reset(){
    totalCount.style.color = 'black';
    count = 0
    totalCount.innerHTML = count
}

document.querySelectorAll(".btn")[0].addEventListener("click",decrease);
function decrease(){
    count--
    totalCount.innerHTML = count
    if(count < 0){
    totalCount.style.color = 'red';
    }
    else if (count === 0){
        totalCount.style.color = 'black';
    }
}