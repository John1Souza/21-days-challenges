let counter = 60;
let timeout;
let timer_on = 0;
let minuto = 4;

function timedCount() {
    // document.getElementById("contador__2").innerHTML = counter;
    
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
        counter = 60;
    }else{
        document.getElementById('contador__1').innerHTML = minuto;
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