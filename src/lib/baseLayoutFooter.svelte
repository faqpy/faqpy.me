<script>
    import Icon from "@iconify/svelte";
</script>
<footer>
    <div class="buttons">
        <a href="mailto:hi@faqpy.me" target="_blank" rel="noopener noreferrer">
            <button class="footer-social-btn" title="mail me">
                <Icon icon="material-symbols:mail-outline" class="btn-icon" />
            </button>
        </a>
    </div>
    <p>&nbsp;•&nbsp;faqpy.me</p>
</footer>
<style>
    footer {
        font-family: 'CalSans', sans-serif;
        font-size: 14px;
        color: whitesmoke;
        margin-top: auto;
        width: 100%; 
        padding: 24px 16px; 
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        user-select: none;
    }
    footer .footer-social-btn {
        width: 44px;
        height: 44px;
        padding: 0;
        border-radius: 50%; 
        justify-content: center; 
        border: none;
    }
    footer .footer-social-btn :global(.btn-icon) {
        width: 24px; 
        height: 24px;
        flex-shrink: 0;
        color: whitesmoke;
        display: inline-block;
    }
</style>