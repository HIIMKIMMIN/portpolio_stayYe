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



