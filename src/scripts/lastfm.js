const USER = 'MrWitchie';
const API_KEY = '26fd5e41264977ec4d40e966bdccf39e';
const API_URL = 'https://ws.audioscrobbler.com/2.0/';

const el = {
    status: document.getElementById('lastfm-status'),
    song: document.getElementById('lastfm-song'),
    artist: document.getElementById('lastfm-artist'),
    card: document.getElementById('lastfm'),
};

async function fetchTrack() {
    try {
        const url = `${API_URL}?method=user.getrecenttracks&user=${USER}&api_key=${API_KEY}&format=json&limit=1`;
        const data = await (await fetch(url)).json();
        const track = data.recenttracks?.track?.[0];

        if (!track) return;

        const isPlaying = track['@attr']?.nowplaying === 'true';
        const artist = track.artist?.['#text'] || track.artist;
        const art = track.image?.at(-1)?.['#text'];

        el.status.textContent = isPlaying ? 'listening right now' : 'last played';
        el.song.textContent = track.name;
        el.artist.textContent = artist;

        el.song.href = track.url || '#';
        el.artist.href = `https://www.last.fm/music/${encodeURIComponent(artist)}`;

        if (art) el.card.style.setProperty('--card-bg-url', `url('${art}')`);
    } catch {
        el.status.textContent = "couldn't load track";
    }
}

fetchTrack();
setInterval(fetchTrack, 30000);
