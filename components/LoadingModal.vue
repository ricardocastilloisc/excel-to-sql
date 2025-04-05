<template>
  <!--
    🌀 Modal de carga que ocupa toda la pantalla mientras se realiza una operación
    🌀 Fullscreen loading modal shown while a background task is running
  -->
  <div class="position-fixed top-0 bottom-0 start-0 end-0 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center z-50">
    <div class="bg-white p-4 rounded shadow text-center">
      <!--
        🔄 Indicador visual de carga (spinner de Bootstrap)
        🔄 Visual loading indicator (Bootstrap spinner)
      -->
      <div class="spinner-border text-primary mb-3" role="status"></div>

      <!--
        ⏳ Mensaje de estado de carga en español e inglés
        ⏳ Loading message in Spanish and English
      -->
      <div><strong>Cargando... / Loading...</strong></div>
    </div>
  </div>
</template>

<script setup>
</script>
