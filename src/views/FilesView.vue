<template>
  <v-container>
    <v-tabs v-model="tab">
      <v-tab value="file">Загрузка файлов</v-tab>
      <v-tab value="logs">Просмотр логов</v-tab>
      <v-tab value="channel">Добавление каналов</v-tab>
    </v-tabs>
  </v-container>

  <v-container>
    <v-form v-if="tab == 'file'">
      <v-select label="Выберите канал" :items="channels" v-model="channel" />
      <v-tabs v-model="source" v-if="channel">
        <v-tab value="cabinets">Рекламные кабинеты</v-tab>
        <v-tab value="innerdata">Внутренние данные</v-tab>
      </v-tabs>
      <v-card title="Загрузка файла" v-if="source && channel">
        <v-card-text>
          <v-btn>Скачать шаблон для ввода данных</v-btn> <br />

          <v-card-text>
            За период: <br />
            От <input type="date" v-model="fromDate" /> До <input type="date" v-model="toDate" />
          </v-card-text>

          <v-btn v-if="fromDate && toDate">Загрузить файл</v-btn>
          <v-btn disabled v-else>Загрузить файл</v-btn>
        </v-card-text>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'FilesView',
  data() {
    return {
      tab: 'file',
      showForm: false,
      channels: ['Mytarget', 'ВК', 'Яндекс Директ', 'Все'],
      channel: null,
      source: 'one',
      fromDate: null,
      toDate: null,
    };
  },
};
</script>
