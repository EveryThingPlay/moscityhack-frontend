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
        label="Логин"
        v-model="username"
        :rules="[(v) => !!v || 'Вы не указали логин']"
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
import notoken from '../axios/notoken';
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
        const response = await notoken.post('/api/v1/authorization/signup', {
          login: this.username,
          password: this.password,
        });
        console.log(response);
        if (response.ok) {
          await this.$router.push('/');
        }
      }
    },
  },
};
</script>
