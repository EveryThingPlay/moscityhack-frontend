<template>
  <v-container>
    <h1>Офферы</h1>
    <br />
    <v-table style="max-height: 70vh; overflow: auto">
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
            <v-btn @click="$router.push(`/manager/offers/${channel}`)">Детали</v-btn>
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
    <br />
    <v-btn append-icon="mdi-plus-circle" @click="newOffer = !newOffer">Создать оффер</v-btn>
    <v-slide-y-transition>
      <v-container v-if="newOffer" transition="scroll-x-transition">
        <h2>Новый оффер</h2>
        <v-col cols="4">
          <v-row style="margin: 0; gap: 40px">
            <v-text-field label="Название оффера" v-model="offerName" />
            <v-file-input
              label="Логотип оффера"
              prepend-icon="mdi-image"
              accept="image/*"
              chips
              style="width: 10px"
              hint="Логотип должен иметь соотношение сторон 1:1"
              v-model="logo"
              :rules="logotypeRules()"
            ></v-file-input>
          </v-row>
          <v-textarea label="Описание оффера" v-model="offerDescription" no-resize></v-textarea>
          <v-select
            label="Категория"
            :items="['Категория 1', 'Категория 2', 'Категория 3']"
          ></v-select>
        </v-col>
      </v-container>
    </v-slide-y-transition>
    <v-snackbar v-model="snackbar"> Ссылка скопирована в буфер обмена! </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      newOffer: false,
      offerName: '',
      offerDescription: '',
      offerCategory: '',
      logo: [],

      channels: ['Offer 1', 'Offer 2', 'Offer 3'],
    };
  },
  methods: {
    copyLink(link) {
      navigator.clipboard.writeText(link);
      this.snackbar = true;
      setTimeout(() => (this.snackbar = false), 1500);
    },
    logotypeRules() {
      console.log(this.logo[0]);
      let image = new Image(this.logo[0]);
      console.log(image);
    },
  },
};
</script>

<style scoped lang="sass"></style>
