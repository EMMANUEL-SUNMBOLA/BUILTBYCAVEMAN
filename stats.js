document.addEventListener("DOMContentLoaded", ()=>{
  let outDiv = ['out1', 'out2', 'out3', 'out4', 'out5'];
  let inDiv = ['in1', 'in2', 'in3', 'in4', 'in5'];
  let percents = ['60', '80', '57', '83', '70'];
  let percentDiv = ['perc1', 'perc2', 'perc3', 'perc4', 'perc5'];
  for( let i = 0; i <  5; i++){
      let CircularBar = document.querySelector("." + inDiv[i]);

      // let PercentValue = document.querySelector(".percent");
      let PercentValue = document.querySelector('.' + percentDiv[i]);
      
      let InitialValue = 0;
      let finaleValue = percents[i];
      let speed = 30;
      
      let timer = setInterval(() => {
        InitialValue += 1;
      
        CircularBar.style.background = `conic-gradient(#16a6b6 ${InitialValue/100 * 360}deg, #fff 0deg)`;
        PercentValue.innerHTML = InitialValue;
      
        if(InitialValue >= finaleValue){
          clearInterval(timer);
        }
      }, speed)

    }


})