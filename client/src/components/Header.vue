<template>
    <v-toolbar fixed class="cyan">
        <v-toolbar-title class="mr-4">
               <span @click="navigateTo({name: 'root'})"
               class="home"
               >TabTracker</span>
        </v-toolbar-title>

        <!-- <v-toolbar-items>
            <v-btn flat dark>
                Browse
            </v-btn>
        </v-toolbar-items> -->

        <v-spacer></v-spacer>

        <v-toolbar-items>
                <v-btn flat dark router to="login">
                    Login
                </v-btn>
                <v-btn flat dark router to="register">
                    Sign Up
                </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    }
}
</script>
<style>
.home {
    cursor: pointer;
}

.home:hover {
    color: #919191;
}
</style>
