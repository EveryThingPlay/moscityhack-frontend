<template>
  <v-container>
    <v-form
      style="display: block; margin: auto; width: 400px"
      lazy-validation
      v-model="valid"
      ref="form"
    >
      <h1>Регистрация</h1>
      <br />
      <h3>Персональные данные</h3>
      <v-text-field
        hide-details="auto"
        label="Имя"
        v-model="firstName"
        :rules="[(v) => !!v || 'Это поле не может быть пустым']"
      ></v-text-field>
      <v-text-field
        hide-details="auto"
        label="Фамилия"
        v-model="secondName"
        :rules="[(v) => !!v || 'Это поле не может быть пустым']"
      ></v-text-field>
      <v-text-field hide-details="auto" label="Отчество" v-model="middleName"></v-text-field>
      <br />
      <h3>Авторизация</h3>
      <v-text-field
        hide-details="auto"
        label="Эл. почта"
        v-model="email"
        :rules="[(v) => !!v || 'Это поле не может быть пустым']"
      ></v-text-field>
      <br />
      <v-text-field
        hide-details="auto"
        label="Пароль"
        type="password"
        v-model="password"
        :rules="[
          (v) => !!v || 'Это поле не может быть пустым',
          (v) => v != passwordConfirm || 'Пароли не совпадают',
        ]"
      ></v-text-field>
      <v-text-field
        hide-details="auto"
        label="Пароль ещё раз"
        type="password"
        v-model="passwordConfirm"
        :rules="[
          (v) => !!v || 'Это поле не может быть пустым',
          (v) => v != password || 'Пароли не совпадают',
        ]"
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
      firstName: '',
      secondName: '',
      middleName: '',
      passwordConfirm: '',
      password: '',
      email: '',
      valid: true,
    };
  },
  methods: {
    async auth() {
      await this.$refs.form.validate();
      if (this.valid) {
        this.$router.push('/');
        const origin = document.location.origin.replace('http://', '').split('.')[0].t;

        const response = await notoken.post('api/v1/authorization/signup', {
          profileCommonInfo: {
            login: this.email,
            password: this.password,
            email: this.email,
          },
          profileType: window.location.origin,
        });
      }
    },
  },
};
</script>
