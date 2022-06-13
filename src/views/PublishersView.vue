<template>
  <v-card>
    <v-card-header>
      <h1>Паблишеры</h1>
      <v-table>
        <thead style="background-color: #2196f3; color: white">
          <tr>
            <th class="text-left">Паблишер</th>
            <th class="text-left">Имя</th>
            <th class="text-left">Реквизит</th>
            <th class="text-left">Деактивировать</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in items" :key="item.name">
            <th>{{ item.publisher }}</th>
            <th>{{ item.name }}</th>
            <th>{{ item.clicks }}</th>
            <th><v-btn>Деактивировать</v-btn></th>
          </tr>
        </tbody>
      </v-table>
    </v-card-header>
  </v-card>
</template>
