$(function)(){

//Same as document.querySelector("#navbarToggle").addEventListener("blur")
  $("#navbarToggler").blur(function(event){
    var screenWidth = window.innerWidth;
    if ( screenWidth < 768){
      $(#collapsable-nav).collapse('hide');
    }
  });
});
