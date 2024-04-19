// burger-menu
document.querySelector('.header-burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header-links').classList.toggle('open');
});

// intro scroll
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors){
    anchor.addEventListener('click', function(event){
        event.preventDefault();
        const anchorID = anchor.getAttribute('href')
        document.querySelector('' + anchorID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}