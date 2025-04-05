<!--
🚀 Componente para visualizar el SQL generado a partir del archivo Excel.
🚀 Component to display the generated SQL from the Excel file.
-->

<template>
  <div class="mt-5">
    <!-- Etiqueta para el resultado -->
    <label class="form-label fw-bold">Resultado SQL / SQL Result:</label>

    <!-- Contenedor con botones de acción -->
    <div class="position-relative">
      <textarea
        readonly
        class="form-control bg-dark text-light font-monospace"
        style="height: 400px; white-space: pre; overflow: auto;"
        :value="formattedSql"
      ></textarea>

      <div class="position-absolute top-0 end-0 m-2 d-flex gap-2">
        <button @click="copy" class="btn btn-sm btn-primary"><i class="fas fa-copy"></i></button>
        <button @click="download" class="btn btn-sm btn-success"><i class="fas fa-download"></i></button>
        <button @click="expand = true" class="btn btn-sm btn-secondary"><i class="fas fa-expand"></i></button>
      </div>
    </div>

    <!-- Modal de pantalla completa -->
    <teleport to="body">
      <div v-if="expand" class="fullscreen-modal position-fixed top-0 bottom-0 start-0 end-0 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center z-50">
        <!-- Botón de cierre -->
        <button @click="expand = false" class="position-absolute bg-danger border-0 text-white rounded-circle"
          style="top: 1rem; right: 1rem; width: 2.5rem; height: 2.5rem; z-index: 1060;">
          <i class="fas fa-times"></i>
        </button>

        <!-- Contenido del modal -->
        <div class="bg-white text-dark rounded shadow p-4 position-relative w-75 h-75 overflow-auto">
          <pre class="small">{{ formattedSql }}</pre>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script setup>
// 📦 Importaciones necesarias
import { ref, computed, watch } from 'vue'
import Swal from 'sweetalert2'

// 🧾 Prop que contiene el SQL generado
const props = defineProps({
  sqlData: { type: String, required: true }
})

// 🔁 Mostrar resultado formateado
const formattedSql = computed(() => props.sqlData)

// 🔍 Útil para debug temporal
// watch(formattedSql, (val) => console.log('SQL generado:', val))

// 📋 Copiar contenido al portapapeles
const copy = () => {
  navigator.clipboard.writeText(formattedSql.value)
  Swal.fire('Copiado', 'Contenido copiado al portapapeles', 'success')
}

// 💾 Descargar como archivo .sql
const download = () => {
  const blob = new Blob([formattedSql.value], { type: 'text/sql' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'resultado.sql'
  a.click()
  URL.revokeObjectURL(url)
}

// 🔍 Control de pantalla completa
const expand = ref(false)
</script>
