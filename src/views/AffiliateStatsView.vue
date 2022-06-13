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
              <th class="text-left">Оффер</th>
              <th class="text-left">Клики</th>
              <th class="text-left">Продажи</th>
              <th class="text-left">Конверсия</th>
              <th class="text-left">Сумма балансов</th>
              <th class="text-left">Сумма контрактов</th>
              <th class="text-left">Выплаты</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in items" :key="item.name">
              <th>{{ item.offer }}</th>
              <th>{{ item.clicks }}</th>
              <th>{{ item.sells }}</th>
              <th>{{ (item.sells / item.clicks) * 100 + '%' }}</th>
              <th>{{ item.balances + 'р' }}</th>
              <th>{{ item.contracts + 'р' }}</th>
              <th>{{ item.payouts + 'р' }}</th>
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
          offer: 'Дебетовая карта',
          clicks: '1000',
          sells: '100',
          balances: '4000',
          contracts: '5000',
          payouts: '10000',
        },
        {
          offer: 'Кредитная карта',
          clicks: '1000',
          sells: '200',
          balances: '4000',
          contracts: '5000',
          payouts: '10000',
        },
      ],
    };
  },
};
</script>
