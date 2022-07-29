const views = document.getElementById('views');
const viewAbbreviation = document.getElementById('kilo-million');
const price = document.getElementById('price');
const toggle = document.getElementById('switch');

// * declaring defaults for page load
    // view count
    views.innerHTML = 100;
    // view count abbreviaton k for thousand
    viewAbbreviation.innerHTML = 'K';

    // price amount $16 
    price.innerHTML = parseFloat(16).toFixed(2);

    // discount rate
    let discount = 1;
// *

// ** give 25% off to the current price when toggle activates and go to default when it deactivates
toggle.addEventListener('change', ()=>{
    if(toggle.checked){
        discount = 0.75;
        price.innerHTML = parseFloat( price.innerHTML * discount ).toFixed(2);
    }else{
        discount = 1;
        price.innerHTML = parseFloat( price.innerHTML * (discount / 0.75) ).toFixed(2);
    }
});

const slider = document.getElementById('viewRange').oninput = function(){
    // * to change background of the view range input.
    let colorValue = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right,var(--light-green) ' 
    + colorValue + '%, var(--slider-default) ' + colorValue + '%, var(--slider-default) 100%)' 
    
    // * to bing below redeclared M to K as on input change if the value isn't 1 million
    if(this.value !== 100){
        viewAbbreviation.innerHTML = 'K';
    }

    // * I'm not a pricing expert, so I left prices proportional to the pageview amount 
    // and intentionally not use any math function becaue in real case scenario the price
    // will be inserted manually anyway without any mathematical relation to each other.
    let amount;

    if(this.value == 0){
        views.innerHTML = 5;
        amount = 0.8;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 12.5){
        views.innerHTML = 10;
        amount = 1.6;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 25){
        views.innerHTML = 20;
        amount = 3.2;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 37.5){
        views.innerHTML = 50;
        amount = 8;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 50){
        views.innerHTML = 100;
        amount = 16;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 62.5){
        views.innerHTML = 150;
        amount = 24;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 75){
        views.innerHTML = 300;
        amount = 32;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 87.5){
        views.innerHTML = 500;
        amount = 80;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
    }else if(this.value == 100){
        views.innerHTML = 1;
        amount = 160;
        price.innerHTML = parseFloat( amount * discount ).toFixed(2);
        viewAbbreviation.innerHTML = 'M';
    }
}

