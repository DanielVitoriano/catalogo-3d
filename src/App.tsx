import { useState, useMemo } from 'react'
import { useProducts } from './hooks/useProducts'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FilterBar } from './components/FilterBar'
import { ProductGrid } from './components/ProductGrid'
import { Footer } from './components/Footer'

export function App() {
  const { products, loading, error } = useProducts()

  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedMaterial, setSelectedMaterial] = useState('Todos')

  // Listas únicas para os filtros (só produtos disponíveis)
  const available = useMemo(() => products.filter(p => p.disponivel), [products])

  const categories = useMemo(
    () => ['Todos', ...Array.from(new Set(available.map(p => p.categoria))).filter(Boolean)],
    [available]
  )
  const materials = useMemo(
    () => ['Todos', ...Array.from(new Set(available.map(p => p.material))).filter(Boolean)],
    [available]
  )

  // Produtos filtrados
  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return available.filter(p => {
      const matchSearch =
        !q ||
        p.nome.toLowerCase().includes(q) ||
        p.descricao.toLowerCase().includes(q) ||
        p.categoria.toLowerCase().includes(q)
      const matchCat = selectedCategory === 'Todos' || p.categoria === selectedCategory
      const matchMat = selectedMaterial === 'Todos' || p.material === selectedMaterial
      return matchSearch && matchCat && matchMat
    })
  }, [available, search, selectedCategory, selectedMaterial])

  return (
    <div className="min-h-screen bg-bg-primary font-body">
      <Header />
      <Hero />
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        materials={materials}
        selectedMaterial={selectedMaterial}
        onMaterialChange={setSelectedMaterial}
        totalVisible={filtered.length}
        totalAll={available.length}
      />
      <main>
        <ProductGrid products={filtered} loading={loading} error={error} />
      </main>
      <Footer />
    </div>
  )
}
