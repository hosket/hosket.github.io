// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = document.getElementById('div').clientHeight;
var Btn = document.getElementById('Button');

function t() {
    $(document.getElementById('div')).removeClass('nav-down').addClass('nav-up');
    lastScrollTop = document.getElementById('div').clientHeight;
};

Btn.addEventListener('click', function () {
    setTimeout(() => {
        t();
    }, 500);
})

window.onscroll = function(){
    didScroll = true;
};

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $(document.getElementById('div')).removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $(document.getElementById('div')).removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}