<template>
    <div>
        <div class="header-wrapper">
      <div class="header-back"></div>
      <div class="header-info">订单进度</div>
    </div>
        <h3>{{title}}</h3>
        <iframe :src="src" frameborder="0" width="100%" :height="height"></iframe>
    </div>
</template>
<script>
import * as http from '@/services'
export default {
    name: 'schedule',
    data() {
        return {
            title:'',
            height:0,
            src: ''
        }
    },
    created() {
        
    },
    mounted() {
        this.height = document.documentElement.clientHeight - 90
    },
    methods: {
        getOrderSchedule() {
            http.queryOrderSchedule().then(res => {
                if (res.retcode === 0) {
                    this.title = res.respbody.scheduleTitle
                    this.src = res.respbody.scheduleContent
                }
            })
        }
    }
}
</script>

