const wakeUpHoursDiv = document.getElementById("wakeup-hours-div");
function calcWakeUpTimes(){
    wakeUpHoursDiv.innerHTML = "";
    const fallAsleepTime = new Date();
    fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);
    
    //const wakeUpTimesDiv = document.getElementById("wakeup-hours-div");
    //wakeUpTimesDiv.innerHTML = "";
    const wakeUpTime = new Date(fallAsleepTime);
    //const wakeUpTimes = [];
    for (let i = 1; i <= 6; i++) {
      wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
      const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {
        timeStyle: "short",
      });
      const cycleDiv = document.createElement('div');
      cycleDiv.classList.add("cycle");
      cycleDiv.setAttribute("id", `cycle-${i}`);
      cycleDiv.textContent = wakeUpTimeString;
      wakeUpHoursDiv.appendChild(cycleDiv);
      //wakeUpTimes.push(wakeUpTimeString);

    }
    
    //console.log("Wake-up times:", wakeUpTimes.join(", "));
}
const calcBtn = document.getElementById("calc-btn");
calcBtn.onclick = calcWakeUpTimes;//no parenthesis not calling, but assigning
