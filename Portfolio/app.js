//*---Animate Smooth Scroll---*//
$("#home").on("click", function() {
    const home = $('#index.html').position().top;

    $('html, body').animate(
    {
        scrollTop: home
    },
    900
    );
});
$("#read-more").on("click", function() {
    const about = $('#about').position().top;

    $('html, body').animate(
    {
        scrollTop: about
    },
    900
    );
});
$("#services").on("click", function() {
    const services = $('#services').position().top;

    $('html, body').animate(
    {
        scrollTop: services
    },
    900
    );
});
$("#contacts").on("click", function() {
    const contacts = $('#contacts').position().top;

    $('html, body').animate(
    {
        inputForm: contacts
    },
    900
    );
});