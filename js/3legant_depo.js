// // Search Section
// let search = document.getElementsByClassName("search")

// function toogleEventSearch() {
//    search[0].classList.toggle("search_active")
//    // console.log("HELLO");
// }





// // Wishlist Section
// function Wishlist() {
//    var wishlist = document.getElementById("wishlist");
//    wishlist.classList.toggle('wishlist_red')
//    console.log("visvis qirmizi");
// }





// // Table Color Section
// let colorCircle = document.getElementsByClassName("color_circle");

// function color() {
//    colorCircle[0].classList.toggle('color_circle_active')
// }





// // Carousel Section
// let heart = document.getElementsByClassName("heart")
// let add_cart = document.getElementsByClassName("add_cart")

// function toogleEventVisible(i) {
//    heart[i].classList.toggle("visibleHeart")
//    add_cart[i].classList.toggle("visibleButton")
//    // console.log("HELLO");
// }




// // Favorite Section
// let red_heart = document.getElementsByClassName("red_heart")

// function red(i) {
//    heart[i].classList.toggle("red_heart")
// }




// // Burger Menu Section
// let burgerMenu = document.getElementById("burger_menu");
// let burgerIcon = document.getElementById("burger_icon");
// let burgerX = document.getElementById("burgerx");
// let burgerRight = document.getElementById("burger_right");

// burgerIcon.addEventListener('click', function () {
//     burgerMenu.classList.add('burger_open');
//     // console.log("Hello")
// })
// burgerX.addEventListener('click', function () {
//     burgerMenu.classList.add('burger_close');
//     burgerMenu.classList.remove('burger_close');
//     burgerMenu.classList.remove('burger_open');
//     // console.log("Hello")
// })
// burgerRight.addEventListener('click', function () {
//     burgerMenu.classList.add('burger_close');
//     burgerMenu.classList.remove('burger_close');
//     burgerMenu.classList.remove('burger_open');
//     // console.log("Hello")
// })





// // Burger Lorem Section
// let lorem = document.getElementsByClassName("lorem");

// function toggleLoremVisible(i) {
//    lorem[i].classList.toggle("loremVisible")
//    // console.log("Hi Guysss");
// }





// // Cart Summary Menu Section
// let summaryMenu = document.getElementById("cart");
// let summaryIcon = document.getElementById("summary_icon");
// let summaryX = document.getElementById("summaryX");
// let cartLeft = document.getElementById("cart_left");

// summaryIcon.addEventListener('click', function () {
//     summaryMenu.classList.add('summary_open');
//     // console.log("Hello")
// })
// summaryX.addEventListener('click', function () {
//     summaryMenu.classList.add('summary_close');
//     summaryMenu.classList.remove('summary_close');
//     summaryMenu.classList.remove('summary_open');
//     // console.log("Hello")
// })
// cartLeft.addEventListener('click', function () {
//     summaryMenu.classList.add('summary_close');
//     summaryMenu.classList.remove('summary_close');
//     summaryMenu.classList.remove('summary_open');
//     // console.log("Hello")
// })






// // Remove Cart Section
// let removeCart = document.getElementsByClassName("remove_cart")
// let cell = document.getElementsByClassName("cell")

// function removeCell(i) {
//    if (cell[i]) {
//       cell[i].classList.add("cell_visible");
//       // console.log("Hi Guysss");
//    }
// }





// // Notification Section
// let notification = document.getElementById("notification")

// function closeWindow() {
//    notification.classList.add('notification_active');
// }






// // Slider Section :)
// let list = document.querySelector('.slider .list');
// let items = document.querySelectorAll('.slider .list .item');
// let dots = document.querySelectorAll('.slider .dots li');
// let back = document.getElementById("back");
// let next = document.getElementById("next");
// let sliderArea = document.getElementById("slider");

// let active = 0;
// let lengthItems = items.length - 1;

// function reloadSlider() {
//    let checkLeft = items[active].offsetLeft; 
//    list.style.left = -checkLeft + "px";

//    let lastActiveDot = document.querySelector('.slider .dots li.active');
//    lastActiveDot.classList.remove("active");
//    dots[active].classList.add("active");
// }

// next.addEventListener('click', function () {
//    if (active + 1 > lengthItems) {
//       active = 0;
//    } else {
//       active += 1;
//    }
//    reloadSlider();
// });

// back.addEventListener('click', function() {
//    if (active - 1 < 0) {
//       active = lengthItems;
//    } else {
//       active -= 1;
//    }
//    reloadSlider();
// });

// let time = setInterval(() => next.click(), 5000);

// sliderArea.addEventListener("mouseover", function(){
//    clearInterval(time);
// });

// sliderArea.addEventListener("mouseleave", function(){ 
//    time = setInterval(() => next.click(), 5000);
// });

// // list.innerHTML += items[0].innerHTML;















// // Input - Number Section
// let num = document.getElementById('num')
// let plus = document.getElementById('plus')
// let minus = document.getElementById('minus')
// let sum = 2;

// plus.addEventListener('click', function() {
//    if (sum <= 98) {
//       sum ++;
//       if (sum < 10) {
//          sum = "0" + sum;
//       }else {
//          sum = sum;
//       }
//       num.innerHTML = sum;
//    }
// })

// minus.addEventListener('click', function() {
//    if (sum > 1){
//       sum --;
//       if (sum < 10) {
//          sum = "0" + sum;
//       }else {
//          sum = sum;
//       }
//       num.innerHTML = sum;
//   }
// })



// Blog Cards Transform Section
// let two = document.getElementById("two");


// two.addEventListener('click', function () {
//     let frameCards = document.querySelectorAll('.frame_card');
    
//     for (let i = 0; i < frameCards.length && i < 8; i++) {
//         frameCards[i].classList.add('twoXtwo');
//         console.log("helloo")
//     }
// })



// let arr = [2, 2, 2];

// function plus(i) {
//     if (arr[i] < 99) {
//         arr[i]++;
//         updateNumber(i);
//     }
//     // console.log("plus clicked");
// }

// function minus(i) {
//     if (arr[i] > 1) {
//         arr[i]--;
//         updateNumber(i);
//     }
//     // console.log("minus clicked");
// }

// function updateNumber(i) {
//     var elements = document.getElementsByClassName("number" + i);
//     for (var j = 0; j < elements.length; j++) {
//         elements[j].innerHTML = arr[i];
//     }
// }

// function updateNumber(i) {
//     if(i===0){
//         document.getElementsByClassName("number0")[i].innerHTML = arr[i];
//     } else if(i===1){
//         document.getElementsByClassName("number1")[i].innerHTML = arr[i];
//     } else if(i===2){
//         document.getElementsByClassName("number2")[i].innerHTML = arr[i];
//     }
// }
    