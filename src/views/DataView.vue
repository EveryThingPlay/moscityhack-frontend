<template>
  <v-container>
    <h1 v-if="$route.params.channel == undefined">Данные по всем каналам</h1>
    <h1 v-if="$route.params.channel != undefined && $route.params.group == undefined">
      Данные по каналу {{ $route.params.channel }}
    </h1>
    <h1 v-if="$route.params.group != undefined">Данные по компании {{ $route.params.group }}</h1>
    <br />
    <v-table>
      <thead style="background-color: #2196f3; color: white">
        <tr v-if="$route.params.id == undefined">
          <th class="text-left">Канал</th>
          <th class="text-left">Охват</th>
          <th class="text-left">Продажи</th>
          <th class="text-left">CAC</th>
          <th class="text-left">ARPU</th>
          <th class="text-left">LTV</th>
          <th class="text-left">ROI</th>
        </tr>
        <tr v-if="$route.params.id != undefined">
          <th class="text-left">Компания</th>
          <th class="text-left">Охват</th>
          <th class="text-left">Продажи</th>
          <th class="text-left">CAC</th>
          <th class="text-left">ARPU</th>
          <th class="text-left">LTV</th>
          <th class="text-left">ROI</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="channel in channels" :key="channel.name" @click="doStuff(channel.id)">
          <th>{{ channel.name }}</th>
          <th>{{ channel.views }}</th>
          <th>{{ channel.sells }}</th>
          <th>{{ channel.cac }}</th>
          <th>{{ channel.arpu }}</th>
          <th>{{ channel.ltv }}</th>
          <th>{{ channel.roi }}</th>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      channels: [
        {
          id: 1,
          name: 'Яндекс Директ',
          views: 1000,
          sells: 1000,
          cac: 20,
          arpu: '4000р',
          ltv: '5000р',
          roi: '275%',
        },
        {
          id: 2,
          name: 'ВК Таргет',
          views: 1000,
          sells: 1000,
          cac: 20,
          arpu: '4000р',
          ltv: '5000р',
          roi: '275%',
        },
        {
          id: 3,
          name: 'MyTarget',
          views: 1000,
          sells: 1000,
          cac: 20,
          arpu: '4000р',
          ltv: '5000р',
          roi: '275%',
        },
      ],
    };
  },
  methods: {
    doStuff(id) {
      if (this.$route.params.channel == undefined) {
        this.$router.push(`/${id}`);
      }
      if (this.$route.params.channel != undefined && this.$route.params.group == undefined) {
        this.$router.push(`/${this.$route.params.channel}/${id}`);
      }
    },
  },
};
</script>
