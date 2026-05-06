function showPage(pageId) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Tampilkan halaman yang dipilih
    document.getElementById(pageId).classList.add('active');
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil data
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;

    // Tampilkan hasil
    document.getElementById('resNama').innerText = "Nama: " + nama;
    document.getElementById('resEmail').innerText = "Email: " + email;
    
    // Sembunyikan form dan tampilkan respons
    document.getElementById('contactForm').classList.add('hidden');
    document.getElementById('response').classList.remove('hidden');
});
