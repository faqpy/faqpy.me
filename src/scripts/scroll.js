document.getElementById('back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('scroll-down-btn')?.addEventListener('click', () => {
    document.querySelector('.content-section')?.scrollIntoView({ behavior: 'smooth' });
});
