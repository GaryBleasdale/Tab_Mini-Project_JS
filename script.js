let initPrompt = document.body.querySelector('.initial-prompt');
let containerOuter = document.body.querySelector('.container-outer');
let button = document.body.querySelectorAll("button");
let tab = document.body.querySelectorAll(".tab")

initPrompt.addEventListener('click', function(){
  initPrompt.style.display = 'none';
  containerOuter.style.display ='flex';
  tab[0].style.display='block';
})


button.forEach(function(item, i){
  button[i].addEventListener("click", function(){
   for (ele of tab){
     ele.style.display ='none'
   } 
   for (but of button){
    but.classList.remove('active')
  }  
   tab[i].style.display = "flex";
   button[i].classList.add('active')
   
  })
})