<script>
  export let src = "";
  export let name = "emoji";
</script>

<a href={src} target="_blank" rel="noopener noreferrer" title={name} class="emoji-link">
  <img {src} alt={name} class="emoji-img" />
</a>

<style>
  .emoji-link {
    display: inline-block;
    text-decoration: none;
    cursor: text;
  }
  .emoji-img {
    height: 1.2em; 
    vertical-align: middle; 
    margin: 0 2px;
  }
</style>