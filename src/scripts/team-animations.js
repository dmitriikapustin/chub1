$(document).ready(function () {


    if(location.href.indexOf('team-page')!==-1) {

        var cards = $(".card-item");
        var cards_count = cards.length;

        /////// FOR CARDS OF SECOND LEVEL

        var cards_2 = $(".card-item-2");
        var cards_2_count = cards_2.length;


        /////// TRIGGERS FOR EVERY CARD

        $(".card-item").each(function (card_item_index) {
            $(this).addClass("card-item-index-" + card_item_index)
    
            $(this).prepend('<div class="trigger-for-card-item-' + card_item_index + ' trigger"></div>');
    
        })

        $(".card-item-2").each(function (card_item_2_index) {
            $(this).addClass("card-item-2-index-" + card_item_2_index)
    
            $(this).prepend('<div class="trigger-for-card-item-2-' + card_item_2_index + ' trigger"></div>');
    
        })
        
        /////// LOGO APPEARANCE

        var controller_team_anim = new ScrollMagic.Controller();

        var tl_logo_appearance = new TimelineMax();
        tl_logo_appearance.fromTo(".logo-and-cards", { opacity: 0 }, {opacity: 1, duration: 0.8, ease: "power2.out"});
    
    
        var scene = new ScrollMagic.Scene({
            offset: 0,
            triggerElement: ".logo-and-cards",
            triggerHook: 0.7,
            duration: 20,
            reverse: false
        })
            .setTween(tl_logo_appearance)
            .addTo(controller_team_anim)
            // .addIndicators()
    
    
        /////// LOGO CHANGING COLORS
        
        var controller_team_anim_2 = new ScrollMagic.Controller();
        
    
        var scene = new ScrollMagic.Scene({
            offset: 200,
            triggerElement: ".logo-block",
            triggerHook: 0.5,
            duration: 20,
            reverse: false
        })
    
            .setClassToggle(".logo-block", "default-state")
            .addTo(controller_team_anim_2)
            // .addIndicators()



        /////// CARDS APPEARANCE   

        var controller_cards_anim = new ScrollMagic.Controller();

        for (card_item_index = 0; card_item_index < cards_count; card_item_index++) { 
            $(".card-item-index-" + card_item_index).each(function () { 
                var tl_card_appearance = new TimelineMax();
                tl_card_appearance.fromTo(this, { opacity: 0, scale: 0.6 }, {opacity: 1, scale: 1}, 0.15 * card_item_index);

                var scene = new ScrollMagic.Scene({ 
                triggerElement: ".trigger-for-card-item-" + card_item_index,
                triggerHook: 0.7,
                offset: "0",
                reverse: true
                })
              
              .setTween(tl_card_appearance)
              .addTo(controller_cards_anim)
            })

        }


        var controller_cards_2_anim = new ScrollMagic.Controller();

        for (card_item_2_index = 0; card_item_2_index < cards_2_count; card_item_2_index++) { 
            $(".card-item-2-index-" + card_item_2_index).each(function () { 
                var tl_card_2_appearance = new TimelineMax();
                tl_card_2_appearance.fromTo(this, { opacity: 0, scale: 0.6 }, {opacity: 1, scale: 1}, 0.15 * card_item_2_index);

                var scene = new ScrollMagic.Scene({ 
                triggerElement: ".trigger-for-card-item-2-" + card_item_2_index,
                triggerHook: 0.7,
                offset: "0",
                reverse: true
                })
              
              .setTween(tl_card_2_appearance)
              .addTo(controller_cards_2_anim)
            })

        }



        // $(".cards").each(function(i) {
          
        //   var animateIn = new TimelineMax();
        //   var imgOvarly = $(this).find(".card-item");
        //   console.log(imgOvarly);
        //   animateIn
        //   .staggerFromTo(imgOvarly, 0.2, 
        //                  {opacity: 0, scale: 0.6},
        //                  {opacity: 1, scale: 1}, 0.3);
          

        //   .addIndicators()
        //     var reverse = scene.reverse();
        //     scene.reverse(true)
        //     }); 


        /////// PACKSHOT GO AWAY  

        var controller_packshot_anim = new ScrollMagic.Controller();


        var scene = new ScrollMagic.Scene({
            offset: 200,
            triggerElement: ".team-cover-block ",
            triggerHook: 0.7,
            duration: 0,
            // reverse: false
        })
        // .addIndicators()
        .setClassToggle(".packshot", "away")
        .addTo(controller_packshot_anim)


        /////// RIGHT TEXT APPEARANCE

        var controller_right_text_anim = new ScrollMagic.Controller();

        var tl_right_text_appearance = new TimelineMax();
        tl_right_text_appearance.fromTo(".right-text", { opacity: 0 }, { opacity: 1, duration: 0.8 }, .2);
    
    
        var scene = new ScrollMagic.Scene({
            offset: 400,
            triggerElement: ".team-cover-block",
            triggerHook: 0.7,
            duration: 0,
            // reverse: false
        })
            .setTween(tl_right_text_appearance)
            .addTo(controller_right_text_anim)
            // .addIndicators()
    }



})


