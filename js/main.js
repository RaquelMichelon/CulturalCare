window.addEventListener("scroll", onScroll);

onScroll()

function onScroll() {
    showNavOnScroll()
    backToTopButtonOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        navigation.classList.add("scroll")
    } else {
        navigation.classList.remove("scroll")
    }
}

function backToTopButtonOnScroll() {
    if(scrollY > 400) {
        backToTopButton.classList.add("show")
    } else {
        backToTopButton.classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add("menu-expanded")
}

function closeMenu() {
    document.body.classList.remove("menu-expanded")
}

ScrollReveal({
    origin: 'top',
    distance: '3rem',
    duration: 700,
}).reveal(`
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content`);
