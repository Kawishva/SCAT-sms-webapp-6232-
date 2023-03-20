<template>
  <main class="MainMenu">
    <h1>{{ topic }}</h1>
    <div class="button-container">
      <button class="MenuButton" @click="this.$router.push('/StudentDetailsView')">ADD NEW STUDENT</button>
      <button class="MenuButton" @click="this.$router.push('/StudentDetailsTableView')">STUDENT DETAILS</button>
      <button class="MenuButton" @click="$store.dispatch('logout')">LOGOUT</button>
    </div>
  </main>
</template>

<script>
//import { pushScopeId } from 'vue';

export default {
  data() {
    return {
      topic: "Main Menu"
    };
  },
};
</script>

<style scoped>
.MainMenu{
  background-color: #edbaf1; /* light purple */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #93239b;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.MenuButton {
  padding: 1rem 2rem;
  margin: 1rem;
  border: 3px solid rgb(236, 175, 62);
  background-color:#eed2b2;
  color: #5c50c4;

  font-weight: bold;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
