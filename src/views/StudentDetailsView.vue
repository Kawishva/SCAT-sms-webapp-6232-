<template>
    <main class="StudentDetailsView">
      <h2 class="title">New Student Detail</h2>
  
      <form @submit.prevent="saveStudent">
        <div class="StudentId">
          <input 
           type="text" 
           placeholder="Student ID"
           id="StudentId" 
           v-model="StudentId" required>
        </div>
  
        <div class="FirstName">
          <input 
           type="text" 
           placeholder="First name"
           id="FirstName" 
           v-model="FirstName" required>
        </div>
  
        <div class="LastName">
          <input 
           type="text"
           id="LastName" 
           placeholder="Last name"
           v-model="LastName" required>
        </div>
  
        <div class="BirthDay">
          <input
           type="text"
            id="BirthDay"
            placeholder="Birthday"
            v-model="BirthDay" required>
        </div>
  
        <div class="Course">
          <label for="Course">Course</label>
          <select 
          id="Course" 
          v-model="Course" required>
            <option value="Course01">Course 01</option>
            <option value="Course02">Course 02</option>
            <option value="Course03">Course 03</option>
          </select>
        </div>
  
        <div class="DegreeProgram">
          <label for="DegreeProgram">Degree Program</label>
          <select id="DegreeProgram" v-model="DegreeProgram" required >
            <option value="Cs">Computer Science</option>
            <option value="Se">Software Engineering</option>
            <option value="Ce">Computer Engineering</option>
          </select>
        </div>
        <button class="button" type="submit">Save</button>
      </form>
    </main>
  </template>
  
  <script>
import { db,auth } from '../firebase'

export default {
  data() {
    return {
      StudentId: '',
      FirstName: '',
      LastName: '',
      BirthDay: '',
      Course: '',
      DegreeProgram: ''
    }
  },
  methods: {
    saveStudent() {
      const user = auth.currentUser

      if (!user) {
        console.error('No user logged in!')
        return
      }

      db.collection('studentsDetails').add({
        StudentId: this.StudentId,
        FirstName: this.FirstName,
        LastName: this.LastName,
        BirthDay: this.BirthDay,
        Course: this.Course,
        DegreeProgram: this.DegreeProgram,
      })
        .then(() => {
          alert('New student details saved successfully!')
        })
        .catch(error => {
          console.error('Error saving student details: ', error)
        })
    
        // eslint-disable-next-line no-undef
        console.log('Added document with ID: ', res.id);
      }
  }
}
 


  </script>
  
  <style>
.StudentDetailsView {
  background-color: #d3cdcd;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;

  
}

.title {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #716d6d;
  margin-bottom: 45px;
}


label {
  display: block;
  font-weight:lighter;
  margin-bottom: 5px;
  color: #716d6d;
}

input {
	border:none;
	outline:none;
	background:none;
	display:inline;
	width: 100%;
  height: 50%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0rem;
}
input:not([type="submit"]) {
	opacity: 0.8;
	transition: 0.4s;
}
input:focus:not([type="submit"]) {
	opacity: 1;
}
input::placeholder {
	color: inherit;
}

div input:not([type="submit"]) {
	color: #2c3e50;
	border-bottom: 2px solid #2c3e50;
}


select {
  cursor: pointer;
  border: 3px solid rgb(184, 169, 228);
}

.Course {
    padding: 0.5rem 0rem;
    
    widows: 35%;
}

.button {
 
  color: #000000;
  border: 3px solid rgb(184, 169, 228);
  padding: 10px;
  font-size: 16px;
  text-shadow: #bdb5b5;
  background-color: #fffefe;
  border-radius: 20px;
  cursor: pointer;
  align-content: center;
}
</style>
  
  