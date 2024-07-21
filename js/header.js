// Notification Section
let notification = document.getElementById("notification")

function closeWindow() {
   notification.classList.add('notification_active');
}






// Search Section
let search = document.getElementsByClassName("search")

function toogleEventSearch() {
   search[0].classList.toggle("search_active")
   // console.log("HELLO");
}





// Burger Menu Section
let burgerMenu = document.getElementById("burger_menu");
let burgerIcon = document.getElementById("burger_icon");
let burgerX = document.getElementById("burgerx");
let burgerRight = document.getElementById("burger_right");

burgerIcon.addEventListener('click', function () {
    burgerMenu.classList.add('burger_open');
    // console.log("Hello")
})
burgerX.addEventListener('click', function () {
    burgerMenu.classList.add('burger_close');
    burgerMenu.classList.remove('burger_close');
    burgerMenu.classList.remove('burger_open');
    // console.log("Hello")
})
burgerRight.addEventListener('click', function () {
    burgerMenu.classList.add('burger_close');
    burgerMenu.classList.remove('burger_close');
    burgerMenu.classList.remove('burger_open');
    // console.log("Hello")
})






// Burger Lorem Section
let lorem = document.getElementsByClassName("lorem");

function toggleLoremVisible(i) {
   lorem[i].classList.toggle("loremVisible")
   // console.log("Hi Guysss");
}






// Cart Summary Menu Section
let summaryMenu = document.getElementById("cart");
let summaryIcon = document.getElementById("summary_icon");
let summaryX = document.getElementById("summaryX");
let cartLeft = document.getElementById("cart_left");

summaryIcon.addEventListener('click', function () {
    summaryMenu.classList.add('summary_open');
    // console.log("Hello")
})
summaryX.addEventListener('click', function () {
    summaryMenu.classList.add('summary_close');
    summaryMenu.classList.remove('summary_close');
    summaryMenu.classList.remove('summary_open');
    // console.log("Hello")
})
cartLeft.addEventListener('click', function () {
    summaryMenu.classList.add('summary_close');
    summaryMenu.classList.remove('summary_close');
    summaryMenu.classList.remove('summary_open');
    // console.log("Hello")
})






// Remove Cart Section
let removeCart = document.getElementsByClassName("remove_cart")
let cell = document.getElementsByClassName("cell")

function removeCell(i) {
   if (cell[i]) {
      cell[i].classList.add("cell_visible");
      // console.log("Hi Guysss");
   }
}
