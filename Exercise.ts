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

const _number2: number = 2; 
let isPrime: boolean = true; 

for (let i: number = 2; i < _number2; i++) {
        if(_number2 % i === 0) {
            isPrime = false; 
            break;
        }
    }    
console.log(isPrime); 



// Soal 3 
// bilangan 3 = 1 + 2 + 3 

let N = 3;
let total = 0; 
 
for (let i = 0; i <= N; i++) { 
   total = total + i; 
}

console.log(total);

// Soal 4 
// Faktorial 

const Nfaktorial = 3;

let result = 1;

for (let i = Nfaktorial; i > 0; i--) {
    result *= i;  
}

console.log(result);

// Soal 5 
// Fibonacci 

let NFibonacci = 15;  
let a = 0, b = 1;

for (let i = 1; i < NFibonacci; i++) {
    let temp = a;
    a = b;
    b = temp + b;
}

console.log(b);
