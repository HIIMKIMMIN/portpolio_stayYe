window.onload = function() {
    const $main_title = document.querySelector('.main_visual_wrap .title');
    
    // IntersectionObserver 설정
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $main_title.style.top = '50%'; // 요소가 보일 때 위치 변경
                $main_title.style.opacity = 1;  // 요소가 보일 때 불투명도 변경
            }
        });
    }, { threshold: 0.1 }); // 요소가 10% 보일 때 콜백 호출

    // 옵저버에 요소 등록
    observer.observe($main_title);
};
//main_title



const gnb = document.querySelector('.gnb');
const logo = document.querySelector('.logo');
const mv = document.querySelector('.main_visual');
let gnbHeight = gnb.offsetHeight;
let mvHeight = mv.offsetHeight;
const btn = document.querySelector('.btn_menu')



// moblie
function moblieMenu(){
    btn.addEventListener('click', function(){
        if(!gnb.classList.contains('on')){
            gnb.classList.add('on')
            btn.classList.add('on')
            logo.style.opacity = '0'
        }
        else{ 
          
            gnb.classList.remove('on')
            btn.classList.remove('on')
          logo.style.opacity = '1'
        }
    })
}
moblieMenu();


window.addEventListener('scroll', function() {
    let windowTop = window.scrollY;

    if (windowTop >= mvHeight) {
        gnb.classList.add("drop");
        logo.classList.add("drop");
        // gnb.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        gnb.classList.remove("drop");
        logo.classList.remove("drop");
        // gnb.style.backgroundColor = '';  // 기본 배경색으로 되돌리기
    }


    if(windowTop <= mvHeight){
        gnb.classList.remove('on')
        btn.classList.remove('on')
        logo.style.opacity = '1'
    }
    if(windowTop >= mvHeight) {
        gnb.classList.remove('on');
        btn.classList.remove('on');
        logo.style.opacity = '1'
    }
});
//gnb





var swiper = new Swiper(".main_visual", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed:1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//swiper

// const img1 = document.querySelector('.content3 img:eq(0)');
// const img2 = document.querySelector('.content3 img:eq(1)');
// const img3 = document.querySelector('.content3 img:eq(2)');



