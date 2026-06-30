interface FilterBarProps {
  search: string
  onSearchChange: (v: string) => void
  categories: string[]
  selectedCategory: string
  onCategoryChange: (v: string) => void
  materials: string[]
  selectedMaterial: string
  onMaterialChange: (v: string) => void
  totalVisible: number
  totalAll: number
}

export function FilterBar({
  search, onSearchChange,
  categories, selectedCategory, onCategoryChange,
  materials, selectedMaterial, onMaterialChange,
  totalVisible, totalAll,
}: FilterBarProps) {
  return (
    <div className="bg-white border-b border-border sticky top-[57px] z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 space-y-3">
        {/* Busca */}
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Buscar produto..."
            value={search}
            onChange={e => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-border bg-bg-primary font-body text-sm text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
          />
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs font-display text-text-secondary uppercase tracking-wide mr-1">
            Categoria:
          </span>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1 rounded-full text-sm font-display font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-brand-gradient text-white shadow-sm'
                  : 'bg-bg-primary text-text-secondary hover:bg-border'
              }`}
            >
              {cat}
            </button>
          ))}

          {materials.length > 1 && (
            <>
              <span className="text-border mx-1">|</span>
              <span className="text-xs font-display text-text-secondary uppercase tracking-wide mr-1">
                Material:
              </span>
              {materials.map(mat => (
                <button
                  key={mat}
                  onClick={() => onMaterialChange(mat)}
                  className={`px-3 py-1 rounded-full text-sm font-display font-medium transition-all ${
                    selectedMaterial === mat
                      ? 'bg-text-primary text-white shadow-sm'
                      : 'bg-bg-primary text-text-secondary hover:bg-border'
                  }`}
                >
                  {mat}
                </button>
              ))}
            </>
          )}

          <span className="ml-auto text-xs font-body text-text-secondary">
            {totalVisible === totalAll
              ? `${totalAll} produtos`
              : `${totalVisible} de ${totalAll}`}
          </span>
        </div>
      </div>
    </div>
  )
}
