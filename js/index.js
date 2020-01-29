//dom
const time=document.getElementById('time'),
greeting=document.getElementById('greeting'),
name=document.getElementById('name'),
focus=document.getElementById('focus');


function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    time.innerHTML=`${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime, 1000);
}
function addZero(num){
    if (num<10){
        num='0'+num;        
    }
    return num;
}

function setBg(){
    let today = new Date(),
    hour = today.getHours();

    if(hour > 6 && hour < 11){
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent='Good Morning';
    }else if(hour > 10 && hour <19){
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent='Good Afternoon';
    }else{
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent='Good Night';
        document.body.style.color='white';        
    }
}

function getName(){
    if(localStorage.getItem('name')===null){
        name.textContent = '[Enter Name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}
function setName(e){
    if(e.type==='keypress'){
        if(e.witch==13||e.keyCode==13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }

}
function getFocus(){
    if(localStorage.getItem('focus')===null){
        focus.textContent = '[Enter Focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}
function setFocus(e){
    if(e.type==='keypress'){
        if(e.witch==13||e.keyCode==13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }

}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//run
showTime();
setBg();
getName();
getFocus();