<template>
  <v-container>
    <v-card>
      <v-card-header>
        <h1>CPA Сатистика</h1>
      </v-card-header>
      <v-card-text>
        <v-table>
          <thead style="background-color: #2196f3; color: white">
            <tr>
              <th class="text-left">Паблишер</th>
              <th class="text-left">Оффер</th>
              <th class="text-left">Клики</th>
              <th class="text-left">Продажи</th>
              <th class="text-left">Конверсия</th>
              <th class="text-left">Сумма балансов</th>
              <th class="text-left">Сумма контрактов</th>
              <th class="text-left">Выплаты паблишерам</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in items" :key="item.name">
              <th>{{ item.publisher }}</th>
              <th>{{ item.offer }}</th>
              <th>{{ item.clicks }}</th>
              <th>{{ item.sells }}</th>
              <th>{{ item.conversion }}</th>
              <th>{{ item.balances }}</th>
              <th>{{ item.contracts }}</th>
              <th>{{ item.payouts }}</th>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          publisher: 'pesudopublisher',
          offer: 'pesudooffer',
          clicks: 'pesudoclicks',
          sells: 'pesudosells',
          conversion: 'pesudoconversion',
          balances: 'pesudobalances',
          contracts: 'pesudocontracts',
          payouts: 'pesudopayouts',
        },
      ],
    };
  },
};
</script>
