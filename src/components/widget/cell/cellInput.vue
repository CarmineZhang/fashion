<template>
    <div class="cell cell-form">
        <div class="cell-hd" v-text="title"></div>
        <div class="cell-bd">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'cell-input',
    props: {
        title: String
    }
}
</script>

