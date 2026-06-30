import { Product } from '../types/product'
import { resolveImageUrl, PLACEHOLDER_SVG } from '../utils/imageUtils'
import { config } from '../config'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const imageUrl = resolveImageUrl(product.imagemUrl) || PLACEHOLDER_SVG

  const instagramUrl = `https://ig.me/m/${config.instagramUser}`

  return (
    <article className="bg-card rounded-2xl border border-border overflow-hidden flex flex-col group hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
      {/* Imagem */}
      <div className="relative aspect-[4/3] overflow-hidden bg-bg-primary">
        <img
          src={imageUrl}
          alt={product.nome}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={e => {
            ;(e.target as HTMLImageElement).src = PLACEHOLDER_SVG
          }}
          loading="lazy"
        />
        {/* Badge de material com gradiente sutil */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-text-primary text-xs font-display font-semibold px-2 py-1 rounded-md shadow-sm">
          {product.material}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="p-4 flex flex-col flex-1 gap-3">
        {/* Categoria com cor da marca */}
        <span className="text-xs font-display text-accent uppercase tracking-wide">
          {product.categoria}
        </span>

        {/* Nome */}
        <h2 className="font-display font-semibold text-text-primary text-base leading-snug">
          {product.nome}
        </h2>

        {/* Descrição */}
        {product.descricao && (
          <p className="font-body text-text-secondary text-sm leading-relaxed line-clamp-2">
            {product.descricao}
          </p>
        )}

        {/* Rodapé */}
        <div className="mt-auto pt-3 border-t border-border">
          <div className="mb-3">
            <span className="text-xs font-body text-text-secondary">a partir de</span>
            <p className="font-display font-bold text-xl text-text-primary">
              R$ {product.preco.toFixed(2).replace('.', ',')}
            </p>
          </div>

          <div className="flex gap-2">
            {product.linkModelo && (
              <a
                href={product.linkModelo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2 px-3 rounded-lg border border-border text-text-secondary text-sm font-display font-medium hover:border-accent hover:text-accent transition-colors"
              >
                Ver modelo
              </a>
            )}

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2 px-3 rounded-lg bg-brand-gradient text-white text-sm font-display font-semibold hover:opacity-90 transition-opacity shadow-sm"
            >
              Pedir orçamento
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
