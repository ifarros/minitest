// Import library axios yang digunakan untuk mengambil data dari API
const axios = require('axios');

// Fungsi untuk mendapatkan ramalan cuaca kota Jakarta untuk 5 hari ke depan
async function getWeatherForecast() {
    // Simpan nama kota dan API key
    const CITY = 'Jakarta';
    const API_KEY = '768920474f2ecd8d394357a35a933081'; // Ganti dengan API key Anda
    
    try {
        // Mengambil data cuaca dari API
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`);
        const forecasts = response.data.list; // Ambil semua data cuaca
        
        // Objek untuk menyimpan ramalan cuaca per hari
        const weatherPerDay = {};

        // Menampilkan judul ramalan cuaca
        console.log(`Weather forecast for ${CITY}:`);

        // Iterasi semua data cuaca
        forecasts.forEach((forecast) => {
            // Ambil tanggal ramalan cuaca
            const date = new Date(forecast.dt * 1000);
            
            // Ambil hari, bulan, dan tahun dari tanggal dan format menjadi "day, date"
            const formattedDate = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
            
            // Ambil suhu cuaca
            const temperature = forecast.main.temp.toFixed(1);

            // Periksa apakah tanggal ramalan cuaca sama dengan hari ini
            if (date.getDate() !== new Date().getDate()) {
                // Jika tidak sama, simpan suhu cuaca ke dalam objek weatherPerDay
                weatherPerDay[formattedDate] = temperature;
            }
        });

        // Menampilkan ramalan cuaca per hari
        for (const date in weatherPerDay) {
            console.log(`${date}: ${weatherPerDay[date]}°C`);
        }
    } catch (error) {
        // Menampilkan pesan kesalahan jika terjadi kesalahan saat mengambil data cuaca
        console.error("Error fetching weather data:", error);
    }
}

// Memanggil fungsi untuk mendapatkan ramalan cuaca
getWeatherForecast();
