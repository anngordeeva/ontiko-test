function createNode(element) {
  return document.createElement(element);
}

function getElem(element) {
  return document.getElementById(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.getElementById('events');
const url = 'https://conf.ontico.ru/api/conferences/forCalendar.json';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
let authors = data.result;
console.log(authors)
return authors.map(function(author) {

  const li = createNode('li');
  const cardTop = createNode('div');
  const cardBottom = createNode('div');
  const cardLocation = createNode('div');
  const cardLink = createNode('div');
  const cardBtnWrapper = createNode('div');
  const date = createNode('h3');
  const img = createNode('img');
  const name = createNode('h2');
  const brief = createNode('p');
  const location = createNode('h4');
  const locImg = createNode('img');
  const linkImg = createNode('img')
  const uri = createNode('a');
  const btnBuy = createNode('a');
  const btnDetails = createNode('a');
  
  li.classList.add('card', 'flex');
  cardTop.classList.add('card__top')
  cardBottom.classList.add('card__bottom')
  cardLocation.classList.add('card__wrapper', 'flex')
  cardLink.classList.add('card__wrapper', 'flex')
  cardBtnWrapper.classList.add('card-btn__wrapper', 'flex')
  date.classList.add('card__date', 'title-sm');
  img.classList.add('card__logo');
  name.classList.add('card__name', 'title');
  brief.classList.add('card__brief', 'descr');
  location.classList.add('card__location', 'descr');
  uri.classList.add('card__link');
  btnBuy.classList.add('card__btn', 'btn')
  btnDetails.classList.add('card__btn', 'btn', 'btn-empty')
  
  date.innerHTML = author.date_range;
  img.src = author.logo;
  name.innerHTML = author.name;
  brief.innerHTML = author.brief;
  locImg.src = '/images/location.svg';
  location.innerHTML = author.location;
  linkImg.src = '/images/link.svg'
  uri.innerHTML = author.uri
  btnBuy.innerHTML = author.buy?.action || 'Билетов нет';
  btnBuy.setAttribute('href', author.buy?.link)
  btnDetails.innerHTML = 'Подробнее'
  btnDetails.setAttribute('href', author.uri)

  append(cardTop, date);
  append(cardTop, img);
  append(cardTop, name);
  append(cardTop, brief);
  append(cardBottom, cardLocation);
  append(cardLocation, locImg)
  append(cardLocation, location)
  append(cardBottom, cardLink)
  append(cardLink, linkImg)
  append(cardLink,uri)
  append(cardBottom, cardBtnWrapper)
  append(cardBtnWrapper, btnBuy)
  append(cardBtnWrapper, btnDetails)
  append(li, cardTop)
  append(li, cardBottom)
  append(ul, li);
})
})
.catch(function(error) {
console.log(error);
});
  
  (function() {
    [].slice.call(document.querySelectorAll('.menu')).forEach(function(menu) {
      var menuItems = menu.querySelectorAll('.menu__link'),
        setCurrent = function(ev) {
          ev.preventDefault();

          var item = ev.target.parentNode; // li
          
          // return if already current
          if( classie.has(item, 'menu__item--current') ) {
            return false;
          }
          // remove current
          classie.remove(menu.querySelector('.menu__item--current'), 'menu__item--current');
          // set current
          classie.add(item, 'menu__item--current');
        };
      
      [].slice.call(menuItems).forEach(function(el) {
        el.addEventListener('click', setCurrent);
      });
    });

  })(window);