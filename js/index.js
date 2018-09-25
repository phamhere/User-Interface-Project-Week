// navigation bar JS
let hamburger = document.querySelector('.navigation img');
let navigation = document.querySelector('.navigation');
let nav = document.querySelector('.navigation nav');

hamburger.addEventListener('click', () => {
  navigation.classList.toggle('navigation-active');
  hamburger.src.includes('img/nav-hamburger.png') ? 
    (hamburger.src = 'img/nav-hamburger-close.png', TweenMax.from(navigation, 1, {opacity: 0})) : 
    hamburger.src = 'img/nav-hamburger.png';
})

// scrolling animations
ScrollReveal().reveal('.scroll1', {
  origin: 'left',
  duration: 1000,
  delay: 1000,
  distance: '300px',
})
ScrollReveal().reveal('.scroll2', {
  origin: 'right',
  duration: 1000,
  distance: '300px',
})
ScrollReveal().reveal('.top-article', {
  origin: 'left',
  duration: 1000,
  delay: 500,
  distance: '300px',
})
ScrollReveal().reveal('.mid-article', {
  origin: 'right',
  duration: 1000,
  delay: 500,
  distance: '300px',
})
ScrollReveal().reveal('.bottom-article', {
  origin: 'left',
  duration: 1000,
  delay: 500,
  distance: '300px',
})

// services page tab content JS
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']`);
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener('click', () => {
      this.select();
    })
  }
  select() {
    const links = document.querySelectorAll('.tabs-link');
    Array.from(links).forEach(link => link.classList.remove('tabs-link-selected'));
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }
  select() {
    const items = document.querySelectorAll('.tabs-item');
    items.forEach(item => item.classList.remove('tabs-item-selected'));
    this.element.classList.add('tabs-item-selected');
  }
}

let links = document.querySelectorAll('.tabs-link');
links = Array.from(links).map(link => new TabLink(link));
links[0].select();