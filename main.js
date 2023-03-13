'use strict'


//navbar 변경 애니메이션
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', ()=>{
    console.log(window.scrollY);//뷰포트의 스크롤 위치 확인
    console.log(`navbarHeight: ${navbarHeight}`);//navbar의 위치를 제공해준다.
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--dark');
    }else{
        navbar.classList.remove('navbar--dark');//css에서 확인해주기
    }
});

//navbar의 버튼클릭시 해당 스크롤로 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click',(event)=>{
    const target = event.target;
    const link = target.dataset.link;
    //https://codechasseur.tistory.com/75 요약하자면 데이터 값을 가져오겠다
    //const link = event.target.dataset.link; 로도 한꺼번에 변수 설정해도된다.
    if(link == null){
        return;//navbar 빈공간을 눌렀을때 undefined방지위해 
    }

    console.log(event.target.dataset.link);//cilck시 확인용
     scrollIntoView(link);
    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({ behavior:'smooth'});
});

//contact버튼 클릭시 이동
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click',()=>{
    scrollIntoView('#contact');
    // const scrollTo = document.querySelector('#contact');
    // scrollTo.scrollIntoView({ behavior:'smooth'});
});

//위 코드가 반복돼서 함수로 간편한게 생성함
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior:'smooth'});
}

//스크롤 내릴시 홈 section부분 투명화
const home = document.querySelector('.home__container');
//home__container을 투명화로 바꿈 home부분을 투명화하려면 #home로 바꿔주면되다.
const homeHeigt = home.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / homeHeigt;
    //home에 style의 opacity를 할당한다.
    //ex) 1 - 0/800 => 1(보임)
    //ex) 1 - 400/800 => 0.5
    //ex) 1 - 800/800 => 0(투명)
    console.log(`homeHeigt: ${homeHeigt}`);//잘 나오는 지 확인용
})










// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
});
