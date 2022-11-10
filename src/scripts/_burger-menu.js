var burgerMenu = document.getElementById('burger-menu');
var og_block = document.getElementById('our-games-block');
var img_block = document.getElementById('images-block');
var og_block = document.getElementById('our-games-block');
var header = document.getElementById('header');
var footer = document.getElementById('footer');
var reprobates_content = document.getElementById('pixel-font-container');

var overlay = document.getElementById('navigation-mobile');
let burger_boolean = false;



burgerMenu.addEventListener('click',function(){

  this.classList.toggle("close");
  overlay.classList.toggle("open-nav");
  if (burger_boolean === false) {
    setTimeout(function() {
      footer.classList.toggle("fixed-pos")
      header.classList.toggle("fixed-pos")
      if (og_block) {
        og_block.classList.toggle("fixed-pos")
      }
      if (img_block) {
        img_block.classList.toggle("fixed-pos")
      }
      // if(location.href.indexOf('index')!==-1) { // for example its login.php page
      //   og_block.classList.toggle("fixed-pos")
      //   img_block.classList.toggle("fixed-pos")
      // }
      if(location.href.indexOf('reprobates')!==-1) { // for example its login.php page
        pixel_bc.classList.toggle("hide-bc")
        reprobates_content.classList.toggle("fixed-pos")
      }
    }, 200)
  }
  if (burger_boolean === true) {
    setTimeout(function() {
      // if(location.href.indexOf('index')!==-1) { // for example its login.php page
      //   og_block.classList.toggle("fixed-pos")
      //   img_block.classList.toggle("fixed-pos")
      // }
      if (og_block) {
        og_block.classList.toggle("fixed-pos")
      }
      if (img_block) {
        img_block.classList.toggle("fixed-pos")
      }
      footer.classList.toggle("fixed-pos")
      header.classList.toggle("fixed-pos")
      if(location.href.indexOf('reprobates')!==-1) { // for example its login.php page
        pixel_bc.classList.toggle("hide-bc")
        reprobates_content.classList.toggle("fixed-pos")
      }

    }, 10)
  }

  if (burger_boolean === false) {
    burger_boolean = true;
  }
  if (burger_boolean === true) {
    burger_boolean = false;
  }
  // body.classList.toggle("fixed-pos");
});