<template>
  <v-app>
    <v-navigation-drawer v-if="(userType == 'manager') & (showNav == true)">
      <v-tab to="/data" stacked style="width: 100%">Данные</v-tab>
      <v-tab to="/files" stacked style="width: 100%">Файлы</v-tab>
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
