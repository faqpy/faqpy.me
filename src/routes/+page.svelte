<main>
    <h1><span><a class="title-span" href={resolve("/about")}>faqpy</a></span> です!</h1>
    <h3>(a.k.a witchie)</h3>
    <div class="home-container">
        <p>Heya, I am faqpy! <CustomEmoji src={miauWhat} name=":miauWhat:"/></p>
        <p>I'm a self-taught web developer (currently learning)</p>
    </div>
    <div class="social-btns-container">
        <a href="https://github.com/faqpy/faqpy.me" target="_blank" rel="noopener noreferrer"><button class="social-btns">Source</button></a>
        <a href="{resolve("/profiles")}"><button class="social-btns">Profiles</button></a>
        <a href={resolve("/contact")}><button class="social-btns">Contact</button></a>
    </div>
</main>
<BaseLayoutFooter />
<script>
    import { resolve } from "$app/paths";
    import CustomEmoji from "$lib/customEmoji.svelte";
    const miauWhat = "/assets/emojis/miauWhat.webp";
    import BaseLayoutFooter from "$lib/baseLayoutFooter.svelte";
</script>