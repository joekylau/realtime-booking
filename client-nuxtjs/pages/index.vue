<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form>
          <v-text-field v-model="customer" label="Customer"></v-text-field>
          <v-date-picker v-model="date" label="Date"></v-date-picker>
          <v-time-picker v-model="time_from" format="24hr"></v-time-picker>
          <v-time-picker v-model="time_to" format="24hr"></v-time-picker>
          <v-btn @click="createBooking" color="primary">Submit</v-btn>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h1>Bookings</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-list-item three-line v-for="(item, index) in items" :key="index">
          <v-list-item-content>
            <v-list-item-title>
              {{item.customer}}
            </v-list-item-title>
            <v-list-item-subtitle>
              Date: {{item.date}}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              Time: {{item.time_from}} - {{item.time_to}}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data() {
    return {
      customer: null,
      date: '2021-01-03',
      time_from: '12:00',
      time_to: '13:00',
      items: []
    }
  },
  sockets: {
    connect() {
      console.log('socket connected');
    },
    createBooking(booking) {
      console.log('createBooking - ', booking);
      this.items.push(booking);
    }
  },
  methods: {
    createBooking() {
      this.$socket.client.emit('createBooking', {
        customer: this.customer,
        date: this.date,
        time_from: this.time_from,
        time_to: this.time_to
      })
    }
  }
}
</script>
