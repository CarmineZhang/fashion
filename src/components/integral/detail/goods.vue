<template>
  <div class="goods-inner">
    <swiper :list="list"></swiper>
    <div class="goods-info">
      <section>
        <p class="goods-desc">夏季潮流男士拖鞋透气沙滩一字拖个性图案时尚青年男生夏天凉拖鞋子 2017-9白面图案 42</p>
        <p class="goods-price">
          <strong v-price="price"></strong>
          <span>积分</span>
          <span>200</span>
        </p>
        <p class="goods-other">
          <span>快递 0.00</span>
          <span>月销 800</span>
          <span>库存 999</span>
        </p>
      </section>
      <section>
        <p>没人限购10件</p>
        <p>满78元包邮</p>
      </section>
      <section>
        <cell type="select" title="产品参数"></cell>
        <cell type="select" title="选择颜色"></cell>
      </section>
      <section>
        <p>商品评价</p>
        <comment></comment>
        <p class="more">
          查看更多
        </p>
      </section>
    </div>
  </div>
</template>
<script>
import Swiper from '@/components/widget/swiper'
import Cell from '@/components/widget/cell'
import Comment from '@/components/widget/comment'
export default {
  name: 'goods',
  components: {
    Swiper,
    Cell,
    Comment
  },
  beforeMount() {
    console.log('goods before mount')
  },
  data() {
    return {
      price: 2000,
      list: [{
        img: '//m.360buyimg.com/mobilecms/s750x750_jfs/t4681/239/2930068290/125413/cea2430c/58f46bcfN504c893d.jpg!q80.jpg.webp'
      }, {
        img: '//m.360buyimg.com/mobilecms/s750x750_jfs/t4489/277/2733185219/458267/a4627e13/58f46be2Nf7486b41.jpg!q80.jpg.webp'
      }, {
        img: '//m.360buyimg.com/mobilecms/s750x750_jfs/t4849/305/1771777928/374099/c319fc1c/58f46be2N9a66791b.jpg!q80.jpg.webp'
      }]
    }
  }
}
</script>

