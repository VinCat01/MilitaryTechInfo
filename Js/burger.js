var openbtn = document.querySelector('.burger_button')
var burger = document.querySelector('.burger')
var close = document.querySelector('.burger_btn')

openbtn.addEventListener('click', () => {
    burger.classList.toggle('open')
}
);

close.addEventListener('click', () => {
    burger.classList.toggle('open')
}
);