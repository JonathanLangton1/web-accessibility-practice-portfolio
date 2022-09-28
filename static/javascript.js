/**
 * Desktop nav menu item selector blob functionality
 */
const blob = document.querySelector('header nav.desktop-nav .menuItemSelector')
const navItems = document.querySelectorAll('header nav.desktop-nav li')
const activeItem = document.querySelector('header section nav.desktop-nav ul a.active')

// Move blob to active item on page load and set width
blob.style.left = activeItem.offsetLeft + (activeItem.offsetWidth / 2) + 'px';
blob.style.opacity = 1;
blob.style.width = activeItem.offsetWidth + 'px';
const delay = ms => new Promise(res => setTimeout(res, ms));
(async function () {
    await delay(500);
    blob.style.transition = '0.5s';
})()

// Attach events and onclick event
navItems.forEach(item => {item.onmouseenter = moveBlobToItem; item.onmouseleave = moveBlobBackToActive; item.onclick = setActiveitem;})

function moveBlobToItem(event) {
    let activeItem = document.querySelector('header section nav.desktop-nav ul a.active');
    blob.style.left = event.target.offsetLeft + (event.target.offsetWidth / 2) + 'px';
    blob.style.width = event.target.offsetWidth + 'px';
    if (event.target.firstChild != activeItem) {
        activeItem.style.color = 'black';
    }
}

function moveBlobBackToActive(event) {
    let activeItem = document.querySelector('header section nav.desktop-nav ul a.active');
    blob.style.left = activeItem.offsetLeft + (activeItem.offsetWidth / 2) + 'px';
    blob.style.width = activeItem.offsetWidth + 'px';
    activeItem.style.color = 'white';
}

function setActiveitem(event) {
    let oldItem = document.querySelector('header section nav.desktop-nav ul a.active');
    oldItem.classList.remove('active');
    event.target.classList.add('active');
    navItems.forEach(item => {item.firstChild.style.removeProperty("color")})
}


/**
 * Banner animations
 */

// Scroll linked animation (Desktop - using this on mobile doesn't look good)
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#mainContent", duration: 300})
// Animate in relation to scroll position
// .setTween(".banner", {opacity: 0, scale: 0.95, marginTop: '50px'})
.setTween(".banner", {opacity: 0})
.addTo(controller);
// } else {
//     // View based animations (if element comes into view, do css transition)
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('show')
//             } else {
//                 entry.target.classList.remove('show')
//             }
//         })
//     }, {rootMargin: '-40% 0px 0px 0px'})

//     const hiddenElements = document.querySelectorAll('[scroll-animate]')
//     hiddenElements.forEach((el) => {
//         el.classList.add('.hidden')
//         observer.observe(el) // Show when in view
//     })
// }