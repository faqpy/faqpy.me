document.getElementById('scroll-down-btn')?.addEventListener('click', () => {
    document.querySelector('.content-section')?.scrollIntoView({ behavior: 'smooth' });
});
