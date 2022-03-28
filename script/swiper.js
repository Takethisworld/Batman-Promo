const videos = document.querySelectorAll('video');
const audio = new Audio('audio/waterTower.mp3');
const mute = document.querySelector('.mute__checkbox');
const pagination = document.querySelector('.pagination');
const paginationArrow = document.querySelector('.pagination__arrow');


try{
    const checkMute=()=>{
        if(mute.checked){
            audio.play().catch(()=>{
                mute.checked=false;
            });
        }else{
            audio.pause()
        }
    };
    if(mute){
        setTimeout(checkMute,2000)
    }

const sliderThumbs = new Swiper('.slider-thumbs',{
    loop:true,
    spaceBetween:20,
    slidesPerView:3,
    centeredSlides:true,
    loopedSlides:6
});

sliderThumbs.on('click',(swiper)=>{
    swiper.slideTo(swiper.clickedIndex)
})
const sliderMain = new Swiper('.slider-main',{
    loop:true,
    spaceBetween:10,
    loopedSlides:6
})

sliderMain.on('slideChange',()=>{
    for(let i=0;i<videos.length; i+=1){
        videos[i].pause();
    }
} )

paginationArrow.addEventListener('click',()=>{
    pagination.classList.toggle('pagination_active');
})

sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;
}catch{
    console.log('That slide doesnt work')
}