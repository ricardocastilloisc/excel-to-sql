// 📦 Servicio para convertir archivos Excel a sentencias SQL
// Service to convert Excel files to SQL statements

import * as XLSX from 'xlsx'

/**
 * 🧼 Limpia y normaliza los encabezados
 * Clean and normalize column headers
 */
export const cleanColumnName = (name) => {
  return String(name)
    .normalize("NFD") // elimina tildes / removes accents
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/gi, '') // elimina caracteres especiales / remove special characters
    .trim()
    .replace(/\s+/g, '_') // reemplaza espacios con guiones bajos / replace spaces with underscores
    .toLowerCase()
}

/**
 * 🔍 Infieren los tipos de datos por columna
 * Infer column data types based on content
 */
export const inferColumnTypes = (headers, rows) => {
  return headers.map((_, colIndex) => {
    const columnValues = rows.map(row => row[colIndex]).filter(Boolean)

    const allInts = columnValues.every(v => /^-?\d+$/.test(v))
    if (allInts) return 'INTEGER'

    const allFloats = columnValues.every(v => /^-?\d+(\.\d+)?$/.test(v))
    if (allFloats) return 'FLOAT'

    const getByteLength = (str) => new TextEncoder().encode(String(str)).length
    const maxBytes = Math.max(...columnValues.map(getByteLength), 1)

    // Si se pasa de 255 bytes, usar TEXT
    if (maxBytes > 255) return 'TEXT'

    // Agrega 10% de margen de seguridad
    return `VARCHAR(${Math.ceil(maxBytes * 1.1)})`
  })
}

/**
 * 🛠️ Convierte un archivo Excel a sentencias SQL
 * Convert Excel to SQL statements
 */
export const convertExcelToSQL = async (file) => {
  const buffer = await file.arrayBuffer()
  const workbook = XLSX.read(buffer)
  const sheet = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], { header: 1 })

  if (!sheet.length) throw new Error('El archivo está vacío / File is empty')

  const headers = sheet[0].map((h, i) => cleanColumnName(h || `col${i + 1}`))
  const rows = sheet.slice(1).filter(r => r.length > 0)
  const types = inferColumnTypes(headers, rows)

  const tableName = 'my_table'
  const createSQL = `CREATE TABLE IF NOT EXISTS ${tableName} (\n  ` +
    headers.map((h, i) => `${h} ${types[i]}`).join(',\n  ') +
    `\n) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;`

  const insertSQL = rows.map(row => {
    const vals = row.map(v => (typeof v === 'number' ? v : `'${String(v).replace(/'/g, "''")}'`))
    return `INSERT INTO ${tableName} (${headers.join(', ')}) VALUES (${vals.join(', ')});`
  }).join('\n')

  return `${createSQL}\n\n${insertSQL}`
}
