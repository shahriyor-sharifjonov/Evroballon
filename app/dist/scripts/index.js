"use strict";var headerButton=document.querySelector(".header__button"),headerMenu=document.querySelector(".header__mob"),menuOpened=!1,menuToggle=function(){menuOpened=!menuOpened,headerButton.classList.toggle("open"),headerMenu.classList.toggle("open")};headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle()};var nav=document.getElementsByClassName("header__mob-nav__link"),mobContent=document.getElementsByClassName("header__mob-content"),navigation=document.getElementsByClassName("header__mob-nav__navigation");window.addEventListener("click",function(a){for(var b=0;b<nav.length;b++)if(a.target==nav[b]){a.target.classList.contains("active")||navigation[0].classList.toggle("right");for(var c=0;c<nav.length;c++)nav[c].classList.remove("active");a.target.classList.add("active")}navigation[0].classList.contains("right")?(mobContent[0].classList.remove("active"),mobContent[1].classList.add("active")):(mobContent[1].classList.remove("active"),mobContent[0].classList.add("active"))});var headerDrop=document.getElementsByClassName("header__mob-drop__btn");if(window.addEventListener("click",function(a){for(var b=0;b<headerDrop.length;b++)if(a.target==headerDrop[b])if(!a.target.classList.contains("active")){for(var c=0;c<headerDrop.length;c++)headerDrop[c].classList.remove("active");a.target.classList.add("active")}else a.target.classList.remove("active")}),document.getElementsByClassName(".products__item-heart")){var heart=document.getElementsByClassName("products__item-heart");window.addEventListener("click",function(a){for(var b=0;b<heart.length;b++)a.target==heart[b]&&a.target.classList.toggle("active")})}if(document.getElementsByClassName("mainproduct__categories-btn")){var sliderButton=function(a){for(var c=0;c<sliderContent.length;c++)sliderContent[c].classList.remove("active");var b=document.getElementsByClassName(a);b[0].classList.add("active")},sliderButtonEl=document.getElementsByClassName("mainproduct__categories-btn"),sliderContent=document.getElementsByClassName("mainproduct__categories-content");window.addEventListener("click",function(a){for(var b=0;b<sliderButtonEl.length;b++){if(a.target==sliderButtonEl[b])for(var c=0;c<sliderButtonEl.length;c++)sliderButtonEl[c].classList.remove("active");a.target.classList.add("active")}})}$(".mainproduct__categories-top").slick({infinite:!1,slidesToShow:6,variableWidth:!0,slidesToScroll:1,arrows:!1,centerPadding:"50px",touchThreshold:15,responsive:[{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:1,variableWidth:!0}},{breakpoint:576,settings:{slidesToShow:1,variableWidth:!0}},{breakpoint:450,settings:{slidesToShow:1,variableWidth:!0}}]}),$(".mainproduct__slider-inner").slick({infinite:!0,slidesToShow:3,slidesToScroll:1,arrows:!0,responsive:[{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:576,settings:{slidesToShow:3}},{breakpoint:450,settings:{slidesToShow:2}}]}),$(".main-slider_1").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:1500,responsive:[{breakpoint:768,settings:{arrows:!1}}]}),$(".main-slider_2").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:1600,responsive:[{breakpoint:768,settings:{arrows:!1}}]}),$(".main-slider_3").slick({infinite:!1,slidesToShow:4,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:1500,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:768,settings:{arrows:!1,slidesToShow:2}}]}),$(".advantages2__body").slick({slidesToShow:3,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:1600,infinite:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{arrows:!1,slidesToShow:1}}]}),$(".reviews__slider").slick({slidesToShow:2,slidesToScroll:1,dots:!0,autoplay:!1,autoplaySpeed:1600,infinite:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:1}},{breakpoint:768,settings:{arrows:!1,slidesToShow:1}}]}),$(".useful__slider").slick({slidesToShow:4,slidesToScroll:1,dots:!1,autoplay:!1,autoplaySpeed:1600,infinite:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3,arrows:!1,dots:!0}},{breakpoint:768,settings:{slidesToShow:2,arrows:!1,dots:!0}},{breakpoint:576,settings:{slidesToShow:1,arrows:!1,dots:!0}}]});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImhlYWRlckJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlck1lbnUiLCJtZW51T3BlbmVkIiwibWVudVRvZ2dsZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsIm9uY2xpY2siLCJ3aW5kb3ciLCJlIiwiY29tcG9zZWRQYXRoIiwiaW5jbHVkZXMiLCJuYXYiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibW9iQ29udGVudCIsIm5hdmlnYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwiaSIsImxlbmd0aCIsInRhcmdldCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwiaGVhZGVyRHJvcCIsImhlYXJ0Iiwic2xpZGVyQnV0dG9uIiwiZWwiLCJzbGlkZXJDb250ZW50IiwiZ3MiLCJzbGlkZXJCdXR0b25FbCIsIiQiLCJzbGljayIsImluZmluaXRlIiwic2xpZGVzVG9TaG93IiwidmFyaWFibGVXaWR0aCIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwiY2VudGVyUGFkZGluZyIsInRvdWNoVGhyZXNob2xkIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImRvdHMiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiXSwibWFwcGluZ3MiOiJnQkFDTUEsQ0FBQUEsWUFBWSxDQUFzQkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDLENBQ2xDQyxVQUFVLENBQXFCRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQyxDQUNqQ0UsVUFBVSxHLENBQ1JDLFVBQVUsQ0FBRyxVQUFLLENBQ3RCRCxVQUFVLENBQUcsQ0FBQ0EsVUFEUSxDQUV0QkosWUFBWSxDQUFDTSxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixNQUE5QixDQUZzQixDQUd0QkosVUFBVSxDQUFDRyxTQUFYLENBQXFCQyxNQUFyQixDQUE0QixNQUE1QixDQUNELEMsQ0FFRFAsWUFBWSxDQUFDUSxPQUFiLENBQXVC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LEdBRGQsQ0FFRUMsUUFBUSxDQUFFLENBQ1JSLFlBQVksQ0FBRSxDQUROLENBRVJHLE1BQU0sR0FGRSxDQUdSTSxJQUFJLEdBSEksQ0FGWixDQXZCVSxDQVBhLENBQTNCLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWFkZXIgTWVudVxyXG5jb25zdCBoZWFkZXJCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2J1dHRvblwiKTtcclxuY29uc3QgaGVhZGVyTWVudTogSFRNTFVMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19tb2JcIik7XHJcbmxldCBtZW51T3BlbmVkID0gZmFsc2U7XHJcbmNvbnN0IG1lbnVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgbWVudU9wZW5lZCA9ICFtZW51T3BlbmVkO1xyXG4gIGhlYWRlckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICBoZWFkZXJNZW51LmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG59O1xyXG5cclxuaGVhZGVyQnV0dG9uLm9uY2xpY2sgPSBtZW51VG9nZ2xlO1xyXG5cclxud2luZG93Lm9uY2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gIGlmIChcclxuICAgIG1lbnVPcGVuZWQgJiZcclxuICAgICFlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGhlYWRlckJ1dHRvbikgJiZcclxuICAgICFlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGhlYWRlck1lbnUpXHJcbiAgKVxyXG4gICAgbWVudVRvZ2dsZSgpO1xyXG59O1xyXG5cclxuLy8gSGVhZGVyIE1vYiBNZW51XHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fbW9iLW5hdl9fbGluaycpO1xyXG5jb25zdCBtb2JDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19tb2ItY29udGVudCcpO1xyXG5jb25zdCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaGVhZGVyX19tb2ItbmF2X19uYXZpZ2F0aW9uJyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICBmb3IobGV0IGkgPSAwOyBpIDwgbmF2Lmxlbmd0aDsgaSsrKXtcclxuICAgIGlmKGUudGFyZ2V0ID09IG5hdltpXSl7XHJcbiAgICAgIGlmKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKXtcclxuICAgICAgICBuYXZpZ2F0aW9uWzBdLmNsYXNzTGlzdC50b2dnbGUoJ3JpZ2h0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IG5hdi5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgbmF2W2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZihuYXZpZ2F0aW9uWzBdLmNsYXNzTGlzdC5jb250YWlucygncmlnaHQnKSl7XHJcbiAgICBtb2JDb250ZW50WzBdLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgbW9iQ29udGVudFsxXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICB9ZWxzZXtcclxuICAgIG1vYkNvbnRlbnRbMV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBtb2JDb250ZW50WzBdLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIH1cclxufSlcclxuXHJcbi8vIEhlYWRlciBNb2IgRHJvcHNcclxuY29uc3QgaGVhZGVyRHJvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcl9fbW9iLWRyb3BfX2J0bicpO1xyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBoZWFkZXJEcm9wLmxlbmd0aDsgaSsrKXtcclxuICAgIGlmKGUudGFyZ2V0ID09IGhlYWRlckRyb3BbaV0peyBcclxuICAgICAgaWYoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBoZWFkZXJEcm9wLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgIGhlYWRlckRyb3BbaV0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuXHJcbi8vIEhlYXJ0IGNsaWNrXHJcbmlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJy5wcm9kdWN0c19faXRlbS1oZWFydCcpKXtcclxuICBsZXQgaGVhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9kdWN0c19faXRlbS1oZWFydCcpO1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGhlYXJ0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgaWYoZS50YXJnZXQgPT0gaGVhcnRbaV0pe1xyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLy8gU2xpZGVyIEl0ZW0gQ2xpY2tcclxuaWYoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbnByb2R1Y3RfX2NhdGVnb3JpZXMtYnRuJykpe1xyXG4gIGNvbnN0IHNsaWRlckJ1dHRvbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbnByb2R1Y3RfX2NhdGVnb3JpZXMtYnRuJylcclxuICBjb25zdCBzbGlkZXJDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWFpbnByb2R1Y3RfX2NhdGVnb3JpZXMtY29udGVudCcpXHJcbiAgZnVuY3Rpb24gc2xpZGVyQnV0dG9uKGVsKXtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzbGlkZXJDb250ZW50Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgc2xpZGVyQ29udGVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIGxldCBncyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoZWwpO1xyXG4gICAgZ3NbMF0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgfVxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHNsaWRlckJ1dHRvbkVsLmxlbmd0aDsgaSsrKXtcclxuICAgICAgaWYoZS50YXJnZXQgPT0gc2xpZGVyQnV0dG9uRWxbaV0pe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzbGlkZXJCdXR0b25FbC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICBzbGlkZXJCdXR0b25FbFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuXHJcbi8vIFNsaWRlclxyXG4kKCcubWFpbnByb2R1Y3RfX2NhdGVnb3JpZXMtdG9wJykuc2xpY2soe1xyXG4gIGluZmluaXRlOiBmYWxzZSxcclxuICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBhcnJvd3M6IGZhbHNlLFxyXG4gIGNlbnRlclBhZGRpbmc6ICc1MHB4JyxcclxuICB0b3VjaFRocmVzaG9sZDogMTUsXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDU3NixcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNDUwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLCAgXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXVxyXG59KTtcclxuXHJcbiQoJy5tYWlucHJvZHVjdF9fc2xpZGVyLWlubmVyJykuc2xpY2soe1xyXG4gIGluZmluaXRlOiB0cnVlLFxyXG4gIHNsaWRlc1RvU2hvdzogMyxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBhcnJvd3M6IHRydWUsXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA1NzYsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA0NTAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIF1cclxufSk7XHJcblxyXG5cclxuJCgnLm1haW4tc2xpZGVyXzEnKS5zbGljayh7XHJcbiAgaW5maW5pdGU6IHRydWUsXHJcbiAgc2xpZGVzVG9TaG93OiAxLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIGRvdHM6IHRydWUsXHJcbiAgYXV0b3BsYXk6IHRydWUsXHJcbiAgYXV0b3BsYXlTcGVlZDogMTUwMCxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBhcnJvd3M6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXVxyXG59KTtcclxuJCgnLm1haW4tc2xpZGVyXzInKS5zbGljayh7XHJcbiAgaW5maW5pdGU6IHRydWUsXHJcbiAgc2xpZGVzVG9TaG93OiAxLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIGRvdHM6IHRydWUsXHJcbiAgYXV0b3BsYXk6IHRydWUsXHJcbiAgYXV0b3BsYXlTcGVlZDogMTYwMCxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBhcnJvd3M6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXVxyXG59KTtcclxuJCgnLm1haW4tc2xpZGVyXzMnKS5zbGljayh7XHJcbiAgaW5maW5pdGU6IGZhbHNlLFxyXG4gIHNsaWRlc1RvU2hvdzogNCxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBkb3RzOiB0cnVlLFxyXG4gIGF1dG9wbGF5OiB0cnVlLFxyXG4gIGF1dG9wbGF5U3BlZWQ6IDE1MDAsXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIF1cclxufSk7XHJcbiQoJy5hZHZhbnRhZ2VzMl9fYm9keScpLnNsaWNrKHtcclxuICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgZG90czogdHJ1ZSxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBhdXRvcGxheVNwZWVkOiAxNjAwLFxyXG4gIGluZmluaXRlOiBmYWxzZSxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXVxyXG59KTtcclxuXHJcbiQoJy5yZXZpZXdzX19zbGlkZXInKS5zbGljayh7XHJcbiAgc2xpZGVzVG9TaG93OiAyLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIGRvdHM6IHRydWUsXHJcbiAgYXV0b3BsYXk6IGZhbHNlLFxyXG4gIGF1dG9wbGF5U3BlZWQ6IDE2MDAsXHJcbiAgaW5maW5pdGU6IGZhbHNlLFxyXG4gIHJlc3BvbnNpdmU6IFtcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICBdXHJcbn0pO1xyXG5cclxuJCgnLnVzZWZ1bF9fc2xpZGVyJykuc2xpY2soe1xyXG4gIHNsaWRlc1RvU2hvdzogNCxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBkb3RzOiBmYWxzZSxcclxuICBhdXRvcGxheTogZmFsc2UsXHJcbiAgYXV0b3BsYXlTcGVlZDogMTYwMCxcclxuICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcclxuICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA1NzYsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgZG90czogdHJ1ZSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICBdXHJcbn0pO1xyXG5cclxuIl19
