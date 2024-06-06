const menu = document.querySelector('.menu');
const linkContainer = document.querySelector('.list-container');
const main = document.querySelector('#main');
const sticky = menu.offsetTop;
const btnMenu = document.querySelector('.btn-menu');
let on_off = true;

btnMenu.addEventListener('click', () => {
    
    if (on_off) {
       linkContainer.style.left = "0";
       
       on_off = false;
    }else{
        on_off = false;
        linkContainer.style.left = "-100%";
        on_off = true;
    }

});


