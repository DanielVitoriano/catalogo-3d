import { Product } from '../types/product'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: Product[]
  loading: boolean
  error: string | null
}

function SkeletonCard() {
  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden animate-pulse">
      <div className="aspect-[4/3] bg-bg-primary" />
      <div className="p-4 space-y-3">
        <div className="h-3 bg-bg-primary rounded w-1/3" />
        <div className="h-4 bg-bg-primary rounded w-4/5" />
        <div className="h-3 bg-bg-primary rounded w-full" />
        <div className="h-3 bg-bg-primary rounded w-2/3" />
        <div className="pt-3 border-t border-border">
          <div className="h-6 bg-bg-primary rounded w-1/3 mb-3" />
          <div className="h-10 bg-bg-primary rounded" />
        </div>
      </div>
    </div>
  )
}

export function ProductGrid({ products, loading, error }: ProductGridProps) {
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex flex-col items-center gap-3 text-text-secondary">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <p className="font-display font-medium text-text-primary">{error}</p>
          <p className="font-body text-sm">Verifique o arquivo <code className="bg-bg-primary px-1 py-0.5 rounded">src/config.ts</code></p>
        </div>
      </div>
    )
  }

  if (products.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="inline-flex flex-col items-center gap-3 text-text-secondary">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <p className="font-display font-medium text-text-primary">Nenhum produto encontrado</p>
          <p className="font-body text-sm">Tente mudar os filtros ou a busca.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
