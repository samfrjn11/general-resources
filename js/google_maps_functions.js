$(document).ready(function () {
            $('.google-maps').addClass('scrolloff');
            $('.google-maps-container').on('click', function () {
                $('.google-maps').removeClass('scrolloff');
            });

            $(".google-maps").mouseleave(function () {
                $('.google-maps').addClass('scrolloff');
            });
        });