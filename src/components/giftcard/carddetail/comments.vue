<template>
  <div style="width:100%">
    <comment :list="evaluateList"></comment>
  </div>
</template>
<script>
import Comment from '@/components/widget/comment'
import * as http from '@/services'
export default {
  name: 'comments',
  data() {
    return {
      id: 0,
      index: 1,
      evaluateCount: 0,
      evaluateList: []
    }
  },
  components: {
    Comment
  },
  created() {
    this.id = this.$store.state.route.query.id
    this.getEvaluate()
  },
  methods: {
    getEvaluate() {
      http.commodityEvaluate(this.id, this.index, 10).then(res => {
        if (res.retcode === 0) {
          this.evaluateCount = res.respbody.total
          this.evaluateList = res.respbody.list
        }
      })
    }
  }
}
</script>


