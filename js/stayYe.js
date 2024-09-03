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




let gnb = document.querySelector('.gnb');
let mv = document.querySelector('.main_visual');
let logo = document.querySelector('.logo');
const btn = document.querySelector('.btn_menu')
let gnbHeight = mv.offsetHeight;
window.onscroll = function(){
    let windowTop = window.scrollY;
    if(windowTop >= gnbHeight){
        gnb.classList.remove('on')
        btn.classList.remove('on')
        logo.style.opacity = '1'
        gnb.classList.add("drop");
        logo.classList.add("drop")
        // gnb.classList.remove("inner")
    }
    else{
        gnb.classList.remove("drop")
        logo.classList.remove("drop")
    }
}
// navigation bar



let slideIndex = 0;
let slideTimeout;

function showSlides() {
    const btn_show = document.querySelectorAll('.text_area button');
    const slides = document.querySelectorAll(".sub_visual li");

    // 모든 슬라이드와 버튼 초기화
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        btn_show[i].classList.remove('on');
    }

    // 슬라이드 인덱스 증가
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // 현재 슬라이드와 버튼 활성화
    slides[slideIndex - 1].style.display = "block";
    btn_show[slideIndex - 1].classList.add('on');

    // 다음 슬라이드 전환 타이머 설정
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(showSlides, 3000);
}

function setupEventListeners() {
    const btn_show = document.querySelectorAll('.text_area button');
    const slides = document.querySelectorAll(".sub_visual li");

    // 버튼 클릭 이벤트 설정
    for (let j = 0; j < btn_show.length; j++) {
        btn_show[j].addEventListener("click", function () {
            // 모든 슬라이드와 버튼 초기화
            for (let k = 0; k < btn_show.length; k++) {
                btn_show[k].classList.remove('on');
                slides[k].style.display = "none";
            }
            // 클릭한 버튼과 슬라이드 활성화
            btn_show[j].classList.add('on');
            slides[j].style.display = "block";

            // 자동 슬라이드 전환 멈추고 선택한 슬라이드로 이동
            clearTimeout(slideTimeout);
            slideIndex = j + 1;  // 슬라이드 인덱스를 클릭된 버튼에 맞춤
            slideTimeout = setTimeout(showSlides, 3000);
        });
    }
}

// 초기 슬라이드 설정 및 이벤트 리스너 설정
setupEventListeners();
showSlides();




// moblie

function moblieMenu(){
    const menu = document.querySelector('.btn_menu');
    menu.addEventListener('click', function(){
        const gnb = document.querySelector('.gnb');
        const btn = document.querySelector('.btn_menu')
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

