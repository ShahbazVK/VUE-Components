<template>
<div>
    <form @submit.prevent="submitFunc">
        Name: <input type="text" name="name" v-model="name"><br><br>
        Phone: <input type="text" name="phone" v-model="phone"><br><br>
        Email: <input type="text" name="email" v-model="email"><br><br>
        <input type="submit" value="Submit">
    </form>
</div>
</template>

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            name: '',
            phone: '',
            email: '',
        }
    },
    methods: {
        submitFunc() {
            // console.log("object")
            this.$emit('add-contact',this.name,this.phone,this.email)
        }
    },

}
</script>

<style>

</style>
