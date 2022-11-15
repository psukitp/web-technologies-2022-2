$(function(){
    $('.menu__btn').on('click', function () {
        $('.menu__list').addClass('menu__list--active');
        $('.header__top-contact').addClass('header__top-contact--active');
        $('.exit__btn').addClass('exit__btn--active');
        $('.header__top-email--adaptiv').addClass('header__top-email--adaptiv--active');
        $('.header__top-logo').addClass('header__top-logo--active');
        $('.menu__btn').addClass('menu__btn--active');
        $('.header__top-inner').addClass('header__top-inner--active');
    });

    $('.exit__btn').on('click', function () {
        $('.menu__list').removeClass('menu__list--active');
        $('.header__top-contact').removeClass('header__top-contact--active');
        $('.exit__btn').removeClass('exit__btn--active');
        $('.header__top-email--adaptiv').removeClass('header__top-email--adaptiv--active');
        $('.header__top-logo').removeClass('header__top-logo--active');
        $('.menu__btn').removeClass('menu__btn--active');
        $('.header__top-inner').removeClass('header__top-inner--active');
    });
});