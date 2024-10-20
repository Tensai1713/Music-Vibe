const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');
  const closeButton = document.querySelector('.icon--menu-close');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  closeButton.addEventListener('click', () => {
    menu.classList.remove('active');
  });