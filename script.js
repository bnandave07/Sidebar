const ham = document.querySelector('.three-dots')
const cross = document.querySelector('.cross')
const container = document.querySelector('.container')


ham.addEventListener('click',function(){
    
    container.style.width = "50vw";
    // ham.style.display = "none"
  

})

cross.addEventListener('click',function(){
    container.style.width = "0vw";
    ham.style.display = ""
})