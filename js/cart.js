let shop = document.getElementById("shop")
let check = document.getElementById("check")
let order = document.getElementById("order")

let li_shop = document.getElementById("li_shop")
let li_check = document.getElementById("li_check")
let li_orders = document.getElementById("li_orders")

let next1 = document.getElementById("next1")
let next2 = document.getElementById("next2")


next1.addEventListener('click' , function () { 
    shop.style.display="none"
    check.style.display="flex"
    order.style.display="none"
    li_shop.classList.add("pr_green")
    li_check.classList.add("pr_active")
})

next2.addEventListener('click' , function () { 
    shop.style.display="none"
    check.style.display="none"
    order.style.display="flex"
    li_check.classList.add("pr_green")
    li_orders.classList.add("pr_active")
})



// Input_Number
let carr = [2, 2, 2];

function plus(i) {
    if (carr[i] < 99) {
        carr[i]++;
        updateNumber(i);
    }
    // console.log("plus clicked");
}

function minus(i) {
    if (carr[i] > 1) {
        carr[i]--;
        updateNumber(i);
    }
    // console.log("minus clicked");
}

function updateNumber(i) {
    var elements = document.getElementsByClassName("number" + i);
    for (var j = 0; j < elements.length; j++) {
        elements[j].innerHTML = carr[i];
    }
}
