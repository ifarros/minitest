const result = [];
for (let i = 100; i >= 1; i--) {
    let output = ''; // Inisialisasi variabel output
    
    // Periksa apakah bilangan prima
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    
    // Tambahkan kata 'Foo' jika habis dibagi 3
    if (i % 3 === 0) {
        output += 'Foo';
    }
    
    // Tambahkan kata 'Bar' jika habis dibagi 5
    if (i % 5 === 0) {
        output += 'Bar';
    }
    
    // Jika bukan bilangan prima, tambahkan ke array
    if (!isPrime) {
        result.push(output || i); // Jika output kosong, gunakan angka itu sendiri
    }
}

// Print hasilnya
console.log(result.join(' '));