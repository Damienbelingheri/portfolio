<template>
  <div id="app">
    <navigation />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/includes/nav.vue";
import Footer from "./components/includes/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer //added footer component.
  }
};
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

@keyframes bgcolor {
    0% {
        background-color: #45a3e5
    }

    30% {
        background-color: #66bf39
    }

    60% {
        background-color: #eb670f
    }

    90% {
        background-color: #f35
    }

    100% {
        background-color: #864cbf
    }
}

btn-outline-secondary{
  -webkit-animation: bgcolor 20s infinite;
    animation: bgcolor 10s infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
}
body {
    -webkit-animation: bgcolor 20s infinite;
    animation: bgcolor 10s infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
    background-image:url(./assets/pngegg.png);
  background-position: right center;
  background-repeat: no-repeat
}
</style>
