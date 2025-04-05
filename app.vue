<!--
📦 app.vue
Autor / Author: Ricardo Orlando Castillo Olivera

🧾 Descripción / Description:
Layout principal de la aplicación. Incluye encabezado con enlaces personales
(GitHub y LinkedIn) y el contenedor principal para las páginas Nuxt.

Main layout of the app. Includes a header with personal links (GitHub and LinkedIn)
and the main Nuxt page container.
-->

<template>
  <!-- 🎨 Fondo claro para toda la aplicación -->
  <div class="bg-light min-vh-100">
    <!-- 🧭 Encabezado / Header -->
    <header class="bg-dark text-white py-3 shadow">
      <div class="container d-flex justify-content-between align-items-center">
        <!-- 🔗 Enlaces del autor -->
        <div class="d-flex gap-3">
          <a
            href="https://github.com/ricardocastilloisc/excel-to-sql"
            target="_blank"
            class="text-white text-decoration-none"
          >
            <i class="fab fa-github"></i> Proyecto Frontend
          </a>
          <a
            href="http://linkedin.com/in/ricardo-orlando-castillo-olivera-4b4b45162"
            target="_blank"
            class="text-white text-decoration-none"
          >
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>

        <!-- 👨‍💻 Firma del autor -->
        <small class="fst-italic">Hecho por el Ing. Ricardo Orlando Castillo Olivera</small>
      </div>
    </header>

    <!-- 🧩 Contenido de cada página Nuxt -->
    <main class="container py-5">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
// 🧪 Mensaje en consola si estamos en entorno local
if (process.env.NODE_ENV === 'development') {
  console.log('🛠️ Modo desarrollo activado - Excel → SQL Converter')
}
</script>

<style>
/* 🎨 Importaciones de estilo externo */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');
/* Color de fondo general */

/* 💡 Color de fondo general */
body {
  background-color: #f8f9fa;
}

/* ❌ Estilo para botón de cerrar modal fullscreen */
.fullscreen-modal .btn-close {
  position: absolute;
  top: -12px;
  right: -12px;
  z-index: 1055;
  background: white;
  padding: 0.5rem;
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
</style>
