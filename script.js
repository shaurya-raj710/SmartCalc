

const display = document.getElementById("current-operand");

const numbers = document.querySelectorAll(".btn-number")

numbers.forEach(function(button){
    button.addEventListener("click",function(){

        if (display.textContent==="0"){
            display.textContent = button.dataset.number
        }
        else{
            display.textContent = display.textContent + button.dataset.number
        }
        
    })
})

const decimal = document.querySelector('[data-action="decimal"]')

decimal.addEventListener("click", function(){
    if(!display.textContent.includes(".")){
        display.textContent =  display.textContent + "."
    }
})