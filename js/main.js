// header - badge숨기기 + to-top 보이기
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity : 0,
      display : 'none'
    })
    // toTop보이기
    gsap.to(toTopEl, 0.2, {
      x: -100
    })
    
  } else {
    // 배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity : 1,
      display : 'block'
    })
    // toTop 숨기기
    gsap.to(toTopEl, 0.2, {
      x: 0
    })
  }
}, 300));
// _.throttle(함수, 시간)


// toTop 버튼 동작

toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0
  })
});


// visual - 순차적으로 요소 보이기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay : 0.7 * (index + 1),
    opacity : 1
  });
});


// notice - vertical swiper
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

// notice - promotion swiper
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  },
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});

// notice - toggle
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // hide promotion
    promotionEl.classList.add('hide');
  } else {
    // show promotion
    promotionEl.classList.remove('hide');
  };
});


// youtube - floating
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
    y: size,
    repeat: -1, // 무한반복
    yoyo: true, // forward reverse 순으로 진행됨
    ease: Power1.easeInOut,
    delay: random(0, delay),
    }
  );
};
floatingObject('.floating1', 1.0, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);


// 
const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소
      triggerHook: 0.8, 
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


// awards - promotion swiper
new Swiper(".awards .swiper-container", {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  },
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});