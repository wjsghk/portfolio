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
    navbarMenu.classList.remove('open');//클릭시 네이바에 삭제
    console.log(event.target.dataset.link);//cilck시 확인용
     scrollIntoView(link);
    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({ behavior:'smooth'});
});


// Navbar toggle button for small screen
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');
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
});

//scorll시 arrow-up보이게하기
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
    if(window.scrollY > homeHeigt /2){
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});

//애로우 버튼클릭시 home으로 이동  a태그(급격하게 올라감)로 해서 하는 방법도 있고 다른방법(스무스하게 올라감) 
arrowUp.addEventListener('click',()=>{
    scrollIntoView('#home');
});

//project클릭시 카테고리 변환,애니메이션 효과
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click',(e)=>{
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
     //e에 target애 dataset에 filter를 가져오겠다(옆에 나타나는 숫자가 undefined가 나오기 때문에). or  e.target.parentNode.dataset.filter를 가져오겠다
    if(filter == null){
        return;
    }
    console.log(filter);

   
    //project클릭시 카테고리 애니메이션 효과
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName === 'BUTTON' ?  e.target : e.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(()=>{
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if(filter === '*' || filter === project.dataset.type){
                project.classList.remove('invisible');
            }else{
                project.classList.add('invisible');
            }
        //for each 와 같은버전 1
        // for(let project of projects){
        //     console.log(project);
        // }

        //for each 와 같은버전 2
        // let project;
        // for(let i=0; i<projects.length; i++){
        //     project = project[i];
        //     console.log(project);
        // }
        });
        projectContainer.classList.remove('anim-out');
    },300);
});









