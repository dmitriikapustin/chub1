// $(document).ready(function () {
//     $(function(){
//         var swiper = new Swiper(".more-cases-Swiper", {
//             centeredSlides: true,
//             slidesPerView: 3,
//             spaceBetween: 20,
//             loop: true,
//             speed: 2000,
//             loopedSlides: 8,
//             autoplay: {
//                 delay: 25000,
//                 disableOnInteraction: false
//             }
//         });
//     });    
// })  

jQuery(document).ready(function() {
    const swiper_case = new Swiper('.more-cases-Swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 60,
        speed: 200,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        }
    });
});