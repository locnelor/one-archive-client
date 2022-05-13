<template>
  <div class="container">
    <el-button @click="click">上传文件</el-button>
    <el-card v-for="(item, key) in list" :key="key">
      <el-row>
        <el-col :span="5">
          {{ item.status }}
        </el-col>
        <el-col :span="10">
          {{ item.gid }}
        </el-col>
        <el-col :span="5">
          <a :href="getUrl(item)"> download </a>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import http from "@/utils/http";
export default {
  computed: {
    getUrl() {
      return (item) =>
        process.env.VUE_APP_BASE_API + `/archive/download/${item.gid}/a.zip`;
    },
  },
  created() {
    if (this.$store.state.user) {
      http.archive
        .getMyprojects()
        .then((e) => {
          this.list = e.reduce((acc, item) => {
            acc[item.gid] = item;
            return acc;
          }, {});
        })
        .catch(console.log);
    }
  },
  data() {
    return {
      list: {},
    };
  },
  methods: {
    click() {
      const input = document.createElement("input");
      input.type = "file";
      input.onchange = () => {
        if (this.$store.state.user) {
          //判断是否登录
        }
        const file = input.files[0];
        const name = file.name;
        const suffix = name.substring(name.lastIndexOf(".") + 1);
        if (suffix !== "zip")
          return this.$message({
            type: "error",
            message: "仅允许zip文件",
          });
        const form = new FormData();
        form.append("file", file);
        form.append("format", "MM.dd");
        form.append("day", 7);
        //11.01
        http.archive
          .add(form)
          .then((e) => {
            e.status = "running";
            this.list[e.gid] = e;
            return http.archive.run(e.gid);
          })
          .then(({ result, project }) => {
            this.list[project.gid] = project;
          })
          .catch(console.log);
      };
      input.click();
    },
  },
};
</script>