const time = document.querySelectorAll('.time');

function updateTime() {
    // Hitung selisih waktu
    const tanggalAkhir = new Date('2023-12-31');
    const tanggalAwal = new Date();

    const selisihWaktu = tanggalAkhir - tanggalAwal;
    // Konversi selisih waktu menjadi detik
    const selisihDetik = Math.floor(selisihWaktu / 1000);
    
    // Hitung selisih bulan dan hari
    const bulanSelisih = Math.floor((selisihDetik % (365 * 24 * 3600)) / (30 * 24 * 3600));
    const hariSelisih = Math.floor((selisihDetik % (30 * 24 * 3600)) / (24 * 3600));
    
    
    const selisihDetikSisa = selisihDetik % (24 * 3600);
    
    // Konversi selisih detik menjadi jam, menit, dan detik
    const selisihJam = Math.floor(selisihDetikSisa / 3600);
    const selisihMenit = Math.floor((selisihDetikSisa % 3600) / 60);
    const selisihDetikAkhir = selisihDetikSisa % 60;

    time[0].innerHTML = bulanSelisih;
    time[1].innerHTML = hariSelisih;
    time[2].innerHTML = selisihJam;
    time[3].innerHTML = selisihMenit;
    time[4].innerHTML = selisihDetikAkhir;
}

updateTime();
const intervalSecs = setInterval(updateTime, 1000);
