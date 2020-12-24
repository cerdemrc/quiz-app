<template>
  <div id="app">
    <Question />
  </div>
</template>

<script>
import Question from "./components/Question";
export default {
  name: "App",
  components: {
    Question,
  },
};
</script>

<style lang="scss">
body {
  background: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>
