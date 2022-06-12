<template>
  <v-container>
    <v-card>
      <v-card-header> <h1>Оптимизация CPC расходов</h1> </v-card-header>
      <v-card-text>
        <v-select label="Выберите канал"></v-select>
        <v-tabs> <v-tab>CPC от продаж</v-tab> <v-tab>CPC от даты</v-tab> </v-tabs>
        <v-container>
          <h3>За период:</h3>
          <v-container>
            <v-row style="margin-top: 0px; margin-bottom: 0px; gap: 20px">
              <div>С <input type="date" name="" id="" /></div>
              <div>По <input type="date" name="" id="" /></div>
            </v-row>
          </v-container>
          <v-btn @click="buildGraph()">Построить график</v-btn>

          <Chart
            :size="{ width: 500, height: 400 }"
            :data="data"
            :margin="margin"
            :direction="direction"
            v-if="showGraph"
          >
            <template #layers>
              <Grid strokeDasharray="2,2" />
              <Line :dataKeys="['name', 'pl']" type="monotone" />
            </template>
          </Chart>
        </v-container>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Chart, Grid, Line } from 'vue3-charts';

export default defineComponent({
  name: 'LineChart',
  components: { Chart, Grid, Line },
  setup() {
    const data = [
      { name: '10', pl: 1000, avg: 500, inc: 300 },
      { name: '20', pl: 2000, avg: 900, inc: 400 },
      { name: '30', pl: 400, avg: 400, inc: 500 },
      { name: '40', pl: 3100, avg: 1300, inc: 700 },
      { name: '50', pl: 200, avg: 100, inc: 200 },
      { name: '60', pl: 600, avg: 400, inc: 300 },
      { name: '70', pl: 500, avg: 90, inc: 100 },
      { name: '80', pl: 1000, avg: 500, inc: 300 },
      { name: '90', pl: 2000, avg: 900, inc: 400 },
      { name: '100', pl: 400, avg: 400, inc: 500 },
    ];
    const direction = ref('horizontal');
    const margin = ref({
      left: 0,
      top: 20,
      right: 20,
      bottom: 0,
    });

    return { data, direction, margin };
  },
  data() {
    return {
      showGraph: false,
    };
  },
  methods: {
    buildGraph() {
      this.showGraph = true;
    },
  },
});
</script>
