<template>
  <div class="search-bar" id="searchBar" :class="{'search-bar-focusing':isFocus}">
    <form class="search-bar-form">
      <input type="search" class="search-bar-ipt">
    </form>
    <a href="javascript:" class="search-bar-cancel-btn" @click="cancel">取消</a>
  </div>
</template>
<script>
export default {
  name: 've-searchbar',
  data() {
    return {
      isFocus: false,
      searchValue: ''
    }
  },
  methods: {
    labelClick() {
      this.isFocus = true
    },
    inputBlur() {
      this.isFocus = false
      if (this.searchValue.length) {
        this.$emit('on-change', this.searchValue)
      }
    },
    cancel() {
      this.searchValue = ''
      this.isFocus = false
    },
    clear() {
      this.searchValue = ''
      this.isFocus = true
    }
  }
}
</script>

