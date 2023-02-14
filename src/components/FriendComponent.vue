<template>
<div>
    <h1 class="name">{{name}}</h1>
    <button class="visiblebutton" @click="toggleDetails">{{detailsAreVisible?'Hide':'Show'}} details</button>
    <div v-if="detailsAreVisible">
      <br>
        <button class="deletefriend" @click="deleteFriend()">Delete friend</button>

        <p>Email: {{emailAddress}}</p>
        <button @click="changeEmailFunc">Change email address? You cannot. See the console after uncommenting changeEmail method.</button>
        <p>Phone: {{phoneNumber}}</p>
    </div>
    <hr>
</div>
</template>

<script>
export default {
    name: 'FriendComponent',
    // props:[
    //   'name',
    //   'phoneNumber',
    //   'emailAddress',
    // ],
    emits: ['change-email'],
    props: {
        id: {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            detailsAreVisible: false,
            changeEmail: "changedemail@localhost.com"
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        },
        changeEmailFunc() {
            // this.emailAddress="changedemail@localhost.com"
            this.$emit('change-email', this.id, this.changeEmail)
        },
        deleteFriend() {
          this.$emit('delete-friend',this.id)
        }
    }
}
</script>

<style>
* {
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

}

.visiblebutton, .deletefriend {
    padding: 10px;
    background-color: rgba(255, 20, 145, 0.561);
    color: white;
    font-weight: bold;
    font-size: 16px;
    border-radius: 16px;
}
.deletefriend{
  background-color: rgba(202, 17, 17, 0.731);
}
</style>
