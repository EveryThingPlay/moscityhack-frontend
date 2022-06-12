<template>
  <v-app>
    <v-navigation-drawer v-if="(userType == 'manager') & (showNav == true)">
      <v-tab to="/data" stacked style="width: 100%">CPC Дашборд</v-tab>
      <v-tab to="/files" stacked style="width: 100%">Работа с данными</v-tab>
      <v-tab to="/finances" stacked style="width: 100%">Оптимизация расходов</v-tab>
      <v-tab to="/files" stacked style="width: 100%">Рекомендации</v-tab>
      <v-tab to="/files" stacked style="width: 100%">CPA Офферы</v-tab>
      <v-tab to="/files" stacked style="width: 100%">Данные по клиентам</v-tab>
      <v-tab to="/files" stacked style="width: 100%">Статистика CPA</v-tab>
      <v-tab to="/files" stacked style="width: 100%">Паблишеры</v-tab>
      <v-tab to="/files" stacked style="width: 100%">Выплаты</v-tab>
    </v-navigation-drawer>
    <v-navigation-drawer v-if="(userType == 'publisher') & (showNav == true)">
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
    showNav: true,
  }),
  mounted() {
    let url = window.location.origin;
    url = url.replace('http://', '');
    url = url.split('.');
    if (url[0] == 'manager') {
      this.userType = 'manager';
    } else if (url[0] == 'affiliate') {
      this.userType = 'publisher';
    } else {
      this.showNav = false;
    }
  },
};
</script>

<style scoped></style>
