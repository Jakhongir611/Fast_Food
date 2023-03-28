let doc = document
let body = doc.body
let form_modal = doc.forms.form_modal

let home = doc.querySelectorAll('.nav__link')[0]
let about = doc.querySelectorAll('.nav__link')[1]
let services = doc.querySelectorAll('.nav__link')[2]
let menu = doc.querySelectorAll('.nav__link')[3]
let contact = doc.querySelectorAll('.nav__link')[4]

let yakar_home = doc.querySelector('#home')
let yakar_about = doc.querySelector('#about')
let yakar_services = doc.querySelector('#services')
let yakar_menu = doc.querySelector('#menu')
let yakar_contact = doc.querySelector('#contact')

home.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: yakar_home.offsetTop - 0, behavior: 'smooth' })
    home.classList.add('active')
    about.classList.remove('active')
    services.classList.remove('active')
    menu.classList.remove('active')
    contact.classList.remove('active')

})
about.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: yakar_about.offsetTop - 0, behavior: 'smooth' })
    home.classList.remove('active')
    about.classList.add('active')
    services.classList.remove('active')
    menu.classList.remove('active')
    contact.classList.remove('active')
})
services.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: yakar_services.offsetTop - 0, behavior: 'smooth' })
    home.classList.remove('active')
    about.classList.remove('active')
    services.classList.add('active')
    menu.classList.remove('active')
    contact.classList.remove('active')
})
menu.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: yakar_menu.offsetTop - 0, behavior: 'smooth' })
    home.classList.remove('active')
    about.classList.remove('active')
    services.classList.remove('active')
    menu.classList.add('active')
    contact.classList.remove('active')
})
contact.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: yakar_contact.offsetTop - 0, behavior: 'smooth' })
    home.classList.remove('active')
    about.classList.remove('active')
    services.classList.remove('active')
    menu.classList.remove('active')
    contact.classList.add('active')
})




let man = doc.form_modal.man
let woman = doc.form_modal.woman

man.addEventListener('click', () => {
    woman.checked = false
})
woman.addEventListener('click', () => {
    man.checked = false
})



let modal = doc.querySelector('.button_modal')
let modal_okno = doc.querySelector('.modal')
let cros = doc.querySelector('.x')

let func1 = () => {
    modal_okno.classList.toggle('not_active');
    body.style.overflow = 'hidden'
}

let func2 = () => {
    modal_okno.classList.toggle('not_active');
    body.style.overflow = 'auto'
}

modal.addEventListener("click", func1)
cros.addEventListener("click", func2)

form_modal.addEventListener('submit', (event) => {
    event.preventDefault()
    let form_data = {}
    let inputs = doc.querySelectorAll('input')
    let man = doc.form_modal.man
    let woman = doc.form_modal.woman
    for (let item of inputs) {
        if (item.type == 'radio') {
            if (item.checked) {
                form_data[item.name] = item.value
            }
        } else {
            form_data[item.name] = item.value
        }
    }
    if (man.checked) {
        form_data.man = true
    }
    if (woman.checked) {
        form_data.woman = true
    }
    console.log(form_data)
    form_modal.reset()
})






let burger = doc.querySelector('.burg_menu')
let bg_top = doc.querySelector('.top')
let bg_mid = doc.querySelector('.mid')
let bg_bot = doc.querySelector('.bot')
let nav = doc.querySelector('.nav_burg')


burger.addEventListener('click', () => {
    bg_top.classList.toggle('top_active')
    bg_mid.classList.toggle('mid_active')
    bg_bot.classList.toggle('bot_active')
    nav.classList.toggle('nav__menu')
    nav.classList.toggle('nav_burg_active')
    nav.classList.toggle('nav__toggle_active')
    nav.classList.toggle('link_active')

})








let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: true,
    loop: true,
});



let scroll_top = window.pageYOffset

window.onscroll = function () { myFunction() };

function myFunction() {
    let scroll = doc.body.scrollTop || doc.documentElement.scrollTop;
    let height = doc.documentElement.scrollHeight - doc.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;
    doc.getElementById("my_bar_left").style.height = scrolled + "%";
    doc.getElementById("my_bar_right").style.height = scrolled + "%";
}
































    function showMenu(toggleId, navId) {
        const toggle = document.getElementById(toggleId);
        nav = document.getElementById(navId);

        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show-menu');
            })
        }
    }


    showMenu('nav-toggle', 'nav-menu')

    // remove menu mobile

    const navlink = document.querySelectorAll('.nav__link');

    function lineAction() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.remove('show-menu');
    }
    navlink.forEach(n => n.addEventListener('click', lineAction));

// //scroll section active link

// const section = document.querySelectorAll('section[id]');


// window.addEventListener('scroll', console.log(window));