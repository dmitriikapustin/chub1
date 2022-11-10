$(document).ready(function () {

    const textArr = ['Дмитрий', 'Алина', 'Коля', 'Артем', 'Кирилл', 'Амина', 'Катя', 'Марина']

    const textContainer = document.getElementById("text_container")

    const images = $('.team-photos picture')

    let team = [];

    team[0] = {
        name: "Дмитрий",
        role: "Основатель и арт-директор"
    }
    team[1] = {
        name: "Алина",
        role: "HR специалист"
    }
    team[2] = {
        name: "Николай",
        role: "3D художник"
    }
    team[3] = {
        name: "Артём",
        role: "Frontend-разработчик"
    }
    team[4] = {
        name: "Кирилл",
        role: "Fullstack-разработчик"
    }
    team[5] = {
        name: "Амина",
        role: "Дизайнер"
    }
    team[6] = {
        name: "Катерина",
        role: "Фотограф и SMM-специалист"
    }
    team[7] = {
        name: "Марина",
        role: "Project менеджер"
    }


    for (i = 0; i < $('.team-photos picture').length; i++) {
        $(".under-text").append('<p class="person-text animated-paragraph_item_no-scroll_team_' + i + '" id="text_under_iamges"><span class="ov-hidden"><span><b>' + team[i].name + '</b></span></span><span class="ov-hidden"><span>' + team[i].role + '</span></span></p>');
    }
    
    var main_text_state = $('.animated-paragraph_item_no-scroll_1 span span').offset();

    $('.team-photos picture').on({
        mouseenter: function() {
            var hovered_photo = $(this).index();
            console.log(hovered_photo);
            setTimeout( function() {
                $('.person-text').each(function (index) {
                    $(this).css({"opacity": "0"});
                });
                $('.animated-paragraph_item_no-scroll_team_'+hovered_photo).css({"opacity": "1"});
            }, 250)
            
            
            $('.person-text span span').each(function (index) {
                if (main_text_state = $('.animated-paragraph_item_no-scroll_1 span span').offset()) {
                    setTimeout( function() {
                            $('.animated-paragraph_item_no-scroll_1 span span').css({"opacity": "0"});
                    }, 250)
                }
                var tl_1 = new TimelineMax();
                tl_1.to(this, 0.2, { y: "1.3em" }, index * 0.02);
            });
            
            $('.animated-paragraph_item_no-scroll_team_' + $(this).index() + ' span span').each(function (index) {
                var tl_1 = new TimelineMax();
                tl_1.to(this, 0.42, { y: 0 }, 0.5 + index * 0.09);
            });
            $('.animated-paragraph_item_no-scroll_1 span span').each(function (index) {
                var tl_1 = new TimelineMax();
                tl_1.to(this, 0.2, { y: "1.3em" }, 0.2 + index * 0.02);
            });
        },
        mouseleave: function() {
            $('.person-text span span').each(function (index) {
                var tl_1 = new TimelineMax();
                tl_1.to(this, 0.2, { y: "1.3em" }, index * 0.02);
            });
            if (main_text_state = $('.animated-paragraph_item_no-scroll_1 span span').offset()) {
                $('.animated-paragraph_item_no-scroll_1 span span').css({"opacity": "1"});
            }
        }
    });

    $('.team-photos').on({
        mouseenter: function() {
            $('.animated-paragraph_item_no-scroll_1 span span').each(function (index) {
                var tl_1 = new TimelineMax();
                tl_1.to(this, 0.42, { y: "1.3em" }, index * 0.09);
            });
            console.log($('.animated-paragraph_item_no-scroll_1 span span').offset())
        },
        mouseleave: function() {
            $('.animated-paragraph_item_no-scroll_1 span span').each(function (index) {
                var tl_1 = new TimelineMax();
                tl_1.to(this, 0.42, { y: 0 }, 0.5 + index * 0.09);
            });
            $('.person-text span span').each(function (index) {
                var tl_1 = new TimelineMax();
                tl_1.to(this, 0.2, { y: "1.3em" }, 0);
            });
            if (main_text_state <= $('.animated-paragraph_item_no-scroll_1 span span').offset()) {
                setTimeout( function() {
                    $('.person-text').each(function (index) {
                        $(this).css({"opacity": "0"});
                    });
                }, 500)
                
            }
            
        }
    });

});