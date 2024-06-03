
const memoryInformation = process.memoryUsage();

console.log(memoryInformation['heapUsed']);
const initialMemoryUsage = memoryInformation['heapUsed'];
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;

for(let i = 0;i <= 10000;i++){
    // Proses Looping ini akan membuat pengguna Memori Naik
    memoryInformation['heapUsed'] += i;
}

const currentMemoryUsage = memoryInformation['heapUsed'];

console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// Perintah Untuk menjalankan code
// SET NODE_ENV=development && node ./process-object/index.js Azqi 