<template>
  <div class="q-my-lg column items-center">
    <q-card class="login-form">
      <q-card-section>
        <p class="text-h5 q-ma-none text-bold">Signup</p>
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
            <q-input label="Email" v-model="email" type="email">
              <template v-slot:prepend>
                <q-icon name="email" />
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
            <q-checkbox v-model="agree" label="Agree terms and policies" />
          </div>

          <div class="q-gutter-sm text-center">
            <q-btn
              icon="login"
              class="q-my-md"
              color="primary"
              label="Signup"
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
  name: 'AppSignupPage',
  data() {
    return {
      username: null,
      password: null,
      email: null,
      visible: true,
      agree: false
    };
  },
  methods: {
    submit() {}
  }
};
</script>
<style lang="scss"></style>
