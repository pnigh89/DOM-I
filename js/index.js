const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('nav a');
let nav1 = nav[0];
let nav2 = nav[1];
let nav3 = nav[2];
let nav4 = nav[3];
let nav5 = nav[4];
let nav6 = nav[5];
// console.log(nav2)
// console.log(nav);
nav1.textContent = 'Services'
nav2.textContent = 'Product'
nav3.textContent = 'Vision'
nav4.textContent = 'Features'
nav5.textContent = 'About'
nav6.textContent = 'Contact'

let newCTA = document.querySelector('.cta-text');
console.log(newCTA);
let newH1 = newCTA.querySelector('h1');
console.log(newH1);
newH1.innerHTML = 'DOM' + '<br />' + 'IS' + '<br />' + 'AWESOME'
let newButton = newCTA.querySelector('button');
console.log(newButton);
newButton.textContent = 'Get Started';

let ctaImage = document.querySelector('#cta-img')
ctaImage.setAttribute('src', siteContent['cta']['img-src']);

let mainContent = document.querySelector('.main-content').children;
console.log(mainContent);

let topContent = mainContent[0].children
console.log(topContent)

topContent[0].children[0].innerText = siteContent ['main-content'] ['features-h4'];

topContent[0].children[1].innerText = siteContent ['main-content'] ['features-content']

topContent[1].children[0].innerText = siteContent ['main-content'] ['about-h4']

topContent[1].children[1].innerText = siteContent ['main-content'] ['about-content']

let bottomContent = mainContent[2].children
console.log(bottomContent)

bottomContent[0].children[0].innerText = siteContent ['main-content'] ['services-h4']

bottomContent[0].children[1].innerText = siteContent ['main-content'] ['services-content']

bottomContent[1].children[0].innerText = siteContent ['main-content'] ['product-h4']

bottomContent[1].children[1].innerText = siteContent ['main-content'] ['product-content']

bottomContent[2].children[0].innerText = siteContent ['main-content'] ['vision-h4']

bottomContent[2].children[1].innerText = siteContent ['main-content'] ['vision-content']


let midImg = mainContent [1];

midImg.src = siteContent ['main-content'] ['middle-img-src']

let contact = document.querySelector('.contact').children;
console.log(contact)

contact[0].innerText = siteContent ['contact'] ['contact-h4']
contact[1].innerText = siteContent ['contact'] ['address']
contact[2].innerText = siteContent ['contact'] ['phone']
contact[3].innerText = siteContent ['contact'] ['email']

let footer = document.querySelector('footer')
console.log(footer)

footer.textContent = siteContent ['footer'] ['copyright']
// let newTop = mainContent.querySelector('.top-content')
// console.log(newTop);
// let topText = newTop.querySelectorAll('.text-content')
// console.log(topText)
// let features = topText[0].children
// // let featuresH4 = features.querySelector('h4');
// console.log(features)
// features[0].textContent = 'Features'
// features[1].setAttribute('p', siteContent['main-content'[1]]);
// let about = topText[1].children
