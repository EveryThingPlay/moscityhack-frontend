<template>
  <v-card>
    <v-card-header>
      <h1>Паблишеры</h1>
    </v-card-header>
    <v-card-text>
      <v-table style="width: 900px">
        <thead style="background-color: #2196f3; color: white">
          <tr>
            <th class="text-left">Паблишер</th>
            <th class="text-left">Имя</th>
            <th class="text-left">Реквизит</th>
            <th class="text-left" style="width: 90px"></th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in items" :key="item.name">
            <th>{{ item.publisher }}</th>
            <th>{{ item.name }}</th>
            <th>{{ item.req }}</th>
            <th><v-btn>Деактивировать</v-btn></th>
          </tr>
        </tbody>
      </v-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { publisher: 'Паблишер 1', name: 'Иван Сергеевич', req: 'Банковская карта' },
        { publisher: 'Паблишер 1', name: 'Алексей Андреевич', req: 'Счёт' },
        { publisher: 'Паблишер 2', name: 'МИлана Викторовна', req: 'Банковская карта' },
      ],
    };
  },
};
</script>
