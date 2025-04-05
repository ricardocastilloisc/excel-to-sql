# 📦 Imagen base oficial con Node.js y Alpine (ligero)
FROM node:18-alpine

# 📁 Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# 📄 Copiar archivos de dependencias primero (para cachear en builds futuros)
COPY package*.json ./

# 📦 Instalar dependencias
RUN npm install

# 📂 Copiar el resto del código fuente
COPY . .

# 🔨 Compilar la app Nuxt para producción
RUN npm run build

# 🌐 Puerto que usará Nuxt en preview mode
EXPOSE 3000

# 🚀 Comando para iniciar la app en modo producción (sin SSR)
CMD ["npm", "run", "preview"]
