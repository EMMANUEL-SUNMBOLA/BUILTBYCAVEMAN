document.addEventListener("DOMContentLoaded", ()=>{

    let CircularBar = document.querySelector(".inner-circle");
    let PercentValue = document.querySelector(".percent");
    
    let InitialValue = 0;
    let finaleValue = 60;
    let speed = 10;
    
    let timer = setInterval(() => {
      InitialValue += 1;
    
      CircularBar.style.background = `conic-gradient(#16a6b6 ${InitialValue/100 * 360}deg, #fff 0deg)`;
      PercentValue.innerHTML = InitialValue+"%";
    
      if(InitialValue >= finaleValue){
        clearInterval(timer);
      }
    }, speed)


})