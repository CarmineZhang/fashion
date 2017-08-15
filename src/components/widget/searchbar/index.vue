<template>
  <div class="search-bar" id="searchBar" :class="{'search-bar-focusing':isFocus}">
    <form class="search-bar-form">
      <input type="search" class="search-bar-ipt" :placeholder="placeholder" @focus="inputFocus" @blur="inputBlur" v-model="searchValue" ref="input">
      <a class="search-clear" v-show="searchValue!==''" @click="clear"></a>
    </form>
    <a href="javascript:" class="search-bar-search-btn" @click="search">搜索</a>
  </div>
</template>
<script>
import Debounce from '@/libs/debounce'
export default {
  name: 'search-bar',
  props: {
    placeholder: {
      type: String,
      default: '搜索'
    }
  },
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
    inputFocus() {
      this.isFocus = true
    },
    inputBlur() {
      if (this.searchValue.length === 0) {
        this.isFocus = false
      }
    },
    clear() {
      this.searchValue = ''
      this.$refs.input.focus()
    },
    search() {
      //todo
    },
  },
  beforeDestroy() {
    if (this._debounce) {
      this._debounce.cancel()
    }
  }
}
</script>

