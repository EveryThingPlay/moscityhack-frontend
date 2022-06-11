<template>
  <v-app>
    <v-navigation-drawer v-if="userType == 'manager'">
      <v-tab to="/manager" stacked style="width: 100%">Данные</v-tab>
      <v-tab to="/manager/files" stacked style="width: 100%">Файлы</v-tab>
    </v-navigation-drawer>
    <v-navigation-drawer v-if="userType == 'publisher'">
      <v-tab to="/offers" stacked style="width: 100%">Офферы</v-tab>
      <v-tab to="/stats" stacked style="width: 100%">Сатистика</v-tab>
      <v-tab to="/reports" stacked style="width: 100%">Отчёты</v-tab>
      <v-tab to="/profile" stacked style="width: 100%">Профиль</v-tab>
      <v-tab to="/payouts" stacked style="width: 100%">Выплаты</v-tab>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    userType: 'publisher',
  }),
};
</script>

<style scoped></style>
