'use strict';
const Logo = document.querySelector('.header__logo');
const Hill1 = document.querySelector('.mountains__hill1');
const Hill2 = document.querySelector('.mountains__hill2');
const Hill3 = document.querySelector('.mountains__hill3');
const Hill4 = document.querySelector('.mountains__hill4');
const Hill5 = document.querySelector('.mountains__hill5');
const Leaf = document.querySelector('.mountains__leaf');
const Plant = document.querySelector('.mountains__plant');
const Tree = document.querySelector('.mountains__tree');
const Text = document.querySelector('.main__text');
const Wrapper = document.querySelector('.wrapper');

const ScreenWidth = Tree.offsetWidth;
console.log(ScreenWidth);
if(ScreenWidth < 1022){
   Logo.style.fontSize = (ScreenWidth * 0.033) + 'px';
   Wrapper.style.height = (ScreenWidth * 0.569) + 'px';
   Text.style.fontSize = (ScreenWidth * 0.05) + 'px';
}


document.addEventListener("scroll", function (event){
    let value = window.scrollY;

    Text.style.marginTop = (value*2) + "px";
    
    Leaf.style.marginTop = (value*-0.4) + "px";
    Leaf.style.marginLeft = (value*0.3) + "px";

    Hill5.style.marginLeft = (value*0.5) + "px";

    Hill4.style.marginLeft = (value*-0.5) + "px";

    Hill3.style.marginLeft = (value*0.2) + "px";

    Hill2.style.marginLeft = (value*-0.2) + "px";

    Hill1.style.marginTop = (value*0.7) + "px";

    Tree.style.marginLeft = (value*-0.3) + "px";
});