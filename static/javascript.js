// Desktop nav menu blue dot
const dot = document.querySelector('header nav.desktop-nav .menuItemSelector')
const navItems = document.querySelectorAll('header nav.desktop-nav li')
const activeItem = document.querySelector('header section nav.desktop-nav ul a.active')

// Move dot to active item on page load and set width
dot.style.left = activeItem.offsetLeft + (activeItem.offsetWidth / 2) + 'px';
dot.style.opacity = 1;
dot.style.width = activeItem.offsetWidth + 'px';
const delay = ms => new Promise(res => setTimeout(res, ms));
(async function () {
    await delay(500);
    dot.style.transition = '0.5s';
})()

// Attach events and onclick event
navItems.forEach(item => {item.onmouseenter = moveDotToItem; item.onmouseleave = moveDotBackToActive; item.onclick = setActiveitem;})

function moveDotToItem(event) {
    let activeItem = document.querySelector('header section nav.desktop-nav ul a.active');
    dot.style.left = event.target.offsetLeft + (event.target.offsetWidth / 2) + 'px';
    dot.style.width = event.target.offsetWidth + 'px';
    console.log(event.target.firstChild != activeItem)
    if (event.target.firstChild != activeItem) {
        console.log('hover element not same as active')
        activeItem.style.color = 'black';
    }
}

function moveDotBackToActive(event) {
    let activeItem = document.querySelector('header section nav.desktop-nav ul a.active');
    dot.style.left = activeItem.offsetLeft + (activeItem.offsetWidth / 2) + 'px';
    dot.style.width = activeItem.offsetWidth + 'px';
    activeItem.style.color = 'white';
}

function setActiveitem(event) {
    let oldItem = document.querySelector('header section nav.desktop-nav ul a.active');
    oldItem.classList.remove('active');
    event.target.classList.add('active');
    navItems.forEach(item => {item.firstChild.style.removeProperty("color")})
}