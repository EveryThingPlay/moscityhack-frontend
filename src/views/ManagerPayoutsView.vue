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
              <th class="text-left">Паблишер</th>
              <th class="text-left">Заработано паблишером</th>
              <th class="text-left">Выплачено паблишеру</th>
              <th class="text-left">Подлежит выплате</th>
              <th class="text-left"></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="item in items" :key="item.name">
              <th>{{ item.publisher }}</th>
              <th>{{ item.receive + 'р' }}</th>
              <th>{{ item.paid + 'р' }}</th>
              <th>{{ item.receive - item.paid + ' р' }}</th>
              <th><v-btn v-if="item.receive - item.paid > 0">Сделать выплату</v-btn></th>
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
          publisher: 'Паблишер 1',
          receive: 100000,
          paid: 50000,
        },
        {
          publisher: 'Паблишер 2',
          receive: 100000,
          paid: 20000,
        },
      ],
    };
  },
};
</script>
