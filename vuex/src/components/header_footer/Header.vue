<template>
<div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">Beardit.com</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
           <router-link to="/admin" class="nav-link">Admin</router-link>
        </li>
        <li class="nav-item" v-if="!this.$store.getters['admin/isAuthUser']">
           <div class="nav-link" @click="loginUser()">Login</div>
        </li>
        <li class="nav-item" v-if="this.$store.getters['admin/isAuthUser']">
           <div class="nav-link" @click="logoutUser(false)">Logout</div>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods:{
    ...mapActions('admin',{
      loginUser:'authUser',
      logoutUser: 'signOut'
    })
    // loginUser(){
    //     this.$store.dispatch({
    //       type:'authUser'
    //     })
    // },
    // logoutUser(){
    //   this.$store.dispatch('signOut',false)
    // }
  }
}
</script>

<style>
    body {
       padding:0;
       margin:0;
       font-family: 'Roboto', sans-serif;
   }
</style>