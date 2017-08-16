<template>
  <div class="category">
    <div class="fixed-header">
      <category-header></category-header>
      <category-nav></category-nav>
    </div>
    <product-list :list="plist" class="list-wrapper"></product-list>
  </div>
</template>
<script>
import CategoryHeader from './header'
import CategoryNav from './nav'
import ProductList from './list'
export default {
  name: 'category',
  components: {
    CategoryHeader,
    CategoryNav,
    ProductList
  },
  data() {
    return {
      plist: [{
        img: '//img12.360buyimg.com/mcoss/jfs/t6079/171/6285155718/35247/4f7d9b95/5971a0efNe70b048f.jpg.webp',
        desc: '谷秋夏季新款时尚玛丽珍增高女凉鞋',
        price: 139,
        quantity: 1000
      }, {
        img: '//img12.360buyimg.com/mcoss/jfs/t6079/171/6285155718/35247/4f7d9b95/5971a0efNe70b048f.jpg.webp',
        desc: '谷秋夏季新款时尚玛丽珍增高女凉鞋',
        price: 139,
        quantity: 1000
      }, {
        img: '//img12.360buyimg.com/mcoss/jfs/t6079/171/6285155718/35247/4f7d9b95/5971a0efNe70b048f.jpg.webp',
        desc: '谷秋夏季新款时尚玛丽珍增高女凉鞋',
        price: 139,
        quantity: 1000
      }, {
        img: '//img12.360buyimg.com/mcoss/jfs/t6079/171/6285155718/35247/4f7d9b95/5971a0efNe70b048f.jpg.webp',
        desc: '谷秋夏季新款时尚玛丽珍增高女凉鞋',
        price: 139,
        quantity: 1000
      }, {
        img: '//img12.360buyimg.com/mcoss/jfs/t6079/171/6285155718/35247/4f7d9b95/5971a0efNe70b048f.jpg.webp',
        desc: '谷秋夏季新款时尚玛丽珍增高女凉鞋',
        price: 139,
        quantity: 1000
      }, {
        img: '//img12.360buyimg.com/mcoss/jfs/t6079/171/6285155718/35247/4f7d9b95/5971a0efNe70b048f.jpg.webp',
        desc: '谷秋夏季新款时尚玛丽珍增高女凉鞋',
        price: 139,
        quantity: 1000
      }, {
        img: '//img12.360buyimg.com/mcoss/jfs/t6079/171/6285155718/35247/4f7d9b95/5971a0efNe70b048f.jpg.webp',
        desc: '谷秋夏季新款时尚玛丽珍增高女凉鞋',
        price: 139,
        quantity: 1000
      }, {
        img: '//img12.360buyimg.com/mcoss/jfs/t6079/171/6285155718/35247/4f7d9b95/5971a0efNe70b048f.jpg.webp',
        desc: '谷秋夏季新款时尚玛丽珍增高女凉鞋',
        price: 139,
        quantity: 1000
      }, {
        img: '//img12.360buyimg.com/mcoss/jfs/t6079/171/6285155718/35247/4f7d9b95/5971a0efNe70b048f.jpg.webp',
        desc: '谷秋夏季新款时尚玛丽珍增高女凉鞋',
        price: 139,
        quantity: 1000
      }, {
        img: '//img12.360buyimg.com/mcoss/jfs/t6079/171/6285155718/35247/4f7d9b95/5971a0efNe70b048f.jpg.webp',
        desc: '谷秋夏季新款时尚玛丽珍增高女凉鞋',
        price: 139,
        quantity: 1000
      }, {
        img: '//img12.360buyimg.com/mcoss/jfs/t6079/171/6285155718/35247/4f7d9b95/5971a0efNe70b048f.jpg.webp',
        desc: '谷秋夏季新款时尚玛丽珍增高女凉鞋',
        price: 139,
        quantity: 1000
      }]
    }
  }
}
</script>
<style lang="scss">
.category {
  overflow: hidden;
}

.list-wrapper {
  padding-top: 86px;
  padding-bottom: 50px;
}
</style>

