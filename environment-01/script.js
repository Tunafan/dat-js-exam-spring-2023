"use strict";
window.addEventListener("load", initApp)

async function initApp() {
    const students = await getStudents("./students.json");

    students.forEach(showStudent);
}
async function getStudents(url) {
    const response = await fetch(url)
    const data = await response.json();
    return data;
}

async function showStudent(student){
    console.log(student);

    document.querySelector("#students-container").insertAdjacentHTML(
        "beforeend",
        /*html*/ `
        <article>
            <h2>${student.name}</h2>
            <article id="student-container">
            <p>Student number: ${student.id}</p>
            <p>e-mail adress: ${student.mail}</p>
            <p>Enrolled in faculty: ${student.enrolled}</p>
            <p>Semesters studied: ${student.semester}</p>
            </article>
            </article> `
    )
}
