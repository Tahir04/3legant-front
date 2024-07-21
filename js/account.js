// Account Section
let accForms = document.getElementById("acc_forms")
let accAdress = document.getElementById("acc_address")
let accOrders = document.getElementById("acc_orders")
let accWishlist = document.getElementById("acc_wishlist")

let liForms = document.getElementById("li_forms")
let liAdress = document.getElementById("li_address")
let liOrders = document.getElementById("li_orders")
let liWishlist = document.getElementById("li_wishlist")





function visibleForms() {
    accForms.style.display = "flex";
    accAdress.style.display = "none";
    accOrders.style.display = "none";
    accWishlist.style.display = "none";
    liForms.classList.add("li_active");
    liAdress.classList.remove("li_active");
    liOrders.classList.remove("li_active");
    liWishlist.classList.remove("li_active");
    // console.log("salam1");
}



function visibleAddress() {
    accForms.style.display = "none";
    accAdress.style.display = "flex";
    accOrders.style.display = "none";
    accWishlist.style.display = "none";
    liForms.classList.remove("li_active");
    liAdress.classList.add("li_active");
    liOrders.classList.remove("li_active");
    liWishlist.classList.remove("li_active");
    // console.log("salam2");
}



function visibleOrders() {
    accForms.style.display = "none";
    accAdress.style.display = "none";
    accOrders.style.display = "flex";
    accWishlist.style.display = "none";
    liForms.classList.remove("li_active");
    liAdress.classList.remove("li_active");
    liOrders.classList.add("li_active");
    liWishlist.classList.remove("li_active");
    // console.log("salam3");
}



function visibleWishlist() {
    accForms.style.display = "none";
    accAdress.style.display = "none";
    accOrders.style.display = "none";
    accWishlist.style.display = "flex";
    liForms.classList.remove("li_active");
    liAdress.classList.remove("li_active");
    liOrders.classList.remove("li_active");
    liWishlist.classList.add("li_active");
    // console.log("salam4"); 
}




// Select-Option Section
let select = document.getElementById("select");
select.addEventListener("change", function() {
    switch(parseInt(select.value)) {
        case 0:
            visibleForms();
            break;
        case 1:
            visibleAddress();
            break;
        case 2:
            visibleOrders();
            break;
        case 3:
            visibleWishlist();
            break;
        case 4:
            window.location.href = "./sign_in.html";
            break;
        default:
            break;
    }
});
