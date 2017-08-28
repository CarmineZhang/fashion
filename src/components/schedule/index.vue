<template>
    <div>
        <h3 v-text="title"></h3>
        <iframe :src="Src" frameborder="0" width="100%" :height="height"></iframe>
    </div>
</template>
<script>
import * as http from '@/services'
export default {
    name: 'schedule',
    data() {
        return {
            title: String,
            src: String
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

