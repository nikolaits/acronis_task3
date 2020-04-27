<template>
  <div>
    <h2>Test</h2>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
import * as axios from "axios";
export default {
  name: "MainComponent",
  data() {
    return {
      msg: "Test",
      items: []
    };
  },
  methods: {},
  mounted() {
    axios.default
      .get(
        "https://www.acronis.com/en-us/api/v1/price/?machine_name=acronis_backup&locale=en-us",
        {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then(response => {
        console.log("response", response);
      })
      .catch(e => {
        console.log("error", e);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
