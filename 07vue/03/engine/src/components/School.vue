<template>
    <div class="demo">
        <h2>school name: {{ name }}</h2>
        <h2>school address: {{ address }}</h2>
        <button @click="showName">点我提示学校名字</button>
    </div>
</template>

<script>
    export default {
        name: "School",
        data() {
            return {
                name: "UESTC",
                address: "成都"
            }
        },
        methods: {
            showName() {
                alert(this.$refs.btn);
            }
        }
    }
</script>

<style>
    .demo {
        background-color: orange;
    }
</style>