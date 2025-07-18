# Conversor de Pesos a Dólar (Blue) con Vue.js

Aplicación frontend que convierte pesos argentinos a dólar blue utilizando la cotización en tiempo real de la API de Bluelytics.

## Características principales

- Conversión reactiva: los cálculos se actualizan automáticamente al modificar el valor
- Obtención automática de la cotización del dólar blue cada 2 segundos
- Visualización del valor de cotización y fecha/hora de actualización
- Implementado con Vue CLI 3 y Axios (con async/await)
- Interfaz limpia y fácil de usar
- 
## ejecución del proyecto

1) clonar el repositorio  "git clone https://github.com/charlidev89/serrudo-arteaga-carlos-pnt2.git"
2) ejecutar en nueva terminal  npm install en la carpeta del proyecto donde se encuentra el package.json
3) ejecutar npm run dev
4) correrá localmente  en Localhost:

## Tecnologías utilizadas

- Vue.js 3 (Composition API)
- Axios para peticiones HTTP
- API de Bluelytics para obtener cotizaciones
- Vite como herramienta de construcción

## Uso

1. Ingresa un monto en pesos argentinos en el campo designado
2. La aplicación mostrará automáticamente la conversión a dólares blue
3. El valor de cotización se actualiza cada 2 segundos
4. Puedes ver la última fecha/hora de actualización del valor



## Preguntas y respuestas

1. **¿Qué es Axios?**  
   b) Es una biblioteca de cliente http

2. **¿Cuál es la forma correcta para registrar un evento de click en Vue.js?**  
   b) @click  
   d) v-on:click

3. **Con Axios se pueden implementar los verbos:**  
   c) Get, Post, Put y Delete

4. **¿Cuál de estas directivas se utiliza para modificar estilos a través de Vue.js?**  
   b) v-bind:style  
   e) :style

5. **¿Qué función cumple el modificador number aplicado a v-model?**  
   c) Modifica el dato de entrada para guardarlo como número en la propiedad vinculada

## API utilizada

La aplicación consume la API pública de [Bluelytics](https://api.bluelytics.com.ar/v2/latest) para obtener los valores actualizados del dólar blue.

