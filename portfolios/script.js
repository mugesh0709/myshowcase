ScrollReveal().reveal('.navbar', { delay: 500 ,distance: '60px' ,duration: 800 ,easing: 'ease-in', origin: 'top'});

ScrollReveal().reveal('.home-top .home-text', { delay: 1000 ,distance: '60px' ,duration: 800 ,easing: 'ease-in', origin: 'left' ,scale: 0.85 ,interval: 400 });

ScrollReveal().reveal('.home-top .home-img', { delay: 1300 ,distance: '60px' ,duration: 800 ,easing: 'ease-out', origin: 'right' ,scale: 0.85 ,interval: 400 });

ScrollReveal().reveal('.about-img', { delay: 1200 ,distance: '60px' ,duration: 800 ,easing: 'ease-out', origin: 'right' ,rotate: { x: 10, z: 40} ,interval: 400 });

ScrollReveal().reveal('.about-box', { delay: 800 ,distance: '60px' ,duration: 1000 ,easing: 'ease-out', origin: 'left' ,rotate: { x: 10, y: 40, z:20} ,interval: 400 });

ScrollReveal().reveal('.about-text .para', { delay: 600 ,distance: '60px' ,duration: 600 ,easing: 'ease-out', origin: 'right' ,interval: 400 });

ScrollReveal().reveal('.about-text .btn', { delay: 1300 ,distance: '60px' ,duration: 800 ,easing: 'ease-out', origin: 'right' ,interval: 400 });

ScrollReveal().reveal('.about-text .progressing .progress', { delay: 200 ,distance: '60px' ,duration: 200 ,easing: 'steps(1)', origin: 'top' ,interval: 300 });

ScrollReveal().reveal('.btn-group', { delay: 500 ,distance: '60px' ,duration: 500 ,easing: 'ease-out', origin: 'top',interval: 400 ,scale: 0.85});

ScrollReveal().reveal('.education .card', { delay: 600 ,distance: '60px' ,duration: 800 ,easing: 'steps(1)', origin: 'left',interval: 200 ,scale: 0.85});

ScrollReveal().reveal('.page1 .card', { delay: 600 ,distance: '60px' ,duration: 800 ,easing: 'steps(1)', origin: 'left',interval: 200 ,scale: 0.85});

ScrollReveal().reveal('.contact-us', { delay: 200 ,distance: '60px' ,duration: 400 ,easing: 'ease-out', origin: 'left'});

ScrollReveal().reveal('.contact-info ', { delay: 200 ,distance: '60px' ,duration: 400 ,easing: 'ease-out', origin: 'right'});


document.getElementById('toPage2').addEventListener('click', function() {
    document.getElementById('page1').classList.remove('active');
    document.getElementById('page2').classList.add('active');
});

document.getElementById('toPage1').addEventListener('click', function() {
    document.getElementById('page2').classList.remove('active');
    document.getElementById('page1').classList.add('active');
});