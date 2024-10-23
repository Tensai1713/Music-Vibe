  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');
  const closeButton = document.querySelector('.icon--menu-close');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  closeButton.addEventListener('click', () => {
    menu.classList.remove('active');
  });


  const modal = document.querySelector('.modal__wrap');
  const modalExitBtn = document.querySelector('.modal__exit');
  const modalOverlay = document.querySelector('.modal-overlay');
  const footerBtn = document.querySelector('.footer__call-btn'); 
  const modalBtn = document.querySelector('.modal__btn');
  const NoScroll = document.querySelector('.no-scroll');
  const body = document.querySelector('.body');

  footerBtn.addEventListener('click', () => {
    modal.classList.remove('none');
    modalOverlay.classList.remove('none');
    body.classList.add('no-scroll');
  });

  modalExitBtn.addEventListener('click', () => {
    modal.classList.add('none');
    modalOverlay.classList.add('none');
    body.classList.remove('no-scroll');
  });

  



  