// Mengubah teks heading <h1> setelah halaman dimuat
window.onload = function() {
    document.querySelector("h1").textContent = "Latihan JavaScript Selesai";
};
// Deklarasi variabel
let name = "John";
const age = 30;

// Menampilkan nama dan umur di dalam div dengan ID "output"
document.getElementById("output").innerHTML = `Name: ${name}, Age: ${age}`;

// Membuat dan menampilkan array
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(function(fruit) {
    document.getElementById("output").innerHTML += `<br>Fruit: ${fruit}`;
});

// Membuat dan menampilkan objek
let person = {firstName: "John", lastName: "Doe", age: 30};
document.getElementById("output").innerHTML += `<br>Person: ${person.firstName} ${person.lastName}`;
function checkValue() {
    let input = document.getElementById("userInput").value;
    let outputDiv = document.getElementById("output");

    if (input > 10) {
        outputDiv.innerHTML = "Nilai lebih besar dari 10";
    } else if (input == 10) {
        outputDiv.innerHTML = "Nilai sama dengan 10";
    } else {
        outputDiv.innerHTML = "Nilai kurang dari 10";
    }

    // Menampilkan angka 1 hingga nilai yang dimasukkan pengguna
    for (let i = 1; i <= input; i++) {
        outputDiv.innerHTML += `<br>${i}`;
    }
}
// Fungsi untuk menampilkan salam
function greet(name) {
    return `Hello, ${name}`;
}

// Panggil fungsi greet() dan tampilkan hasilnya
document.getElementById("output").innerHTML = greet("Alice");

// Fungsi untuk menghitung kuadrat
function calculateSquare(number) {
    return number * number;
}

// Panggil fungsi calculateSquare() dan tampilkan hasilnya
document.getElementById("output").innerHTML += `<br>Square of 5: ${calculateSquare(5)}`;

// Arrow function untuk menjumlahkan dua angka
let add = (a, b) => a + b;

// Panggil arrow function dan tampilkan hasilnya
document.getElementById("output").innerHTML += `<br>Sum of 3 and 4: ${add(3, 4)}`;
// Membuat array students
let students = ["Alice", "Bob", "Charlie"];
students.push("Dave");

// Tampilkan semua nama siswa menggunakan forEach
students.forEach(function(student) {
    document.getElementById("output").innerHTML += `<br>Student: ${student}`;
});

// Membuat objek car
let car = {brand: "Toyota", model: "Corolla", year: 2020};

// Tampilkan semua properti dari objek car menggunakan for...in
for (let prop in car) {
    document.getElementById("output").innerHTML += `<br>${prop}: ${car[prop]}`;
}

// Membuat array objek untuk beberapa mobil
let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2019},
    {brand: "Ford", model: "Focus", year: 2018}
];

// Tampilkan informasi setiap mobil menggunakan forEach
cars.forEach(function(car) {
    document.getElementById("output").innerHTML += `<br>Car: ${car.brand} ${car.model} (${car.year})`;
});
