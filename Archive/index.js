let seconds = document.querySelector('#seconds')
let minutes = document.querySelector('#minutes')
let hours = document.querySelector('#hours')
let days = document.querySelector('#days')



let offer__slide = document.querySelectorAll('.offer__slide')
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let current = document.querySelector('#current')
let total = document.querySelector('#total')

let slideIndex = 0

prev.onclick = () => {
    slideIndex--
    showSlide(slideIndex)
}  
next.onclick = () => {
    slideIndex++
    showSlide(slideIndex)
} 

function showSlide(n) {
    
    if(n >= offer__slide.length) {
        slideIndex = 0
    }
    if(n == -1) {
        slideIndex = offer__slide.length - 1
    }
    offer__slide.forEach(img => {
        img.style.display = 'none'
    });
    offer__slide[slideIndex].style.display = "block"
    
    current.innerHTML = '0' + (slideIndex+1) 
}


showSlide()

let timer = setInterval(() =>{
    seconds.innerHTML--
    if(seconds.innerHTML == 0){
        minutes.innerHTML--
        seconds.innerHTML = 59
        if(minutes.innerHTML == 0){
            hours.innerHTML--
            minutes.innerHTML = 59
            if(hours.innerHTML == 0){
                days.innerHTML--
                hours.innerHTML = 23
                if(days.innerHTML == -1){
                    clearInterval(timer)
                    alert('The End!')
                    days.innerHTML = 0
                    hours.innerHTML = 0
                    minutes.innerHTML = 0
                    seconds.innerHTML = 0
                }
            }
        }
    }
},1000)


let btn_white = document.querySelector('.btn_white')
let btn_dark = document.querySelector('.btn_dark')
let btn_min = document.querySelector('.btn_min')
let modal = document.querySelector('.modal')
let modalw = document.querySelector('.modal-w')
let modal_dialog = document.querySelector('.modal__dialog')
let modal_close = document.querySelector('.modal__close')
let overlay = document.querySelector('.overlay')
let form = document.forms.tel

btn_white.onclick = () => {
    modal.classList.add('show')
    modal.classList.add('fade')
    modal_dialog.classList.remove('hide')
}
btn_dark.onclick = () => {
    modal.classList.add('show')
    modal.classList.add('fade')
    modal_dialog.classList.remove('hide')
}
btn_min.onclick = () => {
    modal.classList.add('show')
    modal.classList.add('fade')
}
modal_close.onclick = () => {
    modal.classList.remove('show')
    modal_dialog.classList.add('hide')
}   
modal.onclick = () => {
    modal.classList.remove('show')
    modal_dialog.classList.add('hide')
}


form.onsubmit = (event) => {
    event.preventDefault()

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value,key) => {
        user[key] = value
    })
    modal.classList.add('show')
    modal_dialog.classList.remove('hide')
    modal_dialog.classList.add('modalnew')
    modal_dialog.innerHTML = `Заявка Принята ${user.name}!`
}

let fitness = document.querySelector('.fitnes')
let premium = document.querySelector('.premium')
let post = document.querySelector('.post')
let balance = document.querySelector('.balans')
let imgtab = document.querySelector('.tabcontent img')
let tabcontent__descr = document.querySelector('.tabcontent__descr')

fitness.onclick = () => {
    fitness.classList.add('tabheader__item_active')
    premium.classList.remove('tabheader__item_active')
    post.classList.remove('tabheader__item_active')
    balance.classList.remove('tabheader__item_active')
    tabcontent__descr.innerHTML = 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!'
    imgtab.setAttribute('src', 'img/tabs/vegy.jpg')
}

premium.onclick = () => {
    fitness.classList.remove('tabheader__item_active')
    post.classList.remove('tabheader__item_active')
    balance.classList.remove('tabheader__item_active')
    premium.classList.add('tabheader__item_active')
    imgtab.setAttribute('src', 'img/tabs/elite.jpg')
    tabcontent__descr.innerHTML = 'Меню “Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!'
}
post.onclick = () => {
    fitness.classList.remove('tabheader__item_active')
    premium.classList.remove('tabheader__item_active')
    balance.classList.remove('tabheader__item_active')
    post.classList.add('tabheader__item_active')
    imgtab.setAttribute('src', 'img/tabs/post.jpg')
    tabcontent__descr.innerHTML = 'Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом! '
}
balans.onclick = () => {
    fitness.classList.remove('tabheader__item_active')
    premium.classList.remove('tabheader__item_active')
    balance.classList.add('tabheader__item_active')
    post.classList.remove('tabheader__item_active')
    imgtab.setAttribute('src', 'img/tabs/hamburger.jpg')
    tabcontent__descr.innerHTML = 'Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.'
}