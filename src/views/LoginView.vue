<template>
  <v-container>
    <v-form
      style="display: block; margin: auto; width: 400px"
      lazy-validation
      v-model="valid"
      ref="form"
    >
      <h1>Авторизация</h1>
      <br />
      <v-text-field
        hide-details="auto"
        label="Email"
        v-model="email"
        :rules="[(v) => !!v || 'Вы не указали почту']"
      ></v-text-field>
      <v-text-field
        hide-details="auto"
        label="Пароль"
        type="password"
        v-model="password"
        :rules="[(v) => !!v || 'Вы не укзали пароль']"
      ></v-text-field>
      <v-btn block @click="auth()">Продолжить</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      valid: true,
    };
  },
  methods: {
    async auth() {
      await this.$refs.form.validate();
      if (this.valid) {
        this.$router.push('/');
      }
    },
  },
};
</script>
