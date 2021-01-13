
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 10) {
            $("#navbar-1").css("background" , "white");
    
        }
        else if(scroll < 10){
            $("#navbar-1").css("background" , "transparent");
            $("#navbar-1").css("border" , "none");

        }
    })
})


