

const display = document.getElementById("current-operand");

const numbers = document.querySelectorAll(".btn-number")

numbers.forEach(function(button){
    button.addEventListener("click",function(){
        display.textContent = button.dataset.number
    })
})
