import { createApp } from 'vue'
import App from './App.vue'

import FriendComponent from './components/FriendComponent'
import NewFriend from './components/NewFriend'
const app=createApp(App)
app.component('new-friend',NewFriend)
app.component('friend-component',FriendComponent)
app.mount('#app')