let clock=document.querySelector(".clock");
let hr=document.querySelector("#hr");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");
let second=0;
let hour=0;
let minute=0;
let milisecond=0;
let btn=document.querySelector(".btn");
let start=document.querySelector(".start");
let stp=document.querySelector(".stop");
let restart=document.querySelector(".restart");
let mili=document.querySelector("#mili");
let timer=null;
let go="stop";
//start
start.addEventListener("click",()=>{
    if(timer!==null){
        clearInterval(timer);
    }
        stopWatch();
        stp.disabled=false;
        restart.disabled=false;
       
    
});
//stop
stp.addEventListener("click",()=>{
    go="stop";
   clearInterval(timer);
   start.disabled=false;
   restart.disabled=false;

});
//restart
restart.addEventListener("click",()=>{
    go="restart";
    clearInterval(timer);
    hr.innerText="00";
    sec.innerText="00";
    min.innerText="00";
    mili.innerText="00";
    hour=0;
    second=0;
    minute=0;
    milisecond=0;
    restart.disabled=true;
    start.disabled=false;
    stp.disabled=false;
})
//seconds
function stopWatch(){
 
        timer=setInterval(()=>{
            milisecond++;
            secon();
            minu();
            hou();
            if(milisecond<10){
                mili.innerText="0"+milisecond.toString();
            }else{
                mili.innerText=milisecond;
            }
            start.disabled=true;
        },10);
   
}
//seconds
function secon(){
    if(milisecond==100){
        milisecond=0;
        second++;
        if(second<10){
            sec.innerText="0"+second.toString();
        }else{
            sec.innerText=second;
        }
    }
}
//minutes
function minu(){
    if(second==60){
        second=0;
        minute++;
        console.log("minute",minute);
        if(minute<10){
            min.innerText="0"+minute.toString();
        }else{
            min.innerText=minute;
        }
    }
}
//hour
function hou(){
    if(minute==60){
        minute=0;
        hour++;
        console.log("hour",hour);
        if(hour<10){
            hr.innerText="0"+hour.toString();
        }else{
            hr.innerText=hour;
        }
    }
}
