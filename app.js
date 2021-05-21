const burgerToggle = () => {
    const burger = document.querySelector('.nav--burger');
    const nav = document.querySelector('.nav__links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav--active');

        const img1 = "./images/hamburger.svg";
        const img2 = "./images/cross.svg";
        
        if (nav.classList.contains('nav--active')) {
            burger.src = img2;
        } else {
            burger.src = img1;
        }

    });
}

const burgerLinkToggle = () => {
    const link = document.querySelector('.nav__link--onboard');
    const onBoard = document.querySelector('.nav__onboard');
    const arrow = document.querySelector('.arrow-down');

    link.addEventListener('click', () => {
        onBoard.classList.toggle('nav__onboard--active');

        const img1 = "./images/arrow-down.svg";
        const img2 = "./images/arrow-up.svg";

        if (onBoard.classList.contains('nav__onboard--active')) {
            arrow.src = img2;
        } else {
            arrow.src = img1;
        }
    })
}

const accordionItemHeaders = document.querySelectorAll('.footer__accordion-header');
accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener('click', (e) => {
        accordionItemHeader.classList.toggle('active');
    })
})

burgerLinkToggle();
burgerToggle();