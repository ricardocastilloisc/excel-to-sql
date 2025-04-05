
# Excel to SQL

Convert Excel files (`.xlsx`) into SQL statements directly in your browser.  
No backend required — just drag & drop your file and get ready-to-use `CREATE TABLE` and `INSERT INTO` statements.

Convierte archivos Excel (`.xlsx`) en sentencias SQL directamente desde tu navegador.  
No necesitas backend — simplemente arrastra y suelta tu archivo para obtener las sentencias `CREATE TABLE` e `INSERT INTO` listas para usar.

---

## 🌐 Live Demo / Demo en línea

> _Coming soon_ — You can deploy it using [Vercel](https://vercel.com), [Netlify](https://netlify.com), or your preferred static host.  
> _Próximamente_ — Puedes desplegarlo en [Vercel](https://vercel.com), [Netlify](https://netlify.com) o tu proveedor estático favorito.

---

## 🎯 Purpose / Finalidad

**EN:**  
This side project was created to speed up the process of importing Excel datasets into relational databases. It's perfect for prototyping, testing, or quick data migrations — all in the browser, no setup required.

**ES:**  
Este proyecto personal fue creado para agilizar el proceso de importar datos desde Excel a bases de datos relacionales. Es ideal para prototipos, pruebas o migraciones rápidas de datos — todo desde el navegador, sin configuración previa.

---

## 🚀 How to Run / Cómo ejecutarlo

1. Clone the repository / Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/excel-to-sql.git
   cd excel-to-sql
   ```

2. Install dependencies / Instala dependencias:
   ```bash
   npm install
   ```

3. Run the development server / Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Open your browser / Abre tu navegador:
   ```
   http://localhost:3000
   ```

---

## 📦 Requirements / Requisitos

- Node.js 18+
- npm 9+
- Nuxt 3
- TailwindCSS + Bootstrap (opcional, ya incluido en estilos del proyecto)

---

## 🛠 Technologies Used / Tecnologías usadas

- [Nuxt 3](https://nuxt.com)
- [xlsx](https://www.npmjs.com/package/xlsx) for Excel parsing
- JavaScript (frontend-only logic)
- TailwindCSS / Bootstrap

---

## 📁 File Structure / Estructura de archivos

- `excelToSql.js`: Core logic for parsing Excel and generating SQL
- `components/FileDrop.vue`: Drag and drop upload
- `components/LoadingModal.vue`: Feedback while parsing
- `components/SqlViewer.vue`: Editable SQL output
- `app.vue`: Base layout
- `pages/index.vue`: Main interface

---

## ✨ Features / Funcionalidades

- ✅ Convert `.xlsx` files to SQL
- ✅ Infer data types (e.g., `VARCHAR`, `INT`, `DATE`)
- ✅ Generate `CREATE TABLE` and `INSERT INTO`
- ✅ Edit, copy or download SQL output
- ✅ 100% client-side

---

## 📄 License / Licencia

MIT © 2025 — Developed by [Tu Nombre o Usuario]
