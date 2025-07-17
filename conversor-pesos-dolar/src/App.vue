<template>
  <div id="app">
    <h1>Conversor Pesos a dólares</h1>
    
    <div class="input-container">
      <label>Ingrese monto $ 
        <input 
          v-model.number="montoPesos" 
          type="number" 
          min="0"
        />
      </label>
    </div>

    <div v-if="cotizacion">
      <p>Valor del dolar oficial venta <strong>${{ cotizacion }}</strong> - fecha: <em>{{ fechaHora }}</em></p>
      
      <p>Valor convertido <strong>USD {{ valorConvertido }}</strong></p>
    </div>

    <hr>

    <p>Respuestas 1:b y e  2:d 3:c 4:b 5:c</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import axios from 'axios'


const montoPesos = ref(0)
const cotizacion = ref(null)
const fechaHora = ref('')
let intervalId = null


const valorConvertido = computed(() => {
  if (!cotizacion.value) return '0.00'
  return (montoPesos.value / cotizacion.value).toFixed(2)
})


const obtenerCotizacion = async () => {
  try {
    const response = await axios.get('https://api.bluelytics.com.ar/v2/latest')
   
    cotizacion.value = response.data.oficial.value_sell
    
    // Actualiza fecha y hora
    const ahora = new Date()
    const dia = ahora.getDate()
    const mes = ahora.getMonth() + 1
    const año = ahora.getFullYear()
    const hora = ahora.getHours().toString().padStart(2, '0')
    const minutos = ahora.getMinutes().toString().padStart(2, '0')
    const segundos = ahora.getSeconds().toString().padStart(2, '0')
    
    fechaHora.value = `${dia}/${mes}/${año}, ${hora}:${minutos}:${segundos}`
  } catch (error) {
    console.error('Error al obtener la cotización:', error)
  }
}


onMounted(() => {

  obtenerCotizacion()
  
  // Actualiza cada 2 segundos
  intervalId = setInterval(() => {
    obtenerCotizacion()
  }, 2000)
})

onUnmounted(() => {
  // Limpia el intervalo cuando el componente se destruya
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background-color: white;
  border: 1px solid #ddd;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.input-container {
  margin-bottom: 20px;
}

input {
  margin-left: 5px;
  padding: 2px 5px;
  border: 1px solid #999;
}

p {
  margin: 10px 0;
}

hr {
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
}

strong {
  font-weight: bold;
}

em {
  font-style: italic;
}
</style>