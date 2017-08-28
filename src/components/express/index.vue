<template>
    <div>
        <p>
            <span>物流公司代码：</span>
            <span v-text="expressStatus.shipperCode"></span>
        </p>
        <p>
            <span>配送方式：</span>
            <span v-text="expressStatus.shippingMode"></span>
        </p>
        <p>
            <span>重量：</span>
            <span>{{expressStatus.weight}} {{weightUnit}}</span>
        </p>
        <p>
            <span>快递单号：</span>
            <span v-text="expressStatus.trackingNo"></span>
        </p>
    </div>
</template>
<script>
import * as http from '@/services'
export default {
    name: 'express',
    data() {
        return {
            expressStatus: {}
        }
    },
    methods: {
        getExpressStatus() {
            http.queryLogistics().then(res => {
                if (res.retcode === 0) {
                    this.expressStatus = res.respbody
                }
            })
        }
    }
}
</script>

