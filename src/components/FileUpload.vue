<template>
  <div class="file">
    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
      <div class="container">
        <label class="label">Dodaj plik</label>
        <input type="file" ref="file" @change="onSelect" class="input" />
      </div>
      <div class="container">
        <Button class="button">Wyślij</Button>
        {{ message }}
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FileUpload",
  data() {
    return {
      file: "",
      message: "",
    };
  },
  methods: {
    onSelect() {
      const file = this.$refs.file.files[0];
      this.file = file;
    },
    async onSubmit() {
      const formData = new FormData();
      formData.append("file", this.file);

      try {
        if (this.file.length != "") {
          await axios.post("/api/upload", formData);
          this.message = "Plik dodany!";
        } else {
          this.message = "Musisz dodać plik";
        }
      } catch (err) {
        this.message = err;
      }
    },
  },
};
</script>
<style scoped>
.file {
  width: 100%;
  height: auto;
  border: 1px solid rgb(209, 209, 214);
  border-radius: 4px;
  padding: 40px;
  background-color: rgb(209, 209, 214);
  -webkit-box-shadow: 0px 4px 5px 2px rgba(174, 174, 178, 1);
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}
.label {
  font-size: 22px;
  font-weight: 600;
  padding: 5px;
}
.input[type="file"]::file-selector-button {
  padding: 5px 10px;
  background-color: rgb(88, 86, 214);
  border: 1px solid rgb(94, 92, 230);
  border-radius: 4px;
  color: white;
  font-size: 18px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.input[type="file"]::file-selector-button:hover {
  background-color: rgb(94, 92, 230);
  -webkit-box-shadow: 0px 4px 5px 2px rgba(122, 124, 255, 1);
}
.button {
  padding: 5px 30px;
  background-color: rgb(88, 86, 214);
  border: 1px solid rgb(94, 92, 230);
  border-radius: 4px;
  color: white;
  font-size: 18px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.button:hover {
  background-color: rgb(94, 92, 230);
  -webkit-box-shadow: 0px 4px 5px 2px rgba(122, 124, 255, 1);
}
</style>
