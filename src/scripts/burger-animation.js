
// burgerMenuBlack.addEventListener('click', function(){ 
//     console.log("CLICK")
//     burgerMenuBlack.classList.toggle("close")
// })
let burger_boolean = false;

let headerBlack = document.getElementById('header-b');
let headerWhite = document.getElementById('header-w');

var burgerMenuBlack = document.getElementById('burger-menu-black');
var burgerMenuWhite = document.getElementById('burger-menu-white');

var logoWhite = document.getElementById('logo-white');

console.log(headerBlack, headerWhite)


$(document).ready(function () { 
        // burgerMenuMobMain.classList.add("display-none")
    // if ($(window).width() < 800) { 
        // if (burgerMenuBlack) {
            console.log(burgerMenuBlack)

            // if(location.href.indexOf('branding-page')!==-1) { 
            if (burgerMenuBlack) {
                burgerMenuBlack.addEventListener('click', function() { 
                    console.log("CLICK")
                    if (burger_boolean === false) {
                        headerBlack.classList.toggle("open")
                        console.log("close")
                        burgerMenuBlack.classList.add("close")
                        return burger_boolean = true
                    } else {
                        headerBlack.classList.toggle("open")
                        console.log("add")

                        burgerMenuBlack.classList.remove("close")
                         return burger_boolean = false
                    }
                })
            }

            if (burgerMenuWhite) {
                burgerMenuWhite.addEventListener('click', function() { 
                    console.log("CLICK")
                    logoWhite.classList.toggle("to-black")
                    burgerMenuWhite.classList.toggle("to-black")
                    if (burger_boolean === false) {
                        if (headerWhite) {
                            headerWhite.classList.toggle("open")
                        }
                        console.log("close")
                        burgerMenuWhite.classList.add("close")
                         return burger_boolean = true
                    } else {
                        if (headerWhite) { 
                            headerWhite.classList.toggle("open")
                        }
                        console.log("add")
                        burgerMenuWhite.classList.remove("close")
                         return burger_boolean = false
                    }
                })
            }
                // }
        // }
    // }

})