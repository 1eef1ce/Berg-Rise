$( document ).ready(function() {

    //toggle navbar icon on mobile
    $(".navbar-toggler").on("click", function () {
        $(this).toggleClass("active");
    });

    $('.header-item').hover(function() {
        $(this).siblings().css("opacity", "0.4");
    },
    function() {
        $(this).siblings().css("opacity", "1");
    }
    );
    $('.footer-menu li').hover(function() {
            $(this).siblings().css("opacity", "0.4");
        },
        function() {
            $(this).siblings().css("opacity", "1");
        }
    );

});