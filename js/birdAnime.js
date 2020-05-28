'use strict';
{
    $('#contact-btn')
    .hover(function() {

        $('#contact-btn').addClass('jump-btn');
        $('.brown1').css('opacity','0');
        $('.brown2').css('opacity','1');
        $('.blue1').css('opacity','0');
        $('.blue2').css('opacity','1');
        $('.yellow1').css('opacity','0');
        $('.yellow2').css('opacity','1');
        $('.red1').css('opacity','0');
        $('.red2').css('opacity','1');

    })
    .mouseout(function(){
        $('#contact-btn').removeClass('jump-btn');
        $('.brown1').css('opacity','1');
        $('.brown2').css('opacity','0');
        $('.blue1').css('opacity','1');
        $('.blue2').css('opacity','0');
        $('.yellow1').css('opacity','1');
        $('.yellow2').css('opacity','0');
        $('.red1').css('opacity','1');
        $('.red2').css('opacity','0');
    });

    $('.contact-bird')
    .hover(function() {

        $('#contact-btn').addClass('jump-btn');
        $('.brown1').css('opacity','0');
        $('.brown2').css('opacity','1');
        $('.blue1').css('opacity','0');
        $('.blue2').css('opacity','1');
        $('.yellow1').css('opacity','0');
        $('.yellow2').css('opacity','1');
        $('.red1').css('opacity','0');
        $('.red2').css('opacity','1');

    })
    .mouseout(function(){
        $('#contact-btn').removeClass('jump-btn');
        $('.brown1').css('opacity','1');
        $('.brown2').css('opacity','0');
        $('.blue1').css('opacity','1');
        $('.blue2').css('opacity','0');
        $('.yellow1').css('opacity','1');
        $('.yellow2').css('opacity','0');
        $('.red1').css('opacity','1');
        $('.red2').css('opacity','0');
    });
}