// 1. Select DOM Elements
const gradeForm = document.getElementById("grade-form");
const studentNameInput = document.getElementById("student-name");
const studentMarkInput = document.getElementById("student-mark");
const errorMsg = document.getElementById("error-msg");
const formCard = document.getElementById("form-card");
const thankYouCard = document.getElementById("thank-you-card");
const resultBox = document.getElementById("result-box");
const resetBtn = document.getElementById("reset-btn");
const studentList = document.getElementById("student-list");

gradeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  errorMsg.textContent = "";

  const name = studentNameInput.value.trim();
  const mark = parseInt(studentMarkInput.value, 10);

  if (name === "") {
    errorMsg.textContent = "Please enter a valid student name.";
    return;
  }

  if (isNaN(mark) || mark < 0 || mark > 100) {
    errorMsg.textContent = ":Please enter a mark between 0 and 100.";
    return;
  }

  let status = "";
  let grade = "";
  let boxClass = "";

  if (mark >= 80 && mark <= 100) {
    status = "PASS";
    grade = "Distinction";
    boxClass = "pass-box";
  } else if (mark >= 65 && mark <= 79) {
    status = "PASS";
    grade = "Merit";
    boxClass = "pass-box";
  } else if (mark >= 50 && mark <= 64) {
    status = "PASS";
    grade = "Pass";
    boxClass = "pass-box";
  } else {
    status = "FAIL";
    grade = "Fail";
    boxClass = "fail-box";
  }

  resultBox.className = "";
  resultBox.classList.add(boxClass);
  resultBox.innerHTML = `Name: ${name}<br>Grade: ${grade} (${status})`;

  formCard.classList.add("hidden");
  thankYouCard.classList.remove("hidden");
  const listItem = document.createElement("li");
  listItem.innerHTML = `
        <span><strong>${name}</strong></span>
        <span style="color: ${status === "PASS" ? "#00FF66" : "#FF3333"};">
            ${mark}% - ${grade}
        </span>
    `;

  studentList.appendChild(listItem);
});

resetBtn.addEventListener("click", function () {
  gradeForm.reset();
  thankYouCard.classList.add("hidden");
  formCard.classList.remove("hidden");
});
