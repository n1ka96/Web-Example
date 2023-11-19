<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>student name: {{ name }}</h2>
        <h2>student sex: {{ sex }}</h2>
        <h2>student age: {{ age }}</h2>
        <button @click="updateAge">fix age</button>
    </div>
</template>

<script>
    export default {
        name: "Student",
        data() {
            return {
                msg: "i am a Uestc student",
            }
        },
        props: {
            name: {
                type: String,
                require: true
            },
            age: {
                type: Number,
                default: 99
            },
            sex: {
                type: String,
                require: true
            }
        }
    }
</script>