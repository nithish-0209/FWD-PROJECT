
let students = {};

function teacherLogin() {
  const u = teacherUser.value;
  const p = teacherPass.value;

  if (u === 'admin' && p === 'admin123') {
    loginSection.style.display = 'none';
    teacherDashboard.style.display = 'block';
    renderTeacherTable();
  } 
  else {
    alert('Invalid credentials');
  }
}

function studentLogin() {
  const name = studentUser.value;
  if (!name) return alert('Enter name');

  loginSection.style.display = 'none';
  studentDashboard.style.display = 'block';
  renderStudentTable(name);
}

function addMarks() {
  const name = stuName.value;
  const mark = parseInt(marks.value);

  if (!name || isNaN(mark)) return alert('Invalid input');

  students[name] = mark;
  stuName.value = marks.value = '';
  renderTeacherTable();
}

function performance(m) {
  if (m >= 85) return 'Excellent';
  if (m >= 60) return 'Good';
  if (m >= 40) return 'Average';
  return 'Needs Improvement';
}

function renderTeacherTable() {
  teacherTable.innerHTML = '';
  for (let s in students) {
    teacherTable.innerHTML += `<tr><td>${s}</td><td>${students[s]}</td><td>${performance(students[s])}</td></tr>`;
  }
}

function renderStudentTable(name) {
  studentTable.innerHTML = students[name] !== undefined
    ? `<tr><td>${name}</td><td>${students[name]}</td><td>${performance(students[name])}</td></tr>`
    : `<tr><td colspan='3'>No Data Found</td></tr>`;
}

function logout() {
  teacherDashboard.style.display = 'none';
  studentDashboard.style.display = 'none';
  loginSection.style.display = 'flex';
}
