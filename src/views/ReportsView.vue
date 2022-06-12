<template>
  <v-container>
    <v-card>
      <v-card-header> <h1>Загрузка отчёта</h1> </v-card-header>
      <v-card-text>
        В отчёте необходимо отправить таблицу со следующими столбцами:
        <v-list>
          <v-list-item> - time\_stamp - Дата и время</v-list-item>
          <v-list-item> - Clik\_id - ID клика</v-list-item>
          <v-list-item> - client\_id - ID Клиента</v-list-item>
          <v-list-item>
            - Offer\_id - Должен заменяться на название оффера и подписываться как
            Оффер</v-list-item
          >
          <v-list-item> - brauser - Браузер</v-list-item>
          <v-list-item> - Country - Страна</v-list-item>
          <v-list-item> - device - Устройство</v-list-item>
          <v-list-item> - Cost\_conversion - Заработок</v-list-item>
        </v-list>
        <v-btn>Загрузить отчёт</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: '1',
    };
  },
};
</script>
