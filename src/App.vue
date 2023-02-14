<template>
<div>
    <h1>My Friends</h1>
    <new-friend @add-contact="addFriend"></new-friend>
    <friend-component v-for="(friend,index) in friends"
    :key="index" 
    :id="friend.id"
    :name=friend.name 
    :phone-number=friend.phoneNumber 
    :email-address= friend.emailAddress 
    @change-email='changeEmail'
    @delete-friend='deleteFriend'>
  </friend-component>
    <!-- <friend-component name="Shahbaz1" phone-number="4783 2453 4145" email-address="shahbazvk12@localhost.com" />
    <friend-component name="Shahbaz2" phone-number="4783 1233 3450" email-address="shahbazvk34@localhost.com" /> -->
</div>
</template>

<script>
import NewFriend from './components/NewFriend.vue'
export default {
  components: { NewFriend },
    name: 'App',
    data() {
        return {

            friends: [{
                id: 0,
                name: 'Shahbaz',
                phoneNumber: '834 8347 7348',
                emailAddress: 'shahbazalivk@localhost.com',
            }, {
                id: 1,
                name: 'Shahbaz1',
                phoneNumber: '834 8347 7348',
                emailAddress: 'shahbazalivk1@localhost.com',
            }, {
                id: 2,
                name: 'Shahbaz2',
                phoneNumber: '834 8347 7348',
                emailAddress: 'shahbazalivk2@localhost.com',
            }],
        }
    },
    methods: {
      changeEmail(friendId,changeEmail){
        // alert("Working")
        const identifiedFriend=this.friends.find((friend)=>friendId===friend.id)
        identifiedFriend.emailAddress=changeEmail
      },
      addFriend(name,phoneNumber,emailAddress){
        // console.log('name,phoneNumber,emailAddress')
        this.friends.push({id:this.friends.length,name,phoneNumber,emailAddress})
      },
      deleteFriend(friendIdToBeDeleted){
        this.friends=this.friends.filter(friend=>friend.id!==friendIdToBeDeleted)
      }
    }
}
</script>

<style>
</style>
