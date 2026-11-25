

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

const deleteBtn = document.querySelector('[data-action = "delete"]')

deleteBtn.addEventListener("click", function(){

    if (display.textContent.length>1){

        display.textContent = display.textContent.slice(0,-1)


    }
    else{
        display.textContent = "0"
    }
})


const previousDisplay = document.getElementById("previous-operand");

const clear = document.querySelector('[data-action = "clear"]')

clear.addEventListener("click", function(){
    display.textContent = "0"
    previousDisplay.textContent=""
})