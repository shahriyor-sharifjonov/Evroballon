const categoriesItem = document.getElementsByClassName('categories__cats-item');

window.addEventListener('click', function(e){
  for(let i = 0; i < categoriesItem.length; i++){
    if(e.target == categoriesItem[i]){ 
      if(!e.target.classList.contains('active')){
        for(let i = 0; i < categoriesItem.length; i++){
          categoriesItem[i].classList.remove('active');
        }
        e.target.classList.add('active');
      }else{
        e.target.classList.remove('active');
      }
    }
  }
})


// Drop open on click
function openDrop(el){
  el.classList.toggle('active');
}

// Heart click
if(document.getElementsByClassName('.products__item-heart')){
  let heart = document.getElementsByClassName('products__item-heart');
  window.addEventListener('click', function(e){
    for(let i = 0; i < heart.length; i++){
      if(e.target == heart[i]){
        e.target.classList.toggle('active');
      }
    }
  })
}



// Filter open on click
function openFilter(){
  let categoriesFilter = document.querySelector('.categories__filter');
  categoriesFilter.classList.add('open')
}

// Filte close on click
function toggleFilter(){
  let categoriesFilter = document.querySelector('.categories__filter');
  categoriesFilter.classList.remove('open')
}


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