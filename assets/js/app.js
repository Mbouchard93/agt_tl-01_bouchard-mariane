const containers = document.querySelectorAll('.container'); 
const content = document.querySelector('.content')
const navLinks = document.querySelectorAll('nav a');
const btnRetour = document.querySelector('.btn_retour');
navDefault = document.querySelector('.nav_default')

containers.forEach(container => {
    container.addEventListener('click', (e) => {
        const content = e.currentTarget.nextElementSibling;
        if (content.classList.contains('content')) {
            content.classList.replace('content', 'visiblecontent');
        } else {
            content.classList.replace('visiblecontent', 'content');
        }

        const arrow = container.querySelector('.arrow');
            if (arrow.src.includes('arrow_right.svg')) {
                arrow.src = './assets/img/arrow_down.svg';
            } else {
                arrow.src = './assets/img/arrow_right.svg';
            }

    });
});

window.addEventListener('scroll', ()=> {
    if (scrollY < 100){
        navDefault.classList.replace('navScroll', 'nav_default'); 
        btnRetour.classList.add('none')
    }else {
        navDefault.classList.replace('nav_default', 'navScroll'); 
        btnRetour.classList.remove('none')
    }
});

btnRetour.addEventListener('click', () => {
    window.scrollTo(0,0);
})
