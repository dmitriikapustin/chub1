$(document).ready(function () {



  var cursor = document.getElementById("cursor")
  var case1 = document.getElementById("case-1")
  var case2 = document.getElementById("case-2")
  var case3 = document.getElementById("case-3")
  var case4 = document.getElementById("case-4")
  var case5 = document.getElementById("case-5")
  var case6 = document.getElementById("case-6")
  var case7 = document.getElementById("case-7")
  var case8 = document.getElementById("case-8")
  var case9 = document.getElementById("case-9")
  var case10 = document.getElementById("case-10") 
  var case11 = document.getElementById("case-11")
  var case12 = document.getElementById("case-12") 
  let casesArr = [case1, case2, case3, case4, case5, case6, case7, case8, case9, case10, case11, case12]
  // var cases = document.querySelectorAll(".case-item")
  // let casesArr = Array.from(cases)
  // case1.style.WebkitTransition = 'opacity 1s';
  // var body = $('body')
  // var $h = $(".animated_heading_item");
  console.log(casesArr)
  var lastScrollTop = 0;

  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  // // window.addEventListener("scroll", function () { // or window.addEventListener("scroll"....
  //   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  //   if (st > lastScrollTop) {
  //     // downscroll code
  //     $(window).scroll(function () {
  //       // console.log("down")
  //       $('.cursor.active')
  //         .eq(0)
  //         .css({
  //           opacity: 0
  //         });
  //     });
  //   } else {
  //     // upscroll code
  //     $(window).scroll(function () {
  //       // console.log("up")
  //       $('.cursor.active')
  //         .eq(0)
  //         .css({
  //           opacity: 0
  //         });
  //     });
  //   }
  //   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling


  // var $i = $("img");

  document.addEventListener('mousemove', function(e){
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
  });

  let isMouseHover = false


  casesArr.forEach(item => {
    item.addEventListener("mouseleave", function (event) {
      isMouseHover = false
      cursor.classList.remove("active")
      // $('.cursor.active')
      // .eq(0)
      // .css({
      //   opacity: 1
      // });
      // $('.cursor')
      // .eq(0)
      // .css({
      //   opacity: 1
      // });
      console.log(isMouseHover)
    }, false);
    item.addEventListener("mouseover", function (event) {

      isMouseHover = true
      cursor.classList.add("active")
      console.log(isMouseHover)
    }, false);
  })







  



  $(document).mousemove(function (e) {
    $('.cursor.active')
      .eq(0)
      .css({
        left: e.pageX,
        top: e.pageY,
        opacity: 1
      });
  })


});
