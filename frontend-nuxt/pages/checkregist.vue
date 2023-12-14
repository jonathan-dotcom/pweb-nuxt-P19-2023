<template>
  <div>
    <h1>Check Registration Status</h1>
    <form @submit.prevent="checkStatus">
      <input v-model="email" type="email" placeholder="Enter your email">
      <button type="submit">Check Status</button>
    </form>
    <div v-if="status">
      <h2>Your Registration Status: {{ status }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      status: ''
    };
  },
  methods: {
    async checkStatus() {
      try {
        const response = await fetch(`http://localhost:3100/api/pendaftaran?where[email][equals]=${this.email}`);
        const data = await response.json();
        this.status = data.Status;
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
};
</script>