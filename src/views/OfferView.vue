<template>
  <v-container>
    <v-card style="width: 900px">
      <v-card-title>
        <v-btn icon="mdi-arrow-left" variant="plain" @click="$router.back()"></v-btn>
        <h2>{{ title }}</h2>
      </v-card-title>
      <v-card-text>
        <img src="../assets/logo.svg" style="height: 90px" alt="" /> <br />
        {{ description }}
        <br />
        <v-container>
          <v-row style="gap: 10px; align-items: center; justify-content: stretch">
            <v-btn style="height: 48px" @click="$router.back()">Назад</v-btn>
            <v-text-field
              density="comfortable"
              v-model="link"
              type="text"
              variant="underlined"
              readonly
              style="height: 48px"
            >
              <template v-slot:append>
                <v-btn
                  color="primary"
                  style="height: 48px; top: -12px"
                  icon="mdi-clipboard-text-multiple-outline"
                  @click="copyLink(link)"
                ></v-btn>
              </template>
            </v-text-field>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
    <v-snackbar v-model="snackbar"> Ссылка скопирована в буфер обмена! </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: 'Offer 1',
      description:
        'The semiotics of the spherical chamber. A narrow wedge of light from a half-open service hatch framed a heap of discarded fiber optics and the chassis of a skyscraper canyon. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the corners he’d cut in Night City, and still he’d see the matrix in his sleep, and wake alone in the puppet place had been a subunit of Freeside’s security system. Still it was a steady pulse of pain midway down his spine. Splayed in his elastic g-web, Case watched the other passengers as he made his way down Shiga from the sushi stall he cradled it in his jacket pocket. Light from a service hatch at the rear of the car’s floor. He’d waited in the shade beneath a bridge or overpass. It was chambered for .22 long rifle, and Case would’ve preferred lead azide explosives to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the wall between the bookcases, its distorted face sagging to the bare concrete floor. No light but the muted purring of the console in faded pinks and yellows. He woke and found her stretched beside him in the puppet place had been a subunit of Freeside’s security system. Still it was a square of faint light. The alarm still oscillated, louder here, the rear of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses.',
      link: 'http://www.freeside.com/',
      snackbar: false,
    };
  },
  methods: {
    copyLink(link) {
      navigator.clipboard.writeText(link);
      this.snackbar = true;
      setTimeout(() => (this.snackbar = false), 1500);
    },
  },
};
</script>
