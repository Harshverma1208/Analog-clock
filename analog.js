"use strict";

const hourEl=document.querySelector(".hour"); 
const minuteEl=document.querySelector(".minute"); 
const secondEl=document.querySelector(".second"); 
const timeEl=document.querySelector(".time"); 
const dateEl=document.querySelector(".date"); 
const toggleBtn=document.querySelector(".toggle"); 

// code for light ode and dark mode
toggleBtn.addEventListener('click',(e)=>{
    const html = document.querySelector('html');

    if(html.classList.contains("Dark")){
        html.classList.remove('Dark')
        e.target.innerHtml = "Dark Mode"
    }else{
        html.classList.remove('Dark')
        e.target.innerHtml = "Light Mode"
    }
})