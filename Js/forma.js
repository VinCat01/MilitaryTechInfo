const send_btn1 = document.querySelector(".send_btn1")
const send_btn2 = document.querySelector(".send_btn2")
const send_btn3 = document.querySelector(".send_btn3")

const form1 = document.querySelector(".form_oprosa_1")
const form2 = document.querySelector(".form_oprosa_2")
const form3 = document.querySelector(".form_oprosa_3")

send_btn1.addEventListener('click', () => {
    form1.classList.add('hidden')
    form2.classList.add('open')
}
);

send_btn2.addEventListener('click', () => {
    form2.classList.remove('open')
    form3.classList.add('open')
}
);
send_btn3.addEventListener('click', () => {
    form3.classList.remove('open')

}
);

