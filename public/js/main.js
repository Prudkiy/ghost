

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

    // data checking input

    function checkDataFormFun(){

        const regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regName = /^[A-Za-zА-Яа-я _]*[A-Za-zА-Яа-я][A-Za-zА-Яа-я _]*$/;
        let hideLoginForm__nameUser = document.getElementById('hideLoginForm__nameUser');
        let hideLoginForm__passwordUser = document.getElementById('hideLoginForm__passwordUser');

        return (typeData) => {

            let formComplies = true;

            const inputOk = function (input) { // если поле ввода катит
                if (formComplies) formComplies = true;
                input.removeAttribute("class", borderRed);
            };
            const inputNok = function (input) { // если поле ввода не катит
                formComplies = false;
                input.setAttribute("class", borderRed);
            };

            if (!regName.test(name.value)) inputNok(name); // проверяем поле name
            else inputOk(name);
            if (!regEmail.test(email.value)) inputNok(email); // проверяем поле email
            else inputOk(email);
            if (regNum.test(count.value) && count.value >= 10) inputNok(count); // проверяем поле count
            else inputOk(count);

            if (formComplies) {
                
            }; // если все гуд, отправляем форму
        }

    }

    let checkDataForm = checkDataFormFun();
    checkDataForm();


    

});



