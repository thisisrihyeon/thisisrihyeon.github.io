const page = document.querySelector('section').length;
let pageCount = 0;
let scrollHeight = 0;
const ctBtn = document.querySelector('.button');
const popUp = document.querySelector('#Email-popup');
const xBtn = document.querySelector('.xbtn');
const sendBtn = document.querySelector('.btn-send')

const handlerWheel = (event) => {
    event.preventDefault();
    if(event.deltaY < 0){
        if(pageCount <=0) return;
        pageCount--;
    }
    if(event.deltaY > 0){
        if(pageCount >= page-1) return;
        pageCount++;
    }
    scrollHeight = pageCount * window.innerHeight;
    window.scrollTo({left:0, top:scrollHeight, behavior:"smooth"});
}

const handlerClick = () => {    
    popUp.style.display = "block";
}

const handlerXClick = () => {
    popUp.style.display="none";
    window.location.reload(true);
}


window.addEventListener('wheel', handlerWheel,{passive:false});
ctBtn.addEventListener('click', handlerClick);
xBtn.addEventListener('click', handlerXClick);
