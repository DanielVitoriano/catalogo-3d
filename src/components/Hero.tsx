import { config } from '../config'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-primary">
      {/* Grade de fundo — cor roxa da marca */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(123, 111, 224, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(123, 111, 224, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }}
      />

      {/* Fade embaixo para suavizar a grade */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/0 via-bg-primary/0 to-bg-primary pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          {/* <div className="inline-flex items-center gap-2 bg-accent-bg border border-accent/20 text-accent px-3 py-1 rounded-full text-sm font-display font-medium mb-5">
            <span className="w-2 h-2 rounded-full bg-brand-gradient animate-pulse" />
            Catálogo atualizado direto da planilha
          </div> */}

          {/* Headline com gradiente da marca */}
          <h1 className="font-display font-bold text-4xl md:text-5xl text-text-primary leading-tight mb-4">
            {config.tagline}
            <span className="block text-brand-gradient">.</span>
          </h1>

          {/* Descrição */}
          <p className="font-body text-text-secondary text-lg leading-relaxed">
            {config.descricao}
          </p>
        </div>
      </div>
    </section>
  )
}
