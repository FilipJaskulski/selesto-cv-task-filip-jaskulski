<template>
  <div>
  Wrzucone pliki
  
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FileShow',
  data() {
      return {
        files: "",
      };
    },
    created: function() {
      axios
        .get('/api/files')
        .then(res => {
          console.log(res);
        })
    }
}
</script>

