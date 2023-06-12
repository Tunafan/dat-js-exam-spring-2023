"use strict";
window.addEventListener("load", initApp);

const itemList = document.getElementById('students-container');
let allStudents = [];

async function initApp() {
  allStudents = await getStudents("./students.json");
  const semesterFilter = document.querySelector('#semesterFilter');

  showStudents(allStudents);

  semesterFilter.addEventListener("change", event => filterSemesters(event));
}

async function getStudents(url) {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

function showStudents(students) {
  itemList.innerHTML = '';

  students.forEach(student => {
    showStudent(student);
  });
}

function showStudent(student) {
  console.log(student);

  itemList.insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <article>
    <p><b>${student.name}</b></p>
    <p>Student ID: 0000${student.id}</p>
    <a href="mailto:${student.mail}">${student.mail}</a>
    <p>Currently a student: ${student.enrolled}</p>
    <p id="semestersComplete">Currently in semester ${student.semester}</p>
    </article>
    `
  );
}

function filterSemesters(event) {
  const selectedSemester = event.target.value;

  let filteredStudents = allStudents;
  if (selectedSemester !== 'all') {
    filteredStudents = allStudents.filter(student => student.semester === selectedSemester);
  }

  showStudents(filteredStudents);
}