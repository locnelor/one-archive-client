<template>
  <div class="container" style="width:100%">
    <div class="function">
      <div class="intro">
        <h2>快速、简单的一生一档生成工具</h2>
      </div>
      <div class="button">
        <el-button @click="click" icon="el-icon-upload">上传文件</el-button>
      </div>
      <div>
        <el-card v-for="(item, key) in list" :key="key">
          <el-row>
            <el-col :span="5">
              {{ item.status }}
            </el-col>
            <el-col :span="10">
              {{ item.gid }}
            </el-col>
            <el-col :span="5">
              <el-link icon="el-icon-download" :href="getUrl(item)">下载</el-link>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script>
import http from '@/utils/http'

/**
 * 项目状态 status:
 * ready  准备中
 * running  进行中
 * error    失败
 * success  成功
 *
 *
 * format选项，
 * 参考java SimpleDateFormat
 * 示例：
 * yyyy-MM-dd  年-月-日
 * MM.dd       月.日
 */
export default {
  computed: {
    getUrl() {
      return item => process.env.VUE_APP_BASE_API + `/archive/download/${item.gid}/a.zip`
    }
  },
  created() {
    if (this.$store.state.user) {
      http.archive
        .getMyprojects()
        .then(e => {
          this.list = e.reduce((acc, item) => {
            acc[item.gid] = item
            return acc
          }, {})
        })
        .catch(console.log)
    }
  },
  data() {
    return {
      list: {}
    }
  },
  methods: {
    click() {
      const input = document.createElement('input')
      input.type = 'file'
      input.onchange = () => {
        if (this.$store.state.user) {
          //判断是否登录
        }
        const file = input.files[0]
        const name = file.name
        const suffix = name.substring(name.lastIndexOf('.') + 1)
        if (suffix !== 'zip')
          return this.$message({
            type: 'error',
            message: '仅允许zip文件'
          })
        const form = new FormData()
        form.append('file', file)
        form.append('format', 'MM.dd')
        form.append('day', 7)
        //11.01
        http.archive
          .add(form)
          .then(e => {
            e.status = 'running'
            this.list[e.gid] = e
            return http.archive.run(e.gid)
          })
          .then(({ result, project }) => {
            this.list[project.gid] = project
          })
          .catch(console.log)
      }
      input.click()
    }
  }
}
</script>

<style lang='less' scoped>
.intro {
  width: 400px;
  height: 30px;
  margin: auto;
  margin-bottom: 10px;
}
.function {
  width: 1200px;
  height: 600px;
  margin-left: 159.6px;
}
.button {
  width: 98px;
  margin: auto;
  margin-bottom: 10px;
}
</style>
