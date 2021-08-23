<template>
  <div id="myProgress">
    <div id="myBar" :style="{ width: percentage + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: ["percentage"]
}
</script>

<style>
#myProgress {
  width: 100%;
  background-color: rgb(217,237,228);
}
#myBar {
  /* width: 20%; */
  height: 10px;
  background-color: rgb(77,186,135);
}
</style>