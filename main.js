//якорь
//меню
//молалка
//прокрутка страницы
//form_data
//карта
//бегающая линия
//Хуррамов Жахонгир


let doc = document
let body = doc.body
let form_modal = doc.forms.form_modal

//якорь
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

})
about.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: yakar_about.offsetTop - 0, behavior: 'smooth' })
})
services.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: yakar_services.offsetTop - 0, behavior: 'smooth' })
})
menu.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: yakar_menu.offsetTop - 0, behavior: 'smooth' })
})
contact.addEventListener('click', (event) => {
    event.preventDefault()
    window.scrollTo({ top: yakar_contact.offsetTop - 0, behavior: 'smooth' })
})



//можно выбрать только одну кнопку
let man = doc.form_modal.man
let woman = doc.form_modal.woman

man.addEventListener('click', () => {
    woman.checked = false
})
woman.addEventListener('click', () => {
    man.checked = false
})


//модалка
//если модалка открывается то меню закрывается
let modal = doc.querySelector('.button_modal')
let modal_okno = doc.querySelector('.modal')
let cros = doc.querySelector('.x')
let navList = doc.querySelectorAll('.nav__list')

let func1 = () => {
    modal_okno.classList.toggle('not_active');
    body.style.overflow = 'hidden'
    bg_top.classList.remove('top_active')
    bg_mid.classList.remove('mid_active')
    bg_bot.classList.remove('bot_active')
    nav.classList.remove('nav_burg_active')
    nav.classList.remove('nav__toggle_active')
}

let func2 = () => {
    modal_okno.classList.toggle('not_active');
    body.style.overflow = 'auto'
}


//бургер меню
//если меню открывается то модалка закрывается
let burger = doc.querySelector('.burg_menu')
let bg_top = doc.querySelector('.top')
let bg_mid = doc.querySelector('.mid')
let bg_bot = doc.querySelector('.bot')
let nav = doc.querySelector('.nav_burg')


burger.addEventListener('click', () => {
    bg_top.classList.toggle('top_active')
    bg_mid.classList.toggle('mid_active')
    bg_bot.classList.toggle('bot_active')

    nav.classList.toggle('nav_burg_active')
    nav.classList.toggle('nav__toggle_active')

    modal_okno.classList.add('not_active');
})

modal.addEventListener("click", func1)
cros.addEventListener("click", func2)


















//функционал модалки
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

    let json = JSON.stringify(form_data)
    console.log(json);
})



//слайдер
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    allowTouchMove: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: true,
    loop: true,
    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        540: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
    },
});









//прокрутка страницы
let scroll_top = window.pageYOffset

window.onscroll = function myFunction() {
    let scroll = doc.body.scrollTop || doc.documentElement.scrollTop;
    let height = doc.documentElement.scrollHeight - doc.documentElement.clientHeight;
    let scrolled = (scroll / height) * 100;
    doc.getElementById("bar").style.width = scrolled + "%";

    // doc.getElementById("my_bar_left").style.height = scrolled + "%";
    // doc.getElementById("my_bar_right").style.height = scrolled + "%";

    let scroll_top = window.pageYOffset

    let ssilka = doc.querySelectorAll('.nav__link')
    for (let item of ssilka) {
        item.classList.remove('active')
    }
    if (scroll_top < 590) {
        ssilka[0].classList.add('active')
    }
    if (scroll_top > 590 && scroll_top < 900) {
        ssilka[1].classList.add('active')
    }
    if (scroll_top > 900 && scroll_top < 1500) {
        ssilka[2].classList.add('active')
    }
    if (scroll_top > 1500 && scroll_top < 2050) {
        ssilka[3].classList.add('active')
    }
    if (scroll_top > 2050 && scroll_top < 3300) {
        ssilka[4].classList.add('active')
    }
};



let sliderSlides = doc.querySelectorAll('.swiper-slide')
sliderSlides.forEach(element => {
    element.addEventListener('dragstart', dragStart)
    element.addEventListener('dragover', dragOver)
    element.addEventListener('dragleave', dragLeave)
    element.addEventListener('drop', Dropp)
    element.addEventListener('dragend', dragEnd)
});

let dragElement;
let el1;
let el1Vnutri;

function dragStart(event) {
    dragElement = event.target;
    dragElement.classList.add('dragging');

    el1 = this
    el1Vnutri = this.firstElementChild
}
function dragEnd(event) {
    this.style.border = '1px solid transparent'
}
function dragOver(event) {
    event.preventDefault();
    this.style.border = '2px solid #069C54'
}
function dragLeave(event) {
    this.style.border = '1px solid transparent'
}
function Dropp() {
    event.preventDefault();
    this.style.border = '1px solid transparent'
    this.append(el1Vnutri)
    el1.append(this.firstElementChild)
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














let sun_moon = doc.querySelector('.sun_moon')
let moon_sun = doc.querySelector('.moon_sun')
let css = doc.querySelector('#css')
let link_css_white = "./assets/css/styles.css"
let link_css_black = "./assets/css/black_style.css"
let img_moon = "./assets/img/moon.svg"
let img_sun = "./assets/img/sun.svg"
const subject = doc.querySelector('.subject')
sun_moon.className = "none"
let func_1 = () => {
    if (moon_sun.className == "moon_sun") {
        css.href = link_css_black
        sun_moon.src = img_sun
        moon_sun.className = "none"
        sun_moon.className = "sun_moon"
    } else {
        css.href = link_css_white
        sun_moon.src = img_moon
        sun_moon.className = "none"
        moon_sun.className = "moon_sun"
    }
}

subject.addEventListener('click', func_1)


