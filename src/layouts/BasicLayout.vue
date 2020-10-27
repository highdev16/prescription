<template>
  <q-layout>
    <q-header class="q-px-lg" elevated>
      <q-toolbar>
        <q-toolbar-title> Quasar App </q-toolbar-title>
        <div>
          <q-btn label="login" flat dense @click="login" class="q-mx-sm" />
          <q-btn label="signup" flat dense @click="signup" class="q-mx-sm" />
        </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  name: 'BasicLayout',
  methods: {
    login() {
      this.$router.push({ name: 'login' });
    },
    signup() {
      this.$router.push({ name: 'signup' });
    }
  }
};
</script>
<style lang="scss"></style>
