<template>
  <div>
    <h1>Registration Form</h1>
    <form @submit.prevent="register">
      <div>
        <label for="nama">Nama:</label>
        <input type="text" id="nama" v-model="nama" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="Asal_Sekolah">Asal Sekolah:</label>
        <input type="text" id="Asal_Sekolah" v-model="Asal_Sekolah" required>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nama: '',
      email: '',
      Asal_Sekolah: ''
    }
  },
  methods: {
    async register() {
      const data = {
        nama: this.nama,
        email: this.email,
        Asal_Sekolah: this.Asal_Sekolah
      }

      try {
        const response = await fetch('http://localhost:3100/api/pendaftaran', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        if (!response.ok) {
          const errorMsg = (await response.json())?.errors[0].message
          throw new Error(errorMsg)
        }

        alert('Pendaftaran berhasil!')
      } catch (error) {
        alert('Pendaftaran gagal ' + error.message)
      }
    }
  }
}
</script>
