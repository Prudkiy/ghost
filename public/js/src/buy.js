$( document ).ready(function() {


const listSelectCom = $('.buy__form__select ul');
const listSelectButtom = $('.buy__form__select p');
listSelectCom.hide();
let listSelectComStatus = false;

listSelectButtom.click(()=>{
    if(!listSelectComStatus){ listSelectCom.slideDown(); listSelectComStatus = true}
    else { listSelectCom.slideUp(); listSelectComStatus = false}
});

$('.buy__form__select ul li').click(function (event) {
    let thisClick = $(this);
    listSelectButtom.html('.' + thisClick.html());
    listSelectCom.slideUp();
    listSelectComStatus = false
});




    

});