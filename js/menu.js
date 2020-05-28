'use strict';
{
    const menu = document.getElementById('menu');
    const closeTimes = document.getElementById('closeTimes');
    const body = document.querySelector('body');

    

    menu.addEventListener('click',()=>{
        body.classList.toggle('menu-opened');
    });
    closeTimes.addEventListener('click',()=>{
        body.classList.toggle('menu-opened');
    });
}