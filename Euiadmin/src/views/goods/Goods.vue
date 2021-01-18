<template>
  <el-row :gutter="20" v-infinite-scroll="load">
    <el-col
      :span="6"
      v-for="(goods, index) in goods_data"
      :key="index"
      style="margin-top: 10px"
    >
      <el-card shadow="never">
        <div slot="header">
          <span>{{ goods.goods_title }}</span>
          <el-tag :type="goods.goods_surplus_num < 10 ? 'danger' : 'success'"
            >剩余{{ goods.goods_surplus_num }}</el-tag
          >
        </div>
        <div>
          <el-popover
            placement="top-start"
            title="商品介绍"
            trigger="hover"
            :content="goods.goods_adress"
          >
            <el-image slot="reference" :src="goods.goods_src"></el-image>
          </el-popover>
        </div>
        <div align="center">
          <el-button
            size="small"
            type="danger"
            round
            icon="el-icon-shopping-cart-2"
            >￥{{ goods.goods_price }}</el-button
          >
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {
      goods_data: [],
    };
  },
  methods: {
    create_goods_data() {
      var goods = new Array();
      for (let index = 0; index < 50; index++) {
        goods[index] = {
          id: index,
          goods_title:
            parseInt(Math.random() * 2, 10) + 1 == 1 ? "胡萝卜" : "自行车",
          goods_src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          goods_adress: "这是新鲜的胡萝卜，有特别的口味",
          goods_surplus_num: parseInt(
            Math.random() * (1000 - 100 + 1) + 100,
            10
          ),
          goods_price: parseInt(Math.random() * (1000 - 100 + 1) + 100, 10),
        };
      }
      this.goods_data = goods;
      // console.log(goods)
    },
    load() {
      var goods = new Array();
      for (let index = 0; index < 50; index++) {
        goods = {
          id: index,
          goods_title:
            parseInt(Math.random() * 2, 10) + 1 == 1 ? "胡萝卜" : "自行车",
          goods_src:
            "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
          goods_adress: "这是新鲜的胡萝卜，有特别的口味",
          goods_surplus_num: parseInt(
            Math.random() * (1000 - 100 + 1) + 100,
            10
          ),
          goods_price: parseInt(Math.random() * (1000 - 100 + 1) + 100, 10),
        };
        this.goods_data.splice( this.goods_data.length,0,goods)
      }
      this.$message('生成数据成功')
      console.log(this.goods_data)
    },
  },
  mounted() {
    this.create_goods_data();
  },
};
</script>