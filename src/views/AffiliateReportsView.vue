<template>
  <v-container>
    <v-card>
      <v-card-header> <h1>Данные по клиентам</h1> </v-card-header>
      <v-card-text>
        <h3>За период:</h3>
        <br />
        От <input type="date" v-model="fromDate" /> До <input type="date" v-model="toDate" />
        <v-container> <v-btn>Скачать отчёт</v-btn></v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: '1',
      fromDate: null,
      toDate: null,
    };
  },
};
</script>
