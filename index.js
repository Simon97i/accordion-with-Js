const accordionBtn = document.querySelectorAll('.accordion-btn');
const audio = document.querySelector('audio');


accordionBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        audio.pause();
        const content= document.querySelector('.accordion-btn.active');
        if(content && content !== btn){
            content.classList.remove('active');
            content.nextElementSibling.style.maxHeight = 0;
            audio.pause();
        }
        btn.classList.toggle('active');
        if(btn.classList.contains('active')){
           btn.nextElementSibling.style.maxHeight = btn.nextElementSibling.scrollHeight + 'px'
           audio.play();
        }else{
            btn.nextElementSibling.style.maxHeight = 0;
        }
    })
})