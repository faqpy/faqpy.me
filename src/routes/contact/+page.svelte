<main>
    <p style="font-size: 80px; font-style: normal;"><span><a class="title-span" href={resolve("/")}>faqpy</a></span> です!</p>
    <form class="contact-form-container" action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="fab436b2-f3cb-4a21-a47f-e4776eb612c3">
        <input required name="name" type="text" class="contact-form-input" id="contact-name" placeholder="Name"><br>
        <input required name="email" type="email" class="contact-form-input" id="contact-email" placeholder="Email"><br>
        <textarea required name="message" type="text" class="contact-form-textarea" id="contact-message" rows="3" placeholder="Message"></textarea><br>
        <button type="submit" id="contact-form-btn">Send</button>
    </form>
</main>
<footer>
    <p>i cnat cod &nbsp;•&nbsp; witchie</p>
</footer>
<script>
    import { resolve } from "$app/paths";
</script>