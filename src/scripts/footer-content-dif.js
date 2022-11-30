$(document).ready(function() { 
    if(location.href.indexOf('index')!==-1) { // for example its login.php page
        console.log("It is index!!!")
        const social = document.getElementById("social")
        social.classList.add("active")
    }
})