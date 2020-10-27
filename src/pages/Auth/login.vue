<template>
  <div class="q-my-lg column items-center">
    <q-card class="login-form">
      <q-card-section>
        <p class="text-h5 q-ma-none text-bold">Login</p>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <form action="" class="q-mx-md">
          <div class="q-gutter-sm">
            <q-input label="User name" v-model="username">
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
            </q-input>
          </div>
          <div class="q-gutter-sm">
            <q-input
              label="Password"
              v-model="password"
              :type="visible ? 'text' : 'password'"
            >
              <template v-slot:prepend>
                <q-icon name="vpn_key" />
              </template>
              <template v-slot:append>
                <q-icon
                  name="remove_red_eye"
                  @click="
                    (e) => (visible ? (visible = false) : (visible = true))
                  "
                />
              </template>
            </q-input>
          </div>
          <div class="q-gutter-sm q-my-sm">
            <q-checkbox v-model="remember" label="Remember password" />
          </div>

          <div class="q-gutter-sm text-center">
            <q-btn
              icon="login"
              class="q-my-md"
              color="primary"
              label="Login"
              @click="submit"
            />
          </div>
        </form>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  name: 'AppLoginPage',
  data() {
    return {
      username: null,
      password: null,
      remember: false,
      visible: false
    };
  },
  methods: {
    submit(e) {
      console.log(this.username, this.password, this.remember);
      console.log(`clicked the submit button ${JSON.stringify(e, null, 2)}`);
    }
  }
};
</script>
<style lang="scss">
.login-form {
  min-width: 400px;
}
</style>
