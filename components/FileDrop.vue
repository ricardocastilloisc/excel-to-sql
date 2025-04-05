<!--
📂 FileDrop.vue
Autor / Author: Ricardo Orlando Castillo Olivera

Descripción / Description:
Componente visual para cargar archivos Excel (.xlsx). Permite arrastrar el archivo o hacer clic para abrir el selector.
Maneja validación de tipo de archivo, y comunica el archivo seleccionado al componente padre.

Visual file drop component for uploading Excel (.xlsx) files. Allows drag-and-drop or click to select file.
Handles validation and emits selected file to the parent component.
-->

<template>
  <div class="my-4">
    <!-- Zona de drop o clic para seleccionar archivo -->
    <div
      class="border border-2 border-secondary p-5 text-center rounded position-relative bg-white"
      @dragover.prevent
      @drop.prevent="onDrop"
      @click="openFilePicker"
      style="cursor: pointer"
    >
      <!-- Input oculto de tipo archivo que acepta solo .xlsx -->
      <input
        ref="fileInput"
        type="file"
        accept=".xlsx"
        class="d-none"
        @change="onFileChange"
      />

      <!-- Si hay un archivo seleccionado, mostrar su nombre -->
      <div v-if="selectedFile">
        <i class="fas fa-file-excel fa-2x text-success"></i>
        <p class="mt-2">{{ selectedFile.name }}</p>
        <button @click.stop="clearFile" class="btn btn-outline-danger btn-sm mt-2">
          <i class="fas fa-trash"></i> Eliminar / Remove
        </button>
      </div>

      <!-- Si no hay archivo seleccionado, mostrar mensaje e ícono -->
      <div v-else>
        <i class="fas fa-upload fa-2x text-muted"></i>
        <p class="mt-3 text-muted">
          Arrastra aquí tu archivo Excel (.xlsx) o haz clic <br />
          Drag Excel (.xlsx) file here or click
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// 🚀 Importaciones esenciales / Imports
import { ref, defineEmits, defineProps } from 'vue'
import Swal from 'sweetalert2'

// 📤 Eventos emitidos hacia el componente padre
const emit = defineEmits(['file-selected', 'clear-file'])

// 📥 Propiedad que representa el archivo seleccionado
const props = defineProps({
  selectedFile: {
    type: Object,
    default: null
  }
})

// 📁 Referencia al input de archivos
const fileInput = ref(null)

// 📂 Método para abrir el selector de archivos manualmente
const openFilePicker = () => fileInput.value?.click()

// 🔄 Cuando el usuario selecciona un archivo desde el explorador
const onFileChange = (e) => {
  const file = e.target.files[0]
  validateFile(file)
}

// 🧲 Cuando el usuario arrastra y suelta un archivo
const onDrop = (e) => {
  const file = e.dataTransfer.files[0]
  validateFile(file)
}

// ✅ Validación del tipo de archivo
const validateFile = (file) => {
  if (
    !file ||
    (
      file.type !== 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' &&
      !file.name.endsWith('.xlsx')
    )
  ) {
    Swal.fire('Archivo inválido', 'Solo se permiten archivos .xlsx', 'error')
    return
  }
  emit('file-selected', file)
}

// 🗑️ Método para limpiar el archivo seleccionado
const clearFile = () => {
  fileInput.value.value = null
  emit('clear-file')
}
</script>
