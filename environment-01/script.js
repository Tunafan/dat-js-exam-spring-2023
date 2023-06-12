"use strict";
window.addEventListener("load", initApp)

async function initApp() {
const students = await getStudents("./students.json")

students.forEach(showStudent);
}

async function getStudents(url){
    const response = await fetch(url);
    const data = await response.json();
return data;
}

function showStudent(student) {
  console.log(student);
  
  document.querySelector(".containers").insertAdjacentHTML(
    "beforeend",
    /*html*/ `
    <article>
    <p><b>${student.name}</b></p>
    <p>Student ID: 0000${student.id}</p>
    <a href="mailto:${student.mail}">${student.mail}</a>
    <p>Currently a student: ${student.enrolled}</p>
    <p>Semesters completed: ${student.semester}</p>
    </article>
    `

  )
    
}