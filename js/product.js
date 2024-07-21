// Input - Number Section
let num = document.getElementById('num')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let sum = 2;

plus.addEventListener('click', function() {
   if (sum < 99) {
      sum ++;
      if (sum < 10) {
         sum = "0" + sum;
      }else {
         sum = sum;
      }
      num.innerHTML = sum;
   }
})

minus.addEventListener('click', function() {
   if (sum > 1){
      sum --;
      if (sum < 10) {
         sum = "0" + sum;
      }else {
         sum = sum;
      }
      num.innerHTML = sum;
  }
})






// Wishlist Section
function Wishlist() {
    var wishlist = document.getElementById("wishlist");
    wishlist.classList.toggle('wishlist_red')
    console.log("visvis qirmizi");
 }





 
 // Table Color Section
let colorCircle = document.getElementsByClassName("color_circle");

function color() {
   colorCircle[0].classList.toggle('color_circle_active')
}




// Emoji Section
function emoji() {
   let smile = document.getElementById("smile");
   smile.classList.toggle('smile_active')
   let emoji = document.getElementById("emoji");
   emoji.classList.toggle('emoji_active')
}






// Product Tabs Section
let additional = document.getElementById("additional")
let questions = document.getElementById("questions")
let reviews = document.getElementById("reviews")

let li_add = document.getElementById("li_add")
let li_ques = document.getElementById("li_ques")
let li_rev = document.getElementById("li_rev")

function visibleAdd() {
    additional.style.display = "flex";
    questions.style.display = "none";
    reviews.style.display = "none";
    li_add.classList.add("li_active");
    li_ques.classList.remove("li_active");
    li_rev.classList.remove("li_active");
    // console.log("salam1");
}

function visibleQues() {
    additional.style.display = "none";
    questions.style.display = "flex";
    reviews.style.display = "none";
    li_add.classList.remove("li_active");
    li_ques.classList.add("li_active");
    li_rev.classList.remove("li_active");
    // console.log("salam2");
}

function visibleRev() {
    additional.style.display = "none";
    questions.style.display = "none";
    reviews.style.display = "flex";
    li_add.classList.remove("li_active");
    li_ques.classList.remove("li_active");
    li_rev.classList.add("li_active");
    // console.log("salam3");
}






//Emoji Input Section
let emoji1 = document.getElementById("emoji1");
let emoji2 = document.getElementById("emoji2");
let emoji3 = document.getElementById("emoji3");
let emoji4 = document.getElementById("emoji4");
let emoji5 = document.getElementById("emoji5");
let emoji6 = document.getElementById("emoji6");
let feedback = document.getElementById('feedback');

emoji1.addEventListener('click', function() {
   feedback.value += '❤️'; 
});

emoji2.addEventListener('click', function() {
   feedback.value += '🙌'; 
});

emoji3.addEventListener('click', function() {
   feedback.value += '👍'; 
});

emoji4.addEventListener('click', function() {
    feedback.value += '😊'; 
});

emoji5.addEventListener('click', function() {
    feedback.value += '🤣';
});

emoji6.addEventListener('click', function() {
   feedback.value += '😡'; 
});





