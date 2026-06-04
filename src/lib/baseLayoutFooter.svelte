<script>
    import Icon from "@iconify/svelte";
</script>
<footer>
    <div class="buttons">
        <a href="mailto:hi@faqpy.me" class="footer-social-btn" title="mail me" target="_blank" rel="noopener noreferrer">
            <Icon icon="material-symbols:mail-outline" class="btn-icon" />
        </a>
    </div>
    <p>&nbsp;•&nbsp;faqpy.me</p>
</footer>
<style>
    :root {
        --ws-d1: hsl(343, 90%, 81%);
        --ws-d3: hsl(316, 16%, 28%);
        --ws-d5: hsl(32, 84%, 88%);
    }
    footer {
        font-family: 'CalSans', sans-serif;
        font-size: 14px;
        color: whitesmoke;
        margin-top: auto;
        width: 100%; 
        padding: 24px 16px; 
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        user-select: none;
    }
    footer .footer-social-btn {
        width: 44px;
        height: 44px;
        border-radius: 999px;
        display: flex; 
        align-items: center;
        justify-content: center; 
        text-decoration: none;
        background-color: var(--ws-d3);
        transition: background-color 0.25s ease;
    }
    footer .footer-social-btn :global(.btn-icon) {
        width: 24px; 
        height: 24px;
        flex-shrink: 0;
        display: inline-block;
        color: var(--ws-d5);
        transition: color 0.2s ease;
    }
    footer .footer-social-btn:hover {
        background-color: var(--ws-d1);
    }
    footer .footer-social-btn:hover :global(.btn-icon) {
        color: var(--ws-d3);
    }
</style>