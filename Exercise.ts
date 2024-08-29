// Soal 1 
// Memeriksa apakah bilangan genap atau ganjil 

let bilangan = 3; 

if(bilangan % 2 == 0) {
    console.log(`${bilangan} adalah bilangan GENAP`)
} else {
    console.log(`${bilangan} adalah bilangan GANJIL`)
}

// Soal 2
// Memeriksa apakah bilangan Prima

let cekBilangan = 10; 

if(cekBilangan <= 1 ) {
    console.log(`${cekBilangan} bukan bilangan Prima`);
} else {
    for(let i = 2; i * i <= cekBilangan; i++) {
        if(cekBilangan % i == 0) {
            console.log(`${cekBilangan} bukan bilangan prima`)
        } else {
            console.log(`${cekBilangan} adalah bilangan prima`)
        }
    }
}