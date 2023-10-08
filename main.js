/***************************
 ** ✨ if,else,nested if
 *  ^^^^^^^^^^^^^^^^^^^^^^^
 ***************************/

// If Else
const soal1_a = document.getElementById("soal1_a");

let duit = 1;

if (duit == true) {
  soal1_a.innerHTML = "Ada nih, mau pinjem berapa?";
} else {
  soal1_a.innerHTML = "Lagi gk ada duit bro";
}

// Nested If
const soal1_b = document.getElementById("soal1_b");

let pinjamDulu = 100000;
let respon = "";
document.getElementById(
  "jml"
).innerHTML = `"Rp.${pinjamDulu.toLocaleString()}".`;

if (pinjamDulu >= 100000) {
  respon = "Sebaiknya jangan gegabah";
} else if (pinjamDulu >= 50000) {
  respon = "Jangan lupa balikin";
} else if (pinjamDulu >= 20000) {
  respon = "Oke, pake aja";
} else {
  respon = "Dikit amat minjemnya";
}

soal1_b.innerHTML = respon;

/***********************
 ** ✨ switch case
 *  ^^^^^^^^^^^^^^^^^^
 ***********************/
const soal2 = document.getElementById("soal2");

let getTanggal = new Date().getDay();
let hari = "";

switch (getTanggal) {
  case 0:
    hari = "Minggu";
    break;
  case 1:
    hari = "Senin";
    break;
  case 2:
    hari = "Selasa";
    break;
  case 3:
    hari = "Rabu";
    break;
  case 4:
    hari = "Kamis";
    break;
  case 5:
    hari = "Jumat";
    break;
  case 6:
    hari = "Sabtu";
    break;
  default:
    hari = "error";
}

soal2.innerHTML = hari;

/**************************
 ** ✨ for statement
 *  ^^^^^^^^^^^^^^^^^^^
 **************************/
const soal3 = document.getElementById("soal3");

let no = 0;
let tasks = [
  "if,else,nested if",
  "switch case",
  "for statement",
  "while, do while",
  "function",
];

for (const task of tasks) {
  no++;
  soal3.innerHTML += `<li>${no}. ${task}</li>`;
}

/***************************
 ** ✨ while, do while
 *  ^^^^^^^^^^^^^^^^^^^^^
 ***************************/

// While
const soal4_a = document.getElementById("soal4_a");
let i = 0;

while (i < tasks.length) {
  i++;
  soal4_a.innerHTML += `<li>${i}. ${tasks[i - 1]}</li>`;
}

// Do While
const soal4_b = document.getElementById("soal4_b");
let x = 0;

do {
  x++;
  soal4_b.innerHTML += `<li>${x}. ${tasks[x - 1]}</li>`;
} while (x < tasks.length);

/*******************
 ** ✨ function
 *  ^^^^^^^^^^^^^^
 *******************/

function kalkulasi() {
  const soal5 = document.getElementById("soal5");

  const a = parseFloat(document.getElementById("angka1").value);
  const b = parseFloat(document.getElementById("angka2").value);
  const op = document.getElementById("operator").value;

  if (isNaN(a) || isNaN(b)) {
    alert("Harap Masukkan angka");
  } else {
    let hasil;
    switch (op) {
      case "+":
        hasil = a + b;
        break;
      case "-":
        hasil = a - b;
        break;
      case "*":
        hasil = a * b;
        break;
      case "/":
        if (b !== 0) {
          hasil = a / b;
        } else {
          soal5.innerHTML = "Tidak dapat membagi dengan nol";
          return;
        }
        break;
      case "%":
        hasil = a % b;
        break;
    }

    soal5.innerHTML = hasil;
  }
}
