'use strict';



$( document ).ready(function() {

// navitgation button menu mobile
    let nav__menu_mobStatus = false;
    let ulNavHeader = $('nav ul');
    $('#nav__menu_mob').click(function(){
        if(!nav__menu_mobStatus) {
           ulNavHeader.css('display', 'block');
           nav__menu_mobStatus = true;
        }
        else {
          ulNavHeader.css('display', 'none');
          nav__menu_mobStatus = false;
        }
    });

// model window generation - input

    function generationWindow (data) {
        let htmlWindow = $('.modalWindow__content');
        if (data === 'hideLoginForm') {
            let content = $('#hideLoginForm');
            $('.modalWindow__title').html(content.attr('name'));
            htmlWindow.append(content.html());
        }
        
    }

    generationWindow ('hideLoginForm');

    let eyeStatus = false;
    let eyeHtml = $('.hideLoginForm__eyeStatus');
    let passwordUser = $('input[name=passwordUser]');
    eyeHtml.click(function(){
        if(!eyeStatus) {
            eyeHtml.css('background-image', "url('../img/eye-true.png')");console.log('open');
            passwordUser.attr('type', 'text');
            eyeStatus = true;
        }
        else {
            eyeHtml.css('background-image', "url('../img/eye-false.png')");
            passwordUser.attr('type', 'password');
            eyeStatus = false;
        }
    })

    

});



