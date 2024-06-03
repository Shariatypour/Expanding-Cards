const sliderItems=document.querySelectorAll('section div')
const removeActiveClass=()=>{
    for( let i=0;i<sliderItems.length;i++){
        sliderItems[i].classList.remove('active')
    }

};

for( let i=0;i<sliderItems.length;i++){
    sliderItems[i].addEventListener('click',()=>{
        removeActiveClass()
        sliderItems[i].classList.add('active')
    })

};