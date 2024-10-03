
setInterval(()=>{

    let hours=document.querySelector("#hours")
    let minutes=document.querySelector("#minutes")
    let seconds=document.querySelector("#seconds")
    
    let currentHour=new Date().getHours();
    let currentMinute=new Date().getMinutes();
    let currentSecond=new Date().getSeconds();
    

     currentSecond<10 ? seconds.innerHTML=`0${currentSecond}` :seconds.innerHTML=currentSecond

     currentMinute<10 ? minutes.innerHTML=`0${currentMinute}` :minutes.innerHTML=currentMinute
     currentHour<10 ? hours.innerHTML=`0${currentHour}` :hours.innerHTML=currentHour



// currentHour>12 ? hours.innerHTML=`${currentHour}`
//      :hours.innerHeight=currentHour


if(currentHour>12){
    hours.innerHTML=currentHour-12
}else{
    hours.innerHTML=currentHour
}

    // if(currentSecond<10){
    //     seconds.innerHTML=`0${currentSecond}`
    // }else{
    // seconds.innerHTML=currentSecond
    // }
    // hours.innerHTML=currentHour;
    // minutes.innerHTML=currentMinute;
    // seconds.innerHTML=currentSecond;


},1000)




