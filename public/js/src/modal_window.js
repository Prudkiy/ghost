
$( document ).ready(function() {

    let lastModelWindow = '';

    function ModalWindowLogin () { // создаем окно для авторизации

        lastModelWindow = 'loginWindow';
        
                $('#modalWindow__thisContent').html($('#loginForm').html()); // поместить контент в обложку
                $('.modalWindow__title').html($('#hideLoginForm').attr('name'));

                let rememberUser = $('label[for=rememberUser] img');
                let statusRemember = false;
                const regName = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;
                let formComplies = true;
                let name = $('#hideLoginForm__nameUser');
                let password = $('#hideLoginForm__passwordUser');

                $('.modalWindow').css('display', 'flex');

                $('label[for=rememberUser]').click(()=>{ // клик по чекбоску
                    if(!statusRemember) {
                        rememberUser.css('display', 'block');
                        statusRemember = true;
                    }
                    else {
                        rememberUser.css('display', 'none');
                        statusRemember = false;
                    }
                    
                })

                $('#hideLoginForm__button').click(()=>{ // проверяем данные перед отправкой
                    

                    const inputOk = function (input) { // если поле ввода катит
                    if (formComplies) formComplies = true;
                    $(input).css('display', 'none')
                    };
                    const inputNok = function (input) { // если поле ввода не катит
                    formComplies = false;
                    $(input).css('display', 'block')
                    };
        
                    if (!regName.test(name.val())) inputNok('.hideLoginForm__nameUser'); // проверяем поле name
                    else inputOk('.hideLoginForm__nameUser');
                    if (!regName.test(password.val())) inputNok('.hideLoginForm__passwordUser'); // проверяем поле password
                    else inputOk('.hideLoginForm__passwordUser');
        
                    if (formComplies) { // если все гуд, отправляем форму
                        
                    } 
                })
        

    }

    function ModalWindowRegistration () { // создаем окно для регистрации
        lastModelWindow = 'RegistrationWindow';
                $('#modalWindow__thisContent').html($('#registrationForm').html()); // поместить контент в обложку
                $('.modalWindow__title').html($('#hideRegForm').attr('name'));

                let name = $('#nameRegistration');
                let email = $('#emailRegistration');
                let password = $('#passRegistration');
                let passwordDuble = $('#passRegistrationDuble');
                let submitBut = $('#buttonRegistration');
                formComplies = true;
                const regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                const regName = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

                $('.modalWindow').css('display', 'flex');

                submitBut.click(()=>{ // проверяем данные перед отправкой
                    

                    const inputOk = function (input) { // если поле ввода катит
                        if (formComplies) formComplies = true;
                        $(input).css('display', 'none');
                    };
                    const inputNok = function (input) { // если поле ввода не катит
                        formComplies = false;
                        $(input).css('display', 'block');
                    };
        
                    if (!regName.test(name.val())) inputNok('.nameRegistration'); // проверяем поле name
                    else inputOk('.nameRegistration');
                    if (!regEmail.test(email.val())) inputNok('.emailRegistration'); // проверяем поле email
                    else inputOk('.emailRegistration');
                    if (!regName.test(password.val())) inputNok('.passRegistration'); // проверяем поле password
                    else inputOk('.passRegistration');
                    if (password.val() !== passwordDuble.val() || !regName.test(password.val())) inputNok('.passRegistrationDuble'); // проверяем поле password duble
                    else inputOk('.passRegistrationDuble');
        
                    if (formComplies) { // если все гуд, отправляем форму
                        
                    } 
                })

    }


    $('#formLoginButton').click(ModalWindowLogin); // окрыть окно авторизации
    $('#formRegistrationButton').click(ModalWindowRegistration); // окрыть окно регистрации

    $('.modalWindow__close').click(()=>{ // закрыть модальное окно и очистить его

        if (lastModelWindow === 'loginWindow') {
            $('.hideLoginForm__blockInfoError').css('display', 'none');
            $('label[for=rememberUser] img').css('display', 'none');
        }
        else if (lastModelWindow === 'RegistrationWindow') {
            $('.hideLoginForm__blockInfoError').css('display', 'none');
        }
    

            $('#modalWindow__thisContent').html(''); 
            $('.modalWindow__title').html('');

            $('.modalWindow').css('display', 'none');
    }); 


});



