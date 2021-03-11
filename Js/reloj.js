export function ClockHour(clock, btnPlay, btnStop) {
  let clockTempo;
  document.querySelector(btnStop).disabled = true;
  document.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let hora = new Date().toLocaleTimeString();
        document.querySelector(clock).innerHTML = `<h3>${hora}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      document.querySelector(clock).innerHTML = null;
      document.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarm(alarm,btnPlay,btnStop){
  let alarmaTempo;
  document.querySelector(btnStop).disabled = true;
  let $alarm = document.createElement("audio");
  $alarm.src = alarm;
    document.addEventListener("click",(e)=>{
      if(e.target.matches(btnPlay)){
        alarmaTempo = setTimeout(() => {
          $alarm.play();
        }, 2000);
      
      e.target.disabled =true;
    }
      if(e.target.matches(btnStop)){
        clearTimeout(alarmaTempo);
        $alarm.pause();
        $alarm.currentTime=0;
        document.querySelector(btnPlay).disabled = false;
      }
    })
}
