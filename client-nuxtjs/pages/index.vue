<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field v-model="customer" label="Customer"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <v-date-picker v-model="date" label="Date"></v-date-picker>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-time-picker v-model="time_from" format="24hr"></v-time-picker>
        </v-col>
        <v-col cols="12" md="6">
          <v-time-picker v-model="time_to" format="24hr"></v-time-picker>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>

export default {
  data() {
    return {
      customer: null,
      date: '2021-01-03',
      time_from: '12:00',
      time_to: '13:00'
    }
  },
  sockets: {
    connect() {
      console.log('socket connected');
    },
    createBooking(booking) {
      console.log('createBooking - ', booking);
    }
  }
}
</script>
