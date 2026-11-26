// learning something new
// we can access the text using button.innertext and also store the info
// instead of giving id to every number , we can just assign the class and then access the text and then us it



let buttons = document.querySelectorAll(".number")
console.log(buttons)

let display = document.getElementById("current")
display.innerText="0"

let allClear = document.getElementById("clear")

let operators = document.querySelectorAll(".operator")

operators.forEach(function(oper){

    oper.addEventListener("click", function(){
        display.innerText = display.innerText + oper.innerText
    })
})

buttons.forEach(function(btn){
    console.log(btn)

    btn.addEventListener("click", function(){

        if (display.innerText==0){
            display.innerText =  btn.innerText
        }
        else{

            display.innerText = display.innerText + btn.innerText


        }
        // display.innerText = btn.innerText
    })
})

allClear.addEventListener("click", function(){
    display.innerText="0"
})


let equal = document.getElementById("equals")

equal.addEventListener("click", function(){

    let result = eval(display.innerText)
    display.innerText = result
})













