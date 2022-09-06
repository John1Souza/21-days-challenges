let counter = 59;
let timeout;
let timer_on = 0;
let minuto = 10;


function timedCount() {
    // document.getElementById("contador__2").innerHTML = counter;
    document.getElementById('contador__1').innerHTML = `${minuto-1}`
    
    if(counter < 10){
        document.getElementById("contador__2").innerHTML = `0${counter}`
    }else{
        document.getElementById("contador__2").innerHTML = `${counter}`
    }
      
    if(counter == 0){
        if(minuto < 10){
            document.getElementById('contador__1').innerHTML = `0${minuto-1}`;
        }else{
            document.getElementById('contador__1').innerHTML = `${minuto-1}`
        } 
        counter = 59;
    }
    
           
  
    counter--;
    timeout = setTimeout(timedCount, 1000);
}

function startCount() {
    if (!timer_on) {
        timer_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(timeout);
    timer_on = 0;
}