 window.onscroll = () => changeScrollButtonVisibility();
 function changeScrollButtonVisibility() {
   const button = document.querySelector(".scroll-to-top");
   const offsetTrigger = 60;
   const pageOffset = window.pageYOffset;
   if (pageOffset > offsetTrigger) {
       button.classList.remove('js-transparent');
     } else {
       button.classList.add("js-transparent");
   }
 }