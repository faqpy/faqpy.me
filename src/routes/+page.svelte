<main>
    <h1><span><a class="title-span" href={resolve("/about")}>faqpy</a></span> です!</h1>
    <h3>(a.k.a witchie)</h3>
    <p>Heya, I am faqpy! <CustomEmoji src={miauWhat} name=":miauWhat:"/></p>
    <p>I'm a self-taught web developer (currently learning)</p>
    <a href="https://github.com/faqpy/faqpy.me" target="_blank" rel="noopener noreferrer"><button class="social-btns">Source</button></a>
    <a href="{resolve("/profiles")}"><button class="social-btns">Profiles</button></a>
    <a href="mailto:faqpy@proton.me" target="_blank" rel="noopener noreferrer"><button class="social-btns">Mail</button></a>
    <a href={resolve("/contact")}><button class="social-btns">Contact</button></a>
</main>
<footer>
    <p>i cnat cod &nbsp;•&nbsp; witchie</p>
</footer>
<script>
    import { resolve } from "$app/paths";
    import CustomEmoji from "$lib/customEmoji.svelte";
    const miauWhat = "https://cdn.discordapp.com/emojis/1280886209635291137.webp?quality=lossless"
</script>