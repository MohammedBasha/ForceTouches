$(function() {
    $('.menu-wrapper > i').click(function() {
        $(this).addClass('inactive')
        $('.menu-wrapper nav').removeClass('inactive')
    })

    $('.menu-wrapper nav > i').click(function() {
        $(this).parent().addClass('inactive')
        $('.menu-wrapper > i').removeClass('inactive')
    })
});