// Header Menu
const headerButton: HTMLButtonElement = document.querySelector(".header__button");
const headerMenu: HTMLUListElement = document.querySelector(".header__mob");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

// Header Mob Menu
const nav = document.getElementsByClassName('header__mob-nav__link');
const mobContent = document.getElementsByClassName('header__mob-content');
const navigation = document.getElementsByClassName('header__mob-nav__navigation');

window.addEventListener('click', function(e){
  for(let i = 0; i < nav.length; i++){
    if(e.target == nav[i]){
      if(!e.target.classList.contains('active')){
        navigation[0].classList.toggle('right');
      }
      for(let i = 0; i < nav.length; i++){
        nav[i].classList.remove('active');
      }
      e.target.classList.add('active');
    }
  }
  if(navigation[0].classList.contains('right')){
    mobContent[0].classList.remove('active');
    mobContent[1].classList.add('active');
  }else{
    mobContent[1].classList.remove('active');
    mobContent[0].classList.add('active');
  }
})

// Header Mob Drops
const headerDrop = document.getElementsByClassName('header__mob-drop__btn');


window.addEventListener('click', function(e){
  for(let i = 0; i < headerDrop.length; i++){
    if(e.target == headerDrop[i]){ 
      if(!e.target.classList.contains('active')){
        for(let i = 0; i < headerDrop.length; i++){
          headerDrop[i].classList.remove('active');
        }
        e.target.classList.add('active');
      }else{
        e.target.classList.remove('active');
      }
    }
  }
})

// Slider
$('.main-slider_1').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    },
});
$('.main-slider_2').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    },
});