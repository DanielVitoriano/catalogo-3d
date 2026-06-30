import { Product } from '../types/product'

/**
 * Parseia uma linha CSV respeitando campos entre aspas.
 * Exemplo: '"Vaso bonito, redondo",Decoração' → ['Vaso bonito, redondo', 'Decoração']
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < line.length; i++) {
    const char = line[i]
    if (char === '"') {
      inQuotes = !inQuotes
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }
  result.push(current.trim())
  return result
}

/**
 * Converte o texto CSV completo em um array de produtos.
 * Espera que a primeira linha seja o cabeçalho.
 *
 * Estrutura esperada na planilha (ordem das colunas):
 * nome | categoria | material | preco | link_modelo | imagem_url | disponivel | descricao
 */
export function parseCSV(csvText: string): Product[] {
  const lines = csvText.trim().split('\n')
  if (lines.length < 2) return []

  // Pula a primeira linha (cabeçalho)
  const dataLines = lines.slice(1)

  return dataLines
    .map((line, index) => {
      const v = parseCSVLine(line)
      return {
        id: String(index + 1),
        nome:       v[0] ?? '',
        categoria:  v[1] ?? '',
        material:   v[2] ?? '',
        preco:      parseFloat((v[3] ?? '0').replace(',', '.')) || 0,
        linkModelo: v[4] ?? '',
        imagemUrl:  v[5] ?? '',
        disponivel: (v[6] ?? '').toUpperCase() === 'SIM',
        descricao:  v[7] ?? '',
      } satisfies Product
    })
    .filter(p => p.nome !== '')
}
