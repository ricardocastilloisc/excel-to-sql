<template>
  <div class="text-center">
    <!-- 🧾 Título -->
    <h1 class="fw-bold mb-3">Sube tu archivo Excel / Upload your Excel file</h1>

    <!-- 📝 Descripción -->
    <p class="mb-4 text-muted">
      Esta herramienta convierte archivos `.xlsx` a sentencias SQL `CREATE TABLE` + `INSERT`. <br />
      This tool converts `.xlsx` files into SQL `CREATE TABLE` and `INSERT` statements.
    </p>

    <!-- 📤 Componente de carga -->
    <FileDrop @file-selected="handleFileSelected" :selectedFile="selectedFile" @clear-file="clearFile" />

    <!-- ⚙️ Botón de procesamiento -->
    <div class="my-3">
      <button class="btn btn-primary px-4" :disabled="!selectedFile" @click="processFile">
        <i class="fas fa-cogs"></i> Procesar / Process
      </button>
    </div>

    <!-- ⏳ Modal de carga -->
    <LoadingModal v-if="loading" />

    <!-- 🧾 Resultado SQL -->
    <SqlViewer v-if="sqlResult" :sqlData="sqlResult" />
  </div>
</template>

<script setup>
// 📦 Imports
import FileDrop from '@/components/FileDrop.vue'
import LoadingModal from '@/components/LoadingModal.vue'
import SqlViewer from '@/components/SqlViewer.vue'
import { ref } from 'vue'
import Swal from 'sweetalert2'
import { convertExcelToSQL } from '@/services/excelToSql'

// 📁 Estado
const selectedFile = ref(null)
const sqlResult = ref(null)
const loading = ref(false)

// 📤 Callback al seleccionar archivo
const handleFileSelected = (file) => {
  selectedFile.value = file
}

// 🧹 Limpiar archivo
const clearFile = () => {
  selectedFile.value = null
  sqlResult.value = null
}

// 🛠️ Procesar el archivo Excel
const processFile = async () => {
  if (!selectedFile.value) return

  loading.value = true
  try {
    const sql = await convertExcelToSQL(selectedFile.value)
    sqlResult.value = sql
  } catch (err) {
    Swal.fire('Error', err.message, 'error')
  } finally {
    loading.value = false
  }
}
</script>
