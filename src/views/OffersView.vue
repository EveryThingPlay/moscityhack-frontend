<template>
  <v-container>
    <h1>Офферы</h1>
    <br />
    <v-table>
      <thead style="background-color: #2196f3; color: white">
        <tr v-if="$route.params.id == undefined">
          <th style="width: 100px"></th>
          <th style="text-align: center">Название</th>
          <th style="text-align: center">CPA</th>
          <th style="text-align: center; width: 10%">Детали</th>
          <th style="text-align: center; width: 15%">Ссылка</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="channel in channels" :key="channel">
          <th style="text-align: center">
            <img src="../assets/logo.svg" style="max-height: 64px; padding: 5px" />
          </th>
          <th style="text-align: center">{{ channel }}</th>
          <th style="text-align: center">{{ channel }}</th>
          <th style="text-align: center">
            <v-btn @click="$router.push(`/offer_${channel}`)">Детали</v-btn>
          </th>
          <th style="text-align: center">
            <v-btn
              variant="text"
              append-icon="mdi-clipboard-text-multiple-outline"
              @click="copyLink(channel)"
            >
              Скопировать ссылку
            </v-btn>
          </th>
        </tr>
      </tbody>
    </v-table>
    <v-snackbar v-if="snackbar"> Ссылка скопирована в буфер обмена! </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      channels: ['Offer 1', 'Offer 2', 'Offer 3'],
    };
  },
  methods: {
    copyLink(link) {
      console.log(navigator.clipboard);
      navigator.clipboard.writeText(link);
      this.snackbar = true;
      setTimeout(() => (this.snackbar = false), 1500);
    },
  },
};
</script>

<style scoped lang="sass"></style>
