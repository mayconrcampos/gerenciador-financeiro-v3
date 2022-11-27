<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    106deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(66, 185, 131, 1) 100%
  );
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: white !important;
  background: #42b983;
  border-radius: 8px 8px 8px !important;
  box-shadow: 5px 5px 15px rgb(121, 118, 118);
}
</style>
