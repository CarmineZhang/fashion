<template>
  <div class="search-bar" id="searchBar" :class="{'search-bar-focusing':isFocus}">
    <form class="search-bar-form">
      <input type="search" class="search-bar-ipt" v-model="searchValue">
    </form>
    <a href="javascript:" class="search-bar-cancel-btn" @click="cancel">取消</a>
  </div>
</template>
<script>
import Debounce from '@/libs/debounce'
export default {
  name: 'search-bar',
  data() {
    return {
      isFocus: false,
      searchValue: ''
    }
  },
  created() {
    this._debounce = Debounce(() => {
      this.$emit('on-change', this.searchValue)
    }, 300)
  },
  watch: {
    searchValue(val, oldVal) {
      if (val !== '' && val !== oldVal) {
        this._debounce()
      }
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
  },
  beforeDestroy() {
    if (this._debounce) {
      this._debounce.cancel()
    }
  }
}
</script>

