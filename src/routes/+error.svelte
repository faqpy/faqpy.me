<main>
    <h1>404 - Not Found</h1>
    <p>Unavailable page, Sorry about that.</p>
    <p>If you think this is a mistake, please let me know!</p>
    <br><br>
    <a class="titleSpan" id="back-main" href={resolve("/")}>&gt; Go back &lt;</a>
</main>
<BaseLayoutFooter />
<style>
    #back-main{font-size: 1.2em;}
</style>
<script>
    import { resolve } from "$app/paths";
    import BaseLayoutFooter from "$lib/baseLayoutFooter.svelte";
</script>