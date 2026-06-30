import { config } from '../config'

export function Footer() {
  return (
    <footer className="border-t border-border bg-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Cascavel 3D Maker"
          className="h-8 w-auto"
        />
        <a
          href={`https:/www.instagram.com/${config.instagramUser}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-text-secondary hover:text-accent transition-colors"
        >
          Fale comigo no Instagram →
        </a>
      </div>
    </footer>
  )
}
