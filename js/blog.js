// Blog Cards Transform Section
let oneRow = document.getElementById("one_row");
let oneColumn = document.getElementById("one_column");
let two = document.getElementById("two");
let three = document.getElementById("three");
let cards = document.getElementsByClassName("frame_card");


oneRow.addEventListener('click', function () {
    for (let i = 0; i < cards.length; i++) {
         cards[i].style.display = '';
         cards[i].style.height = '';
         cards[i].style.width = '100%';  
    }
});

oneColumn.addEventListener('click', function () {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.width = '100%';
        cards[i].style.height = '340px';
        cards[i].style.display = 'flex';
    }
});

two.addEventListener('click', function () {
    for (let i = 0; i < cards.length; i++) {
         cards[i].style.display = '';
         cards[i].style.height = '';
         cards[i].style.width = '49%';  
    }
});

three.addEventListener('click', function () {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.width = '';
        cards[i].style.height = '';
        cards[i].style.display = '';
    }
});

