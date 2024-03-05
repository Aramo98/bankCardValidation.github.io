

let cardHolderInput = document.querySelector(".cardHolder")
let cardNumberInput = document.querySelector(".cardNumber")
let datePartOne = document.querySelector(".datePartOne")
let datePartTwo = document.querySelector(".datePartTwo")
let threeNumber = document.querySelector(".threeNumber")

let number = document.querySelector(".number");
let holderName = document.querySelector("h5");
let spanDateOne = document.querySelector(".dateOne")
let spanDateTwo = document.querySelector(".dateTwo")
let threeNum = document.querySelector(".threeNum")


holderName.innerHTML = "Name Surname"
number.innerHTML = "1234 5678 9012 3456";
spanDateOne.innerHTML = "MM"
spanDateTwo.innerHTML = "YY"
threeNum.innerHTML = "123"



threeNumber.addEventListener("keyup",()=>{
    if (threeNumber.value.length >= 3) {
        threeNumber.setAttribute("disabled",true) 
    }else{
        threeNumber.removeAttribute("disabled") 
    }
})


let form = document.querySelector("form");
form .addEventListener("submit",Validation)

function Validation(evt){
    evt.preventDefault()
if (cardHolderInput.value ==="" || cardNumberInput.value ==="" || datePartOne.value === ""|| datePartTwo.value === "" || threeNumber.value === "") {
    alert("ohoo")
    holderName.innerHTML = "Name Surname"
    number.innerHTML = "1234 5678 9012 3456";
    spanDateOne.innerHTML = "MM"
    spanDateTwo.innerHTML = "YY"
    threeNum.innerHTML = "123"
    return false;
}


else{
    holderName.innerHTML =  cardHolderInput.value;
    number.innerHTML = cardNumberInput.value;
    spanDateOne.innerHTML = datePartOne.value
    spanDateTwo.innerHTML = datePartTwo.value
    threeNum.innerHTML = threeNumber.value

    let modal = document.createElement("div");
    modal.className ="modal"
    let h2 = document.createElement("h2");
    h2.innerHTML = `Thank You <br> ${cardHolderInput.value}`
    modal.appendChild(h2)
    form.appendChild(modal)
    setTimeout(()=>{
    modal.remove()
    },2000)
    return true
}

}


