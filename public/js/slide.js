$( document ).ready(function() {

    let summElSlide = $('.slide__nav > div').length; // определяем количество слайдов
    summElSlide = summElSlide - 1;
    let intervalSlide; // тут будет функция setInterval
    let positionSlide = 0; // начальная позиця слайдов (с нуля)
    let classActive = 'slide__thisButtom'; // название класса для активной кнопки
    let nameMainClassSlide = 'slide__text_'; // название базового класса
    let timeSlideInerval = 3000; // время смены слайдов в м/с

    function activeButSlide (numSlide) { // функция смены активной кнопки
        $('.slide__nav div').removeClass(classActive);
        $('.slide__nav .' + numSlide).addClass(classActive);
    }

    function activeTextSlide (numSlide) { // функция смены активного текста
        $('.slide__text p').slideUp();
        $('.slide__text .' + numSlide).slideDown();
    }

    function activeNameSlide (numSlide) { // функция смены активного имени
        $('.slide__nameText p').css('opacity', '0');
        setTimeout(()=>{
            $('.slide__nameText p').hide();
            
        $('.slide__nameText .' + numSlide).show();
        $('.slide__nameText .' + numSlide).css('opacity', '1');
        },500);
        
    }

    function mouseInText () { // курсор на тексте
        clearInterval(intervalSlide);
    }

    function mouseOutText () { // курсор покинул текс
        slide(positionSlide);
    }

    function slide (numSlide) { // функция интервала
        positionSlide = numSlide ;
        
        intervalSlide = setInterval(function(){

            if(positionSlide >= summElSlide ) positionSlide = -1;
            if (positionSlide !== summElSlide )positionSlide++;
            
            activeButSlide (nameMainClassSlide + positionSlide) // функция для кнопки
            activeTextSlide (nameMainClassSlide + positionSlide) // указать активный текст
            activeNameSlide (nameMainClassSlide + positionSlide) // указать активное имя

            
            
        },
        timeSlideInerval);

    }

    $('.slide__nav > div').click(function(item){ // клик по кнопке

        let element = $(this);
        let thisElClass = element.attr('class');
        if ( thisElClass.indexOf(classActive) > 0 ) {
            thisElClass = thisElClass.substring(0, 13); // получить класс кнопки
        }

        clearInterval(intervalSlide);
        let thisNumSlide = thisElClass.substring(12, 13) // получить номер слайда
        activeButSlide (thisElClass); // указать активную кнопку
        activeTextSlide (thisElClass) // указать активный текст
        activeNameSlide (thisElClass) // указать активное имя
        slide(thisNumSlide); // запусить интервал от заданого номера слайда

    });

    $( '.slide__text' ).mouseenter( mouseInText ).mouseleave( mouseOutText ); // курсор вошел / вышел за текст

    slide(positionSlide);

});