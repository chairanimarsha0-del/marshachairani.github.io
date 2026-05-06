document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const pesan = document.getElementById('pesan').value;

    const responseDiv = document.getElementById('response');
    const responseText = document.getElementById('responseText');

    // Menampilkan hasil input di halaman
    responseText.innerHTML = `Halo <strong>${nama}</strong> (${email}), pesan kamu telah diterima: <br> "<em>${pesan}</em>"`;
    
    responseDiv.classList.remove('hidden');
    this.reset(); // Mengosongkan form
});
