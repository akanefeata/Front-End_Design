function search(event) {
    event.preventDefault();
    let query = document.getElementById('search-input').value.toLowerCase();

    if (query === 'alanya') {
        window.location.href = '/alanya-tur.html'; // Alanya tur sayfasının URL'si
    } else if (query === 'başka-tur') {
        window.location.href = '/baska-tur.html'; // Başka tur sayfasının URL'si
    } else {
        alert("Aradığınız sayfa bulunamadı. Lütfen başka bir kelime deneyin.");
    }
}
