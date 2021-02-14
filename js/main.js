

// page loader
var pageLoader;

function pageLoad() {
    pageLoader = setTimeout(showPage, 1000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("pageContent").style.display = "block";
}

// smoth Scroll
var scroll = new SmoothScroll('a[href*="#"]');

// Configure Search Input Section

let searchIcon = document.getElementById('searchIcon');
let searchForm = document.getElementById('searchForm');
let closeIcon = document.getElementById('closeIcon');

searchIcon.addEventListener('click', function () {
    searchIcon.classList.add('hidden');
    searchForm.classList.add('active');
    closeIcon.classList.remove('hidden');
});
closeIcon.addEventListener('click', function () {
    searchIcon.classList.remove('hidden');
    searchForm.classList.remove('active');
    closeIcon.classList.add('hidden');
});

// Mobile Menu

let menuOn = document.getElementById('menuOn');
let menuOff = document.getElementById('menuOff');
let navMenu = document.getElementById('navMenu');

menuOn.addEventListener('click', function () {
    navMenu.classList.add('active');
});

menuOff.addEventListener('click', function () {
    navMenu.classList.remove('active');
});

// Sticky Navber
window.addEventListener('scroll', function () {
    let navStick = document.getElementById('headerNav');
    navStick.classList.toggle('sticky', window.scrollY > 0)
});



// Cart Page
let cart = document.getElementById('cart');
let cartBox = document.getElementById('cartBox');
let cartClose = document.getElementById('cartClose');
let PageOverlay = document.getElementById('PageOverlay');
let cartItem1 = document.getElementById('cartItem1');
let removeItem1 = document.getElementById('removeItem1');
let cartItem2 = document.getElementById('cartItem2');
let removeItem2 = document.getElementById('removeItem2');
let cardBody = document.getElementById('cardBody');

cart.addEventListener('click',function(){
    cartBox.classList.add('show-cart');
    PageOverlay.classList.add('is-visible');
});

cartClose.addEventListener('click',function(){
    cartBox.classList.remove('show-cart');
    PageOverlay.classList.remove('is-visible');
});

removeItem1.addEventListener('click',function(){
    cartItem1.innerHTML = 'Item Removed'
    cartItem1.style.boxShadow = 'none'
    setTimeout(removeitem,1000);
    function removeitem(){
        cartItem1.innerHTML = ''
    }
});
removeItem2.addEventListener('click',function(){
    cartItem2.innerHTML = 'Item Removed'
    cartItem2.style.boxShadow = 'none'
    setTimeout(removeitem,1000);
    function removeitem(){
        cartItem2.innerHTML = ''
    }
});


// Cart Amount
// Product Amount Increamen and Decreament function
var product_total_amt = document.getElementById('product_total_amt');

const decreaseNumber = (incdec,itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    //console.log(itemval.value);
    if(itemval.value <= 1 ){
        itemval.value = 1;
        alert('You have to buy at least one product.');  
    }else{
        itemval.value = parseInt(itemval.value) -1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) -50;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) -50;
    }
}

const increaseNumber = (incdec,itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    if(itemval.value >= 5 ){
        itemval.value = 5;
        alert('You can buy Maximum 5 products at a time.'); 
    }else{
        itemval.value = parseInt(itemval.value) +1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) +50;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) +50;
    }
}



// Single Product Thumbnail Gallery

var productImg = document.getElementById("productImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function () {
    productImg.src = smallImg[0].src;
}

smallImg[1].onclick = function () {
    productImg.src = smallImg[1].src;
}

smallImg[2].onclick = function () {
    productImg.src = smallImg[2].src;
}

smallImg[3].onclick = function () {
    productImg.src = smallImg[3].src;
}

// Cart Quantity Icrement and Decrement

let quantity = document.getElementById('singleQuantity').value;
let increment = document.getElementById('singleIncreament');
let decrement = document.getElementById('singleDecrement');

increment.addEventListener('click',function(){
    quantity = isNaN(quantity) ? 0 : quantity;
    quantity++;
    document.getElementById('singleQuantity').value = quantity;
});
decrement.addEventListener('click',function(){
    if(quantity>1){
        quantity = isNaN(quantity) ? 0 : quantity;
        quantity--;
        document.getElementById('singleQuantity').value = quantity;
    }else{
        alert('You have to add at least 1 product.');
    }

});