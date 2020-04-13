<template>
  <div class="pa-3">
    <h3>我的数据</h3>
    <v-row>
      <v-col v-for="item in games" :key="item._id" md="3">
        <v-card :to="`/myDatas/${item._id}`" class="mx-auto" max-width="344">
          <v-img class="white--text align-end" :src="item.cover" height="200px">
            <v-card-title>
              {{ item.name }}
            </v-card-title>
          </v-img>

          <v-card-subtitle>
            <span>{{ item.homeTeam }}</span
            ><span>:</span><span>{{ item.visitingTeam }}</span
            ><span>{{ item.gameResult }}</span>
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{ item.date }}</div>
            <div>{{ item.description }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$get('games')
    return {
      games: data.data
    }
  }
}
</script>

<style></style>
