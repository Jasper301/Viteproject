// Funktio vitsin hakemiseen Chuck Norrisin vitsien API:sta
async function haeChuckNorrisVitsi() {
    try {
        const vastaus = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await vastaus.json();
        return data.value;
    } catch (virhe) {
        console.error('Virhe haettaessa Chuck Norrisin vitsiä:', virhe);
        return 'Chuck Norrisin vitsin hakeminen epäonnistui. Yritä uudelleen myöhemmin.';
    }
}

// Funktio joka näyttää Chuck Norrisin vitsin
async function näytäChuckNorrisVitsi() {
    const vitsiDiv = document.getElementById('show_joke');
    const vitsi = await haeChuckNorrisVitsi();
    vitsiDiv.textContent = vitsi;
}

// Lisätään tapahtumankuuntelija "hae vitsi" -napille
document.addEventListener('DOMContentLoaded', function() {
    // Lisätään tapahtumankuuntelija "hae vitsi" -napille
    document.getElementById('chuck').addEventListener('click', näytäChuckNorrisVitsi);
});
