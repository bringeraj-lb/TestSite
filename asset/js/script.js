$(document).on("scroll", function(){

    if ($(document).scrollTop() >= 80){
        $("#navbar").addClass("main-navigation");
    } else {
         
          $("#navbar").removeClass("main-navigation");
    }

});


