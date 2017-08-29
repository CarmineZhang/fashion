<template>
  <div class="flea-pub-wrapper">
    <my-select @on-click="choose"></my-select>
    <goods :data="list" @on-select="publish"></goods>
  </div>
</template>
<script>
import MySelect from '../common/select'
import Goods from '../common/goods'
export default {
  name: 'flea-market-sale-publish',
  components: {
    MySelect, Goods
  },
  computed: {
    list() {
      return this.$store.state.goods.jflist
    }
  },
  methods: {
    choose(id) {
      this.$store.dispatch('getJFCommodity', {
        cId: id,
        index: 1,
        size: 100
      })
    },
    publish(item){
      this.$router.push({name:'publish-buy',params:{id:item.commodityId}})
    }
  }
}
</script>
<style lang="scss">
.flea-pub-wrapper {
  position: relative;
}
</style>
