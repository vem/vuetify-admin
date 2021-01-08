<template>
  <v-app>
    <v-container>
      <v-row class="text-center mt-10">
        <v-col cols="12">
          <span class="text-h5">Vuetify Admin</span>
        </v-col>
      </v-row>
      <div class="pa-6 mx-auto mt-8 register-box">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12">
              <div class="text-center font-weight-light text-subtitle-1">
                Register a new membership
              </div>
              <div>
                <v-text-field
                  label="Full name"
                  v-model="fullName"
                  :rules="fullNameRules"
                  hide-details="auto"
                  prepend-icon="mdi-account"
                ></v-text-field>
                <v-text-field
                  label="Email"
                  v-model="email"
                  :rules="emailRules"
                  hide-details="auto"
                  prepend-icon="mdi-email"
                ></v-text-field>
                <v-text-field
                  type="password"
                  label="Password"
                  v-model="password"
                  :rules="passwordRules"
                  hide-details="auto"
                  prepend-icon="mdi-lock"
                ></v-text-field>
                <v-text-field
                  type="password"
                  label="Retype password"
                  v-model="rePassword"
                  :rules="rePasswordRules"
                  hide-details="auto"
                  prepend-icon="mdi-repeat"
                  v-validate="'required|confirmed:password'"
                ></v-text-field>
              </div>
            </v-col>
            <v-col cols="12">
              <v-checkbox
                class="mt-0"
                hide-details="auto"
                :rules="[(v) => !!v || 'You must agree to continue!']"
              >
                <template v-slot:label>
                  <div>
                    I agree to the
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on }">
                        <a
                          target="_blank"
                          href="http://vuetifyjs.com"
                          @click.stop
                          v-on="on"
                        >
                          terms
                        </a>
                      </template>
                      Opens in new window
                    </v-tooltip>
                  </div>
                </template>
              </v-checkbox>
            </v-col>
            <v-col cols="12" class="text-center">
              <v-btn elevation="2" color="primary" @click="userRegister"
                >Register</v-btn
              >
            </v-col>
            <v-col cols="12" class="text-center font-weight-light"
              >- OR -</v-col
            >
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
            <v-col cols="12 body-2">
              <router-link to="/login">I already have a membership</router-link>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    fullName: "",
    fullNameRules: [
      (v) => !!v || "Full name is required",
      (v) =>
        (v && v.length >= 6) || "Full name must be greater than 6 characters",
    ],
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
    rePassword: "",
    rePasswordRules: [
      (v) => !!v || "Retype password is required",
      (v) =>
        (v && v.length >= 6) || "Password must be greater than 6 characters",
    ],
  }),

  methods: {
    userRegister() {
      this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss">
.v-application {
  background-color: #d2d6de !important;
  .register-box {
    background-color: #ffffff;
  }
}
.register-box {
  width: 400px;
}
@media (max-width: 768px) {
  .register-box {
    width: 90%;
  }
}
</style>