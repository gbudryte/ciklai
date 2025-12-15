"use strict";
const prompt = require("prompt-sync")();

function carnivalStats() {
  let mark = prompt("Enter the mark: ");
  let student_count = 0;
  let passed_students = 0;
  do {
    student_count++;
    if (mark >= 5) {
      passed_students++;
    }
    mark = prompt("Enter the mark: ");
  } while (mark != 0);
  return [student_count, passed_students];
}

const [all_students, passed] = carnivalStats();
console.log(
  `${all_students} students entered competition; ${passed} of them have passed`
);
