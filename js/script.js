document.addEventListener('DOMContentLoaded', () => {
  let swiper = document.querySelector('.swiper');
  let menuLinks = document.querySelectorAll('.header__menu--link');
  let burger = document.querySelector('.header__burger');
  let menu = document.querySelector('.header__menu');
  let orderBtn = document.getElementById('btn-call');
  let orderLink = document.getElementById('order-link');
  let stepsLink = document.getElementById('steps-link');
  let worksLink = document.getElementById('works-link');
  let form = document.querySelector('.form');
  let phoneInput = document.getElementById('phone');


  // slider swiper inicialisation
  swiper && new Swiper('.swiper', {

    // slidesPerView: 3.7,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    grabCursor: true,
    autoplay: {
      delay: 2000,

    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      750: {
        slidesPerView: 3.7,
      }

    }

  });

  // ссылки из хедера - поведение
  worksLink.addEventListener('click', function(event) {
    event.preventDefault();
    let targetElement = document.getElementById('worksgallery');
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  });

  stepsLink.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('steps').scrollIntoView({
      behavior: 'smooth'
    });
  });

  orderLink.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('order').scrollIntoView({
      behavior: 'smooth'
    });
  });

  orderBtn.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('order').scrollIntoView({
      behavior: 'smooth'
    });
  });

  // нажатая ссылка в хедере - поведение
  menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      menuLinks.forEach(menuLink => {
        menuLink.classList.remove('active');
      });
      link.classList.add('active');
    });
  });


  // бургер
  burger && burger.addEventListener('click', (e) => {
    e.preventDefault();
    burger.classList.toggle('touched');
    document.body.classList.toggle('noscroll');
    menu.classList.toggle('visible');
  });

  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', (e) => {
      e.preventDefault();
      burger.classList.remove('touched');
      document.body.classList.remove('noscroll');
      menu.classList.remove('visible');
    });
  }

  // форма, маска, отравка данных в тг

  window.addEventListener('load', function() {
    createMask();
  });;

  function createMask() {
    var elements = document.querySelectorAll('#phone');
    for (var i = 0; i < elements.length; i++) {
        new IMask(elements[i], {
            mask: '+995-000-000-000',
        });
    }
  }
  
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;

    let messageWithName = "Перезвонить" + "\nИмя: " + name;
    
    var xhrName = new XMLHttpRequest();
    xhrName.open("GET", "https://api.telegram.org/bot5868505848:AAHol3POKURQ_g68GLk0_b5iODrGnY90O9A/sendMessage?chat_id=5426167302&text=" + encodeURIComponent(messageWithName), true);
    xhrName.onreadystatechange = function () {
      if (xhrName.readyState === XMLHttpRequest.DONE && xhrName.status === 200) {
        alert('Мы скоро вам перезвоним!');
        form.reset();
      }
    };
    xhrName.send();

    let messageWithPhone = phone;
    
    var xhrPhone = new XMLHttpRequest();
    xhrPhone.open("GET", "https://api.telegram.org/bot5868505848:AAHol3POKURQ_g68GLk0_b5iODrGnY90O9A/sendMessage?chat_id=5426167302&text=" + encodeURIComponent(messageWithPhone), true);
    xhrPhone.onreadystatechange = function () {
      if (xhrPhone.readyState === XMLHttpRequest.DONE && xhrPhone.status === 200) {
        form.reset();
      }
    };
    xhrPhone.send();
  });

})