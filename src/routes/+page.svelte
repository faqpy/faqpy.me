<main>
    <p style="font-size: 80px; font-style: normal;"><span><a class="title-span" href={resolve("/about")}>faqpy</a></span> です!</p>
    <p style="font-size: 20px; font-style: normal;">(a.k.a witchie)</p>
    <p>Heya, I am faqpy! <CustomEmoji src={miauWhat} name=":miauWhat:"/></p>
    <p>I'm a self-taught web developer (currently learning)</p>
    <a href="https://bsky.app/profile/faqpy.me" target="_blank"><button class="social-btns">BSky</button></a>
    <a href="mailto:faqpy@proton.me" target="_blank"><button class="social-btns">Mail</button></a>
    <a href="https://discord.com/users/277867160796397568" target="_blank" ><button class="social-btns">Discord</button></a>
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