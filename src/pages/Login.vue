<template>
  <v-container>
    <v-row class="text-center mt-10">
      <v-col cols="12">
        <span class="text-h5">Vuetify Admin</span>
      </v-col>
    </v-row>
    <div class="pa-6 mx-auto mt-8 login-box">
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-row>
          <v-col cols="12">
            <div class="text-center font-weight-light text-subtitle-1">
              Sign in to start your session
            </div>
            <div>
              <v-text-field
                label="Email"
                v-model="email"
                :rules="emailRules"
                hide-details="auto"
                prepend-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="password"
                :rules="passwordRules"
                prepend-icon="mdi-lock"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" sm="6">
            <v-checkbox label="Remember Me" class="mt-0"></v-checkbox>
          </v-col>
          <v-col cols="12" sm="6">
            <v-btn
              elevation="2"
              color="primary"
              class="float-right"
              @click="userSignIn"
              >Sign In</v-btn
            >
          </v-col>
          <v-col cols="12" class="text-center font-weight-light">- OR -</v-col>
          <v-col cols="12 text-truncate">
            <v-btn block elevation="0">
              <v-icon left> mdi-facebook </v-icon>
              Sign in using Facebook
            </v-btn>
            <v-btn block class="mt-2" elevation="0">
              <v-icon left> mdi-google </v-icon>
              Sign in using Google
            </v-btn>
          </v-col>
          <v-col cols="12">
            <a href="#" class="body-2">I forgot my password</a><br />
            <a href="" class="body-2">Register a new membership</a>
          </v-col>
        </v-row>
      </v-form>
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length >= 6) || "Password must be greater than 6 characters",
    ],
  }),

  methods: {
    userSignIn() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss">
.v-application {
  background-color: #d2d6de !important;
  .login-box {
    background-color: #ffffff;
  }
}
.login-box {
  width: 360px;
}
@media (max-width: 768px) {
  .login-box {
    width: 90%;
  }
}
</style>