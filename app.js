const http = require("http");
const port = process.env.PORT || 3000;

const students = [
  { id: 1, name: "Lê Thành Đạt", studentId: "M2524001", email: "datm2524001@gstudent.ctu.edu.vn", phone:"+84916671369", birthday:"24/3/2001", hometown:"Cần Thơ" },
  { id: 2, name: "Đạt", studentId: "M2524002", email: "m2524002@gstudent.ctu.edu.vn", phone:"+84916671369", birthday:"24/3/2001", hometown:"Cần Thơ"  },
];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  
  let studentTable = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Danh sách sinh viên</title>
    </head>
    <body>
      <h1>Danh sách sinh viên</h1>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <th>MSHV</th>
          <th>Họ Tên</th>
          <th>Ngày sinh</th>
          <th>Quê quán</th>
          <th>Email</th>
          <th>SĐT</th>
        </tr>
  `;


  students.forEach(student => {
    studentTable += `
      <tr>
        <td>${student.studentId}</td>
        <td>${student.name}</td>
        <td>${student.birthday}</td>
        <td>${student.hometown}</td>
        <td>${student.email}</td>
        <td>${student.phone}</td>
      </tr>
    `;
  });

  studentTable += "</table>";
  res.end(studentTable);
});

server.listen(port, () => {
  console.log(`Server running at port ` + port);
});
