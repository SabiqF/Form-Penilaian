// Aplikasi Penilaian Mahasiswa
// Bobot nilai: tugas 40% dan ujian 60%.

const gradeForm = document.getElementById("gradeForm");
const studentNameInput = document.getElementById("studentName");
const courseNameInput = document.getElementById("courseName");
const assignmentInput = document.getElementById("assignmentScore");
const examInput = document.getElementById("examScore");
const message = document.getElementById("message");
const result = document.getElementById("result");
const resultNameOutput = document.getElementById("resultName");
const resultCourseOutput = document.getElementById("resultCourse");
const finalScoreOutput = document.getElementById("finalScore");
const gradeOutput = document.getElementById("grade");
const statusOutput = document.getElementById("status");
const explanationOutput = document.getElementById("explanation");
const gradeScale = document.getElementById("gradeScale");

// Data referensi yang dipakai oleh perulangan untuk membuat daftar predikat.
const gradeRules = [
  { grade: "A", range: "85–100", minimum: 85 },
  { grade: "B", range: "75–84,99", minimum: 75 },
  { grade: "C", range: "65–74,99", minimum: 65 },
  { grade: "D", range: "50–64,99", minimum: 50 },
  { grade: "E", range: "0–49,99", minimum: 0 }
];

// PERULANGAN: membuat daftar referensi predikat dari array gradeRules.
for (let i = 0; i < gradeRules.length; i++) {
  const item = document.createElement("li");
  const gradeEl = document.createElement("strong");
  const rangeEl = document.createElement("span");
  gradeEl.textContent = gradeRules[i].grade;
  rangeEl.textContent = gradeRules[i].range;
  item.appendChild(gradeEl);
  item.appendChild(rangeEl);
  gradeScale.appendChild(item);
}

// Memeriksa apakah nilai adalah angka yang valid dalam rentang 0 sampai 100.
function isValidScore(value) {
  const text = value.trim();
  if (text === "") return false;
  const number = Number(text);
  return Number.isFinite(number) && number >= 0 && number <= 100;
}

function showError(text) {
  message.textContent = text;
  message.className = "message error";
}

gradeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  message.textContent = "";
  message.className = "message";
  result.hidden = true;

  const studentName = studentNameInput.value.trim();
  const courseName = courseNameInput.value.trim();
  const assignmentText = assignmentInput.value;
  const examText = examInput.value;

  // VALIDASI nama dan mata kuliah.
  if (studentName === "" || courseName === "") {
    showError("Nama mahasiswa dan mata kuliah wajib diisi.");
    return;
  }

  // VALIDASI nilai: JavaScript memakai Number/Number.isFinite sebagai padanan
  // validasi numerik; TryParse adalah metode C#, bukan JavaScript.
  if (!isValidScore(assignmentText) || !isValidScore(examText)) {
    showError("Input tidak valid. Isi kedua nilai dengan angka 0 sampai 100.");
    return;
  }

  const assignmentScore = Number(assignmentText);
  const examScore = Number(examText);

  // Dibulatkan 2 desimal agar predikat sama dengan angka yang ditampilkan
  // dan tidak terpengaruh selisih pecahan desimal JavaScript.
  const finalScore = Math.round(((assignmentScore * 0.4) + (examScore * 0.6)) * 100) / 100;

  let grade;
  let status;

  // PERCABANGAN: menentukan predikat dan status berdasarkan nilai akhir.
  if (finalScore >= 85) {
    grade = "A";
  } else if (finalScore >= 75) {
    grade = "B";
  } else if (finalScore >= 65) {
    grade = "C";
  } else if (finalScore >= 50) {
    grade = "D";
  } else {
    grade = "E";
  }

  if (finalScore >= 65) {
    status = "Lulus";
  } else {
    status = "Belum lulus";
  }

  resultNameOutput.textContent = studentName;
  resultCourseOutput.textContent = courseName;
  finalScoreOutput.textContent = finalScore.toLocaleString("id-ID", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  gradeOutput.textContent = grade;
  statusOutput.textContent = status;
  explanationOutput.textContent =
    `Nilai tugas ${assignmentScore} × 40% + nilai ujian ${examScore} × 60%. ` +
    `Batas lulus pada aplikasi ini adalah nilai akhir 65.`;

  message.textContent = "Nilai berhasil dihitung.";
  message.classList.add("success");
  result.hidden = false;
});