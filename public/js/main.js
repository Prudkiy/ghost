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
    let eyeHtml = $('#hideLoginForm__eyeStatus');
    let passwordUser = $('input[name=passwordUser]');
    eyeHtml.click(function(){
        if(!eyeStatus) {
            eyeHtml.attr('class', 'hideLoginForm__eyeStatusTrue');
            passwordUser.attr('type', 'text');
            eyeStatus = true;
        }
        else {
            eyeHtml.attr('class', 'hideLoginForm__eyeStatusFalse');
            passwordUser.attr('type', 'password');
            eyeStatus = false;
        }
    })

    // checkbox

    let rememberUser = $('#rememberUser');
    let rememberUserImg = $('label[for=rememberUser] img');
    

    $('label[for=rememberUser] ').click(function(){
         if(!rememberUser.prop('checked')){
            rememberUserImg.css('display','block')
         }
         else {
            rememberUserImg.css('display','none')
        }
    });

    

});



