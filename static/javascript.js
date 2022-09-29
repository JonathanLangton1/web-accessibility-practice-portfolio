/**
 * Desktop nav menu item selector blob functionality
 */
const blob = document.querySelector('header nav.desktop-nav .menuItemSelector')
const navItems = document.querySelectorAll('header nav.desktop-nav li')
const activeItem = document.querySelector('header section nav.desktop-nav .active')

function isItemSelected() {
    if (document.querySelectorAll('header section nav.desktop-nav a.active').length === 0) {
        return false;
    } else {
        return true;
    }
}

// Move blob to active item on page load and set width
blob.style.left = activeItem.offsetLeft + (activeItem.offsetWidth / 2) + 'px';
blob.style.opacity = 1;
blob.style.width = activeItem.offsetWidth + 'px';
const delay = ms => new Promise(res => setTimeout(res, ms));
(async function () {
    await delay(500);
    blob.style.transition = '0.5s';
})()

// Attach events
navItems.forEach(item => {item.onmouseenter = moveBlobToItem; item.onmouseleave = moveBlobBackToActive; item.onclick = setActiveitem;})

function moveBlobToItem(event) {
    let activeItem = document.querySelector('header section nav.desktop-nav .active');
    blob.style.left = event.target.offsetLeft + (event.target.offsetWidth / 2) + 'px';
    blob.style.width = event.target.offsetWidth + 'px';

    if (isItemSelected()) {
        event.target.firstChild.style.removeProperty("color")
        if (event.target.firstChild != activeItem) {
            activeItem.style.color = 'black';
        }
    } else {
        navItems.forEach(item => { console.log(item, event.target)
            if (item != activeItem && item != event.target) {
                item.firstChild.style.color = 'black';
            }
        })
    }
}

function moveBlobBackToActive(event) {
    let activeItem = document.querySelector('header section nav.desktop-nav .active');
    blob.style.left = activeItem.offsetLeft + (activeItem.offsetWidth / 2) + 'px';
    blob.style.width = activeItem.offsetWidth + 'px';

    if (isItemSelected()) {
        event.target.firstChild.style.color = 'black';
        activeItem.style.color = 'white';
    } else {
        navItems.forEach(item => { console.log(item, event.target)
            if (item != activeItem && item != event.target) {
                item.firstChild.style.color = 'white';
            }
        })
    }
}

function setActiveitem(event) {
    let oldItem = document.querySelector('header section nav.desktop-nav .active');
    oldItem.classList.remove('active');
    event.target.classList.add('active');
    
    if (isItemSelected()) {
        return;
    } else {
        navItems.forEach(item => {item.firstChild.style.removeProperty("color")})
    }
}


// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             let oldItem = document.querySelector('header section nav.desktop-nav .active');
//             oldItem.classList.remove('active');

//             entry.target.classList.add('active')
//             console.log('Update menu to reflect change', entry.target)
//         }
//     })
// }, {rootMargin: '0px 0px -60% 0px'})

// const sections = document.querySelectorAll('section')
// sections.forEach((el) => observer.observe(el))




/**
 * Banner animations
 */

// Determine if device is mobile or not (to reduce animations for mobile devices for performance)
let windowWidth = window.innerWidth;
function isMobileDevice() {
    if (windowWidth <= 1080) {
        return true;
    } else {
        return false;
    }
}

// Scroll linked animation (Desktop - using this on mobile doesn't look good)
var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#mainContent", duration: 130})
// Animate in relation to scroll position
if (isMobileDevice()) {
    scene.setTween(".banner", {opacity: 0})
} else {
    scene.setTween(".banner", {opacity: 0, scale: 0.95, marginTop: '50px'})
}
scene.addTo(controller);