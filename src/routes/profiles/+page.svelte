<main>
    <h1><span><a class="title-span" href={resolve("/")}>witchie</a></span> です!</h1>  
    <div class="profile-button-container">
        <ul class="buttons">
            <li>
                <a href="https://github.com/faqpy/faqpy.me" target="_blank" rel="noopener noreferrer">
                    <button id="src_btn" title="Source code of this page">
                        <Icon icon="mdi:code-braces" class="btn-icon" />
                        <h3 translate="yes">source code</h3>
                    </button>
                </a>
            </li>
        </ul>
    </div>
    <section id="game-profiles">
        <h3>Game Profiles</h3>
        <div class="profile-button-container">
            <ul class="buttons">
                <li>
                    <a href="https://gdbrowser.com/u/faqpy" target="_blank" rel="noopener noreferrer">
                        <button title="my GD profile">
                            <Icon icon="mdi:cube-outline" class="btn-icon" />
                            <h3 translate="no">gd</h3>
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://namemc.com/faqpy" target="_blank" rel="noopener noreferrer">
                        <button title="my NameMC profile">
                            <Icon icon="mdi:minecraft" class="btn-icon" />
                            <h3 translate="no">namemc</h3>
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://osu.ppy.sh/users/19575078" target="_blank" rel="noopener noreferrer">
                        <button title="my osu! profile">
                            <Icon icon="mdi:target" class="btn-icon" />
                            <h3 translate="no">osu!</h3>
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://roblox.com/users/802402672/profile" target="_blank" rel="noopener noreferrer">
                        <button title="my Roblox profile">
                            <Icon icon="simple-icons:roblox" class="btn-icon" />
                            <h3 translate="no">roblox</h3>
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://steamcommunity.com/id/schizofuck/" target="_blank" rel="noopener noreferrer">
                        <button title="my Steam profile">
                            <Icon icon="mdi:steam" class="btn-icon" />
                            <h3 translate="no">steam profile</h3>
                        </button>
                    </a>
                </li>            
            </ul>
        </div>
    </section>
    <section id="social-profiles">
        <h3>Social Profiles</h3>
        <div class="profile-button-container">
            <ul class="buttons">
                <li>
                    <a href="https://bsky.app/profile/faqpy.me" target="_blank" rel="noopener noreferrer">
                        <button title="Bluesky profile">
                            <Icon icon="mdi:butterfly" class="btn-icon" />
                            <h3 translate="no">bluesky</h3>
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://discord.com/users/600698629501616138" target="_blank" rel="noopener noreferrer">
                        <button title="@witchie">
                            <Icon icon="mdi:discord" class="btn-icon" />
                            <h3 translate="no">discord</h3>
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/faqpy/" target="_blank" rel="noopener noreferrer">
                        <button id="src_btn" title="Github profile">
                            <Icon icon="mdi:github" class="btn-icon" />
                            <h3 translate="yes">github</h3>
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/faqpy/" target="_blank" rel="noopener noreferrer">
                        <button title="Instagram profile">
                            <Icon icon="mdi:instagram" class="btn-icon" />
                            <h3 translate="no">instagram</h3>
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://www.x.com/faqpy/" target="_blank" rel="noopener noreferrer">
                        <button title="Twitter profile">
                            <Icon icon="mdi:twitter" class="btn-icon" />
                            <h3 translate="no">twitter</h3>
                        </button>
                    </a>
                </li>
                <li>
                    <a href="https://music.youtube.com/@Schizofuck" target="_blank" rel="noopener noreferrer">
                        <button title="YouTube Music">
                            <Icon icon="mdi:music-circle-outline" class="btn-icon" />
                            <h3 translate="no">youtube music</h3>
                        </button>
                    </a>
                </li>
            </ul>
        </div>
    </section>
</main>
<BaseLayoutFooter />
<script>
    import { resolve } from "$app/paths";
    import Icon from "@iconify/svelte";
    import BaseLayoutFooter from "$lib/baseLayoutFooter.svelte";
</script>