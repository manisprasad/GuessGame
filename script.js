let randomInt;
setTimeout(() => {
    const min = 1;
    const max = 100;
    randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

    document.getElementsByClassName("command-line")[0].innerHTML = "I choosen a number from 1 to 100 . can you guess what i choose";
}, 2000);
let count= 10;
let exit = document.getElementsByClassName("exit")[0];
let home = document.getElementsByClassName("home")[0];
let feed = document.getElementsByClassName("text")[0];
let a = document.getElementsByClassName("submit-button")[0];
let res_btn = document.getElementsByClassName("restart-button")[0];
let cont = document.getElementsByClassName("container1")[0];
let g = document.getElementsByClassName("command-line")[0];
let hint = document.getElementsByClassName("hint")[0];
a.addEventListener("click",()=>{
    let b = document.getElementById("val").value;
    if(b.length<=0) return;
    console.log(randomInt);
    if(randomInt == undefined || isNaN(b)){
        g.innerHTML = "please enter the number";
    }
    else if(b < randomInt && count>=1){
        g.innerHTML = `No, Upper than ${b}`;
        hint.innerHTML = `chance left ${count}`;
        count--;
        
    }
    else if(b>randomInt && count>=1){
        g.innerHTML = `No, lower than ${b}`;
        hint.innerHTML = `chance left ${count}`;
        count--;
    }
    else{
        res_btn.style.display = "block";
        if((count == 0) && (b!= randomInt)){
            a.style.display ="none";
            res_btn.innerHTML = "Restart";
            g.innerHTML = "No, chance left";
            hint.style.color = "red"; 
            hint.innerHTML = "Oops, you're out of chance";
            count = 10;
        }
        else{
            res_btn.style.display = "block";
            a.style.display = "none";
            hint.style.color = 'green';
            hint.style.fontSize = '20px';
            hint.innerHTML = `You won,<br><p>You have taken ${count} steps</p>`;
            count = 10;
            g.innerHTML = `Woo, You did it.The number is  ${randomInt}`;
        }
    }
})
res_btn.addEventListener("click", ()=>{
    const min = 1;
    const max = 100;
    randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    hint.innerHTML = "";
    g.innerHTML = "Game restarting...";
    a.style.display = "block";
    res_btn.style.display = "none";
    setTimeout(() => {
        g.innerHTML = "okay then Guess, You have 10 chance";
    }, 1000);
})

home.addEventListener("click",()=>{
    hint.style.color = "red"
    hint.innerHTML = "you're ALready in home";
})
exit.addEventListener("click",()=>{
    location.href = "https://www.bing.com";
})
feed.addEventListener("click",()=>{
    hint.innerHTML = "Message on Whatsaap 😄";
})
