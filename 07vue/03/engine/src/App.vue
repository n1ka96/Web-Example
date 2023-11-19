<template>
  <img src="./assets/logo.png">
  <h1 v-text="msg" ref="title"></h1>
  <button ref="btn" @click="showDom">click me</button>
  <School ref="sch"></School>
  <Student ref="stu" name="li" sex="man" :age="18"></Student>
</template>

<script>
import School from './components/School.vue';
import Student from './components/Student.vue';

export default {
  name: 'App',
  components: {
    School,
    Student
  },
  data() {
    return {
      msg: 'welcome'
    }
  },
  methods: {
    showDom() {
      console.log(this.$refs.title);
      console.log(this.$refs.btn);
      console.log(this.$refs.sch);
      console.log(this.$refs.stu);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
