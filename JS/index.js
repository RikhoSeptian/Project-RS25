const menuNav = document.querySelector('.menu-nav')

menuNav.addEventListener('click', function(e) {
    const targetMenu = e.target;

    if (targetMenu.classList.contains("menu-link")) {
        const menulinkActive = document.querySelector("ul li a.active");

        if (menulinkActive !== null && targetMenu.getAttribute('href') !== menulinkActive.getAttribute('href')) {
            menulinkActive.classList.remove('active');
        }
        targetMenu.classList.add('active');
    }
});

window.addEventListener("scroll", function() {
    var subNav = document.querySelector('#sub-nav'),
    nav = document.querySelector('#nav');

    subNav.classList.toggle('stiky', window.scrollY > 0);
    nav.classList.toggle('stiky', window.scrollY > 0);
})


