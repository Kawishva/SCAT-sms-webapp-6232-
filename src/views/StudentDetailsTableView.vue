<template>
    <div class="student-details">
      <h1 class="page-title">Student Details</h1>
      <input type="text" class="search-bar" v-model="searchInput" placeholder="Search ">
      
      <table class="student-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Student ID</th>
            <th>Name</th>
            <th>Degree Program</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody v-if="studentsToShow.length > 0">
          <tr v-for="(student, index) in studentsToShow" :key="student.id">
            <td>{{ index + 1 }}</td>
            <td>{{ student.studentId }}</td>
            <td>{{ student.name }}</td>
            <td>{{ student.degreeProgram }}</td>
            <td>{{ student.course }}</td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="5" style="text-align: center;">No Student in Database</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        students: [
          { id: 1, studentId: '001', name: 'John Smith', degreeProgram: 'Computer Science', course: 'Web Development' },
          { id: 2, studentId: '002', name: 'Jane Doe', degreeProgram: 'Business Administration', course: 'Marketing' },
          { id: 3, studentId: '003', name: 'Tom Williams', degreeProgram: 'Engineering', course: 'Mechanics' },
          { id: 4, studentId: '004', name: 'Lisa Lee', degreeProgram: 'Art and Design', course: 'Graphic Design' },
        ],
        searchInput: '',
      }
    },
    computed: {
      studentsToShow() {
        if (this.searchInput) {
          const searchKeyword = this.searchInput.toLowerCase().trim();
          return this.students.filter(student =>
            student.studentId.toLowerCase().includes(searchKeyword) ||
            student.name.toLowerCase().includes(searchKeyword)
          );
        } else {
          return this.students;
        }
      },
    }
  }
  </script>
  
  <style>
  .student-details {
    background-color: lightblue;
    padding: 20px;
  }
  .page-title {
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    color: rgb(35, 124, 193);
  }
  .search-bar {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 3px solid rgb(35, 124, 193);
    padding: 5px;
    border-radius: 45px;
    align-content: left;
    text-align: left;
    display: flex; 
    justify-content: flex-start;
  }
  .student-table {
    border: 4px solid rgb(35, 124, 193);
    width: 100%;
  }
  .student-table th {
    text-align: left;
    color: rgb(21, 81, 126);
  }
  .student-table td{
    padding: 10px;
    text-align: left;
    color: rgb(25, 83, 128);
  }
  </style>
  