import { useState, useEffect } from 'react'
import { Product } from '../types/product'
import { parseCSV } from '../utils/csvParser'
import { config } from '../config'

interface UseProductsReturn {
  products: Product[]
  loading: boolean
  error: string | null
}

export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      if (!config.sheetsUrl || config.sheetsUrl === 'SUA_URL_DO_GOOGLE_SHEETS_AQUI') {
        setError('Configure a URL do Google Sheets no arquivo src/config.ts')
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        setError(null)

        const response = await fetch(config.sheetsUrl)
        if (!response.ok) {
          throw new Error(`Erro HTTP ${response.status}`)
        }

        const text = await response.text()
        const parsed = parseCSV(text)
        setProducts(parsed)
      } catch (err) {
        console.error('Erro ao carregar catálogo:', err)
        setError('Não foi possível carregar o catálogo. Verifique a URL da planilha.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}
