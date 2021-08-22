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