let reviews = ['Buffalo created an e-commerce site with the tools to make our business a success, with innovative ideas we feel that our site has unique elements that make us stand out from the crowd', "We're thrilled with the work Buffalo has done creating a website we are truly proud of. We love Jason's innovative design, and have benefitted hugely from Dan's strategic and technical knowledge and advice. In Mozzarella, Buffalo has created a superb and highly intuitive CMS system, meaning the back end works as well as the front looks.", "Reflecting the values of our organisation, Buffalo has transformed our web and mobile device presence, backed by an efficient and reliable team.", "Buffalo were a delight to work with. Not only are they insanely talented but they're great listeners meaning we got a site that we wanted but with their genius on top. ", "We would whole-heartedly recommend the brilliant team at Buffalo."];

//my initial plan
// const revD = document.getElementById('review');
// const radio = document.getElementsByClassName('radio');
// radio.addEventListener("click", (event)=>{
//     let revInd = event.getAttribute("rev");
//     revD.innerText = reviews[revInd];
// })
//didn't work 😢


//chat gpt code (-_-)
const revD = document.getElementById('review');
const radios = document.getElementsByClassName('radio');

// Convert the radio collection to an array for easier iteration
const radioArray = Array.from(radios);
document.addEventListener("DOMContentLoaded", ()=>{
  revD.innerText = reviews[0];
  radioArray.forEach((radio) => {
    radio.addEventListener("click", (event) => {
      let revInd = event.currentTarget.getAttribute("rev");
      revD.innerText = reviews[revInd - 1]; // Adjust index since array is 0-based
    });
  });
})
