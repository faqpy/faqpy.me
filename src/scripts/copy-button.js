const copyBtn = document.getElementById('copy-btn');
const copyLabel = document.getElementById('copy-label');
const embedCode = '<a href="https://faqpy.me" target="_blank" rel="noreferrer noopener"><img src="https://faqpy.me/button.png" alt="faqpy.me" width="88" height="31" /></a>';

copyBtn?.addEventListener('click', () => {
    navigator.clipboard.writeText(embedCode).then(() => {
        if (copyLabel) copyLabel.textContent = 'copied!';
        setTimeout(() => { if (copyLabel) copyLabel.textContent = 'click to copy'; }, 2000);
    });
});
