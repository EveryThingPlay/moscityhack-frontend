<template>
  <v-container>
    <v-card>
      <v-card-header> <h1>Загрузка отчёта</h1> </v-card-header>
      <v-card-text>
        <v-tabs v-model="tab">
          <v-tab value="upload">Отправка данных</v-tab>
          <v-tab value="download">Загрузка данных</v-tab>
        </v-tabs>
        <v-container v-if="tab == 'upload'">
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
        </v-container>
        <v-container v-if="tab == 'download'">
          <v-card-text>
            <h3>За период:</h3>
            <br />
            От <input type="date" v-model="fromDate" /> До <input type="date" v-model="toDate" />
            <v-container> <v-btn>Скачать отчёт</v-btn></v-container>
          </v-card-text></v-container
        >
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: '1',
      tab: 'upload',
    };
  },
};
</script>
