<template>
<!-- 主页代表 -->
  <div>
    <div>
      <TopSpace />
    </div>
    <div style="margin-top: 20px">
      <WebDataSpace />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    TopSpace: (resolve) => {
      require(["@/components/home/TopSpace"], resolve);
    },
    WebDataSpace: (resolve) => {
      require(["@/components/home/WebDataSpace"], resolve);
    },
  },
  data(){
    return{
      icon:''
    }
  }
};
</script>