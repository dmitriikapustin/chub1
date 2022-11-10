$(document).ready(function () {

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  console.log(getRandomArbitrary(0.5, 0.9))

  var controller_breaking_svg = new ScrollMagic.Controller();

  var rect_index = 0; // Не объявил переменную

  $(".breaking-five-svg g rect").each(function (rect_index) { // тут надо было заселектить нужную нам группу в свг
    $(this).addClass("rect-index-" + rect_index)
    $(this).parent().parent().parent().prepend('<div class="trigger-for-breaking-five-' + rect_index + ' trigger"></div>'); // ещё 2 парента, чтобы вынести вне svg 

    $(".rect-index-" + rect_index).each(function () { // не подходит так как ты делаешь each на какой то индекс, а индекс уже имеешь для каждого, рациональна замена цикла на for
        var directionX;
        var directionY;
        var kX;
        var kY;
        // var directionY_30to70;
        // var directionY_40to60;
        // var directionY_50to50;



        var randomDirectionX = Math.random();
        var randomDirectionY = Math.random();
        var randomRotateBoolean = Math.random();

        if (randomRotateBoolean > 0.5) {
          rotateBoolean = 1;
        } else {
          rotateBoolean = -1;
        }



        // if (randomDirectionY > 0.5) {
        //   directionY = -1;
        // } else {
        //   directionY = 0.3;
        // }




        if (rect_index > 35) {
          kX = 1500;
          kY = 200
          if (randomDirectionX > 0.18) {
            directionX = 1;
          } else {
            directionX = -1;
          }
          if (randomDirectionY > 0.5) {
            directionY = -1;
          } else { directionY = 0.7}
        } else if (rect_index <= 35 && rect_index > 22) {
          kX = 900;
          kY = 300
          if (randomDirectionX > 0.18) {
            directionX = 1;
          } else {
            directionX = -1;
          }
          if (randomDirectionY > 0.4) {
            directionY = -1;
          } else { directionY = 0.7}
        } else if (rect_index <= 22 && rect_index > 15) {
          kX = 750;
          kY = 300;
          if (randomDirectionX > 0.18) {
            directionX = 0.83;
          } else {
            directionX = -0.83;
          }
          if (randomDirectionY > 0.3) {
            directionY = -1;
          } else { directionY = 0.7}

        } else if (rect_index >= 0 && rect_index <= 15) {
          kX = 300;
          kY = 350;
          if (randomDirectionX > 0.38) {
            directionX = 0.6;
          } else {
            directionX = -0.6;
          }
          directionY = -1;
        }


        // console.log("my index is " + rect_index)
        var randomRotate = Math.random() * rotateBoolean
        var speedX = getRandomArbitrary(0.5, 0.9);
        var speedY = getRandomArbitrary(0.5, 0.9);
        var tl = new TimelineMax();
        tl.to(this, 4000, { x: directionX * speedX * kX, y: directionY * speedY * kY, rotate: 10 + 180*randomRotate}, 1.4);
        // tl.to(this, 2000, { x: directionX * speedX * 700, y: directionY * speedY * 300, rotate: 10 + 150*randomRotate}, 3.4);
        tl.to(this, 1400, { opacity: 0})
        var scene = new ScrollMagic.Scene({
          offset: 0 + 5.5 * rect_index,
          triggerElement: '.trigger-for-breaking-five-' + rect_index,
          triggerHook: 0.5,
          duration: 130 + speedX * 800,
          reverse: true
        })
          // .addIndicators()
          .setTween(tl)
          .addTo(controller_breaking_svg);
      });
  })
  // $(".attack").ready(function () {
  //   setTimeout(function () {
  //     $(".five-fractions rect").each(function (minirect_index) {
  //       $(this).addClass("mini-rect-index-" + minirect_index)
  //       $(".mini-rect-index-" + minirect_index).each(function () { 
  //         var x_direction;
  //         var x_speed = Math.random();
  //         var y_speed = Math.random();
  //         var randomRotateBoolean = Math.random();
    
  //         if (randomRotateBoolean > 0.5) {
  //           rotateBoolean = 1;
  //         } else {
  //           rotateBoolean = -1;
  //         }
  //         if (x_speed > 0.5) {
  //           x_direction = 1;
  //         } else {
  //           x_direction = -1;
  //         }
    
  //         var randomRotate = Math.random() * rotateBoolean
    
  //         var tl_fr = new TimelineMax({repeat: -1, repeatDelay: 0});
  //         tl_fr.to(this, 1.045, { x: x_speed * 50 * x_direction, y: -(y_speed * 50), rotate: 10 + 180*randomRotate});
  //       })
  //     })
  //   }, 800)
  // })

})