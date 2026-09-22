const input = document.getElementById("input");
const check = document.getElementById("check");
const play_again = document.getElementById("play_again");
const status_text = document.getElementById("status_text");


let  rand_number = Math.floor(Math.random() * 100) + 1;
let tries = 7;
check.addEventListener("click" , () => {
    let i =input.value;
    if(i == rand_number){
        status_text.innerText = "Winner"
    }else if (i > rand_number){
        tries--;
        status_text.innerText = `Guess a lawer Number,you have ${tries} tries`
    }else{
        tries--;
        status_text.innerText = `Guess a Higher Number,you have ${tries} tries`
    }
    if(tries == 0){
        status_text.innerText = "Game over💔"
        check.disabled = true;
    }
})