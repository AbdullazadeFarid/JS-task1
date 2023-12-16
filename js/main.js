
//111111111111111111111111111111111111


var btn = document.querySelector("#animate")

var input = document.querySelector(".inp")
var number = document.querySelector(".number")


btn.addEventListener("click" , function(b){ //
    b.preventDefault();    //preventdefault ekranda refresh getmesin yeni yazdigimizi gorsetsin
    number.textContent = input.value  // ekrandaki reqem unputa daxil etdiyimiz edede beraber olsun
})

//111111111111111111111111111111111111111




