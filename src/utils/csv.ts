export function toCSV(rows: any[], headers?: string[]) {
const cols = headers || Object.keys(rows[0]||{})
const lines = [cols.join(',')]
for (const r of rows) lines.push(cols.map(c=>JSON.stringify(r[c] ?? '')).join(','))
return lines.join('\n')
}
