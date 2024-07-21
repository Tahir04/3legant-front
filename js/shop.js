// Carousel Section
let heart = document.getElementsByClassName("heart")
let add_cart = document.getElementsByClassName("add_cart")

function toogleEventVisible(i) {
   heart[i].classList.toggle("visibleHeart")
   add_cart[i].classList.toggle("visibleButton")
   // console.log("HELLO");
}






// Favorite Section
let red_heart = document.getElementsByClassName("red_heart")

function red(i) {
   heart[i].classList.toggle("red_heart")
}






// Product Cards Transform Section
let cards = document.getElementsByClassName("card");
let cardDown = document.getElementsByClassName("card_down")
let oneRow = document.getElementById("one_row");
let oneColumn = document.getElementById("one_column");
let two = document.getElementById("two");
let three = document.getElementById("three");

oneRow.addEventListener('click', function () {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = '';
        cards[i].style.height = '';  
        cards[i].style.width = '100%';
        cardDown[i].style.height = ''
        cardDown[i].style.paddingTop = ''  
    }
});

oneColumn.addEventListener('click', function () { 
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.width = '49%';
        cards[i].style.height = '340px';
        cards[i].style.display = 'flex';
        cardDown[i].style.height = '100%'
        cardDown[i].style.paddingTop = '120px'
    }
});

two.addEventListener('click', function () {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = '';
        cards[i].style.height = '';
        cards[i].style.width = '49%';
        cardDown[i].style.height = ''
        cardDown[i].style.paddingTop = ''  
    }
});

three.addEventListener('click', function () {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.width = '';
        cards[i].style.height = '';
        cards[i].style.display = '';
        cardDown[i].style.height = ''
        cardDown[i].style.paddingTop = ''
    }
});

