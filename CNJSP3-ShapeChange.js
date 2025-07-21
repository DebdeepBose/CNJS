const box = document.querySelector('.sq');

box.addEventListener('click', ()=>{
    box.classList.toggle("circle");
})

box.addEventListener('dblclick', ()=>{
    box.classList.toggle("oval");
})