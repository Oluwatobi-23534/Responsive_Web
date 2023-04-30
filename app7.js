const barMenu = document.querySelector('.barMenu');
const navLinks = document.querySelector('.navlinks');
barMenu.addEventListener('click',(e)=> {
    console.log(navLinks.style.display=='none');
    if(navLinks.style.display=='block') {
        navLinks.style.display='none';
    }else {
        navLinks.style.display='block';
    }
})

window.onresize = function() {

}


console.dir(document);
console.log(barMenu);
