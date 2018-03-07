<template>
<!-- eslint-disable -->

  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
            <v-text-field
              name="email"
              label="Email:"
              value="Input text"
              v-model="email">
            </v-text-field>
            <br>
            <v-text-field
              name="password"
              label="Password:"
              value="Input text"
              v-model="password">
            </v-text-field>
                    <div class="error" v-html="error"></div>
            <v-btn @click="login">
              Login
            </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error 
      }
    }
  }
}
</script>
<style>
.error {
  color: red;
}
</style>
