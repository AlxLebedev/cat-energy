{
  const navList = document.querySelector('.navigation__list');
  const navButton = document.querySelector('.navigation__toggle-button');

  navList.classList.remove('navigation__list--noJS');

  navButton.addEventListener('click', () => {
    if (navList.classList.contains('navigation__list--closed')) {
      navList.classList.remove('navigation__list--closed');
      navButton.classList.remove('navigation__toggle-button--menu-open');
      navButton.classList.add('navigation__toggle-button--menu-close');
      return;
    }
    navList.classList.add('navigation__list--closed');
    navButton.classList.remove('navigation__toggle-button--menu-close');
    navButton.classList.add('navigation__toggle-button--menu-open');
  });
}
