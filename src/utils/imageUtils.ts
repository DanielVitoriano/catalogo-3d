/**
 * Converte links de compartilhamento do Google Drive em links diretos para imagem.
 *
 * Link de compartilhamento: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * Link direto:              https://drive.google.com/uc?export=view&id=FILE_ID
 */
export function resolveImageUrl(url: string): string {
  if (!url) return ''

  // Google Drive: /file/d/ID/view  →  /uc?export=view&id=ID
  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/)
  if (driveMatch) {
    return `https://drive.google.com/uc?export=view&id=${driveMatch[1]}`
  }

  return url
}

/** SVG inline usado quando o produto não tem imagem ou quando a imagem falha ao carregar */
export const PLACEHOLDER_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23F0EFEC'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%23AAAAAA'%3ESem imagem%3C/text%3E%3C/svg%3E"
