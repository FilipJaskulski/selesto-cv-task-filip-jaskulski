<template>
  <div>
    Wrzucone pliki
    <button @click="fetchFiles">click</button>
    <ul id="files">
    <li v-for="file in files" :key="file.file">
    {{file}}
    </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FileShow",
  data() {
    return {
      files: "",
    };
  },
  methods: {
    fetchFiles() {
      axios.get("/api/files").then((res) => {
        this.files = (res.data.files);
        console.log(this.files);
      });
    },
  },
};
</script>
