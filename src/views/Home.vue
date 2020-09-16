<template>
  <div class="home">
    <div>
      <el-button type="primary" @click="goHome">进入首页</el-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data(){
    return{

    }
  },
  methods:{
    goHome(){
      this.$router.push('/index')
    }
  }
};
</script>
