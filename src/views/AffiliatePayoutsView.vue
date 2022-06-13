<template>
  <v-container>
    <v-card>
      <v-card-header>
        <h1>Выплаты</h1>
      </v-card-header>
      <v-card-text>
        <v-table>
          <thead style="background-color: #2196f3; color: white">
            <tr>
              <th class="text-left">Оффер</th>
              <th class="text-left">Заработано</th>
              <th class="text-left">Получено</th>
              <th class="text-left">Ожидает платежа</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in items" :key="item.name">
              <th>{{ item.offer }}</th>
              <th>{{ item.receive + 'р' }}</th>
              <th>{{ item.paid + 'р' }}</th>
              <th>{{ item.receive - item.paid + ' р' }}</th>
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
          receive: 100000,
          paid: 50000,
          payouts: 10000,
        },
        {
          offer: 'Кредитная карта',
          receive: 100000,
          paid: 20000,
        },
      ],
    };
  },
};
</script>
