<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <span class="title">Dashboard</span>
        &nbsp;
        <span class="caption">Control panel</span>
      </v-col>
      <v-col cols="12" sm="6">
        <v-breadcrumbs
          :items="breadcrumbs"
          class="float-sm-right pa-0 pt-sm-2"
        ></v-breadcrumbs>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="(card, i) in cards" :key="i">
        <v-card :color="card.color" dark>
          <v-img
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="140px"
          >
            <v-card-title class="headline"> {{ card.title }} </v-card-title>
            <v-card-subtitle> {{ card.number }} </v-card-subtitle>
            <v-card-actions>
              <v-btn text> More info </v-btn>
            </v-card-actions>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    breadcrumbs: [
      {
        text: "Home",
        disabled: false,
        href: "#",
      },
      {
        text: "Dashboard",
        disabled: true,
        href: "/dashboard",
      },
    ],
    cards: [
      {
        bgsrc: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        color: "light-blue",
        title: "New Orders",
        number: "9",
      },
      {
        bgsrc: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        color: "green",
        title: "Bounce Rate",
        number: "35%",
      },
      {
        bgsrc: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
        color: "pink",
        title: "New Member",
        number: "12",
      },
      {
        bgsrc: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        color: "orange",
        title: "Unique Visitors",
        number: "98",
      },
    ],
  }),
};
</script>
