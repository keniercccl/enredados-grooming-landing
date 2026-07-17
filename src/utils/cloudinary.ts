import type { GalleryPair } from '@/types/gallery'

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME as string | undefined

const TAG_BEFORE = 'galeria-antes'
const TAG_AFTER = 'galeria-despues'

const CARD_TRANSFORM = 'w_800,h_800,c_fill,g_auto,f_auto,q_auto'
const LIGHTBOX_TRANSFORM = 'w_1600,c_limit,f_auto,q_auto'

const ACCENTED_CHARS: Record<string, string> = {
  á: 'a',
  é: 'e',
  í: 'i',
  ó: 'o',
  ú: 'u',
  ñ: 'n',
  ü: 'u',
}

interface CloudinaryResource {
  public_id: string
  context?: {
    custom?: {
      caption?: string
    }
  }
}

interface CloudinaryListResponse {
  resources: CloudinaryResource[]
}

export function isCloudinaryConfigured(): boolean {
  return Boolean(CLOUD_NAME)
}

async function getResourcesByTag(tag: string): Promise<CloudinaryResource[]> {
  if (!CLOUD_NAME) return []

  const response = await fetch(
    `https://res.cloudinary.com/${CLOUD_NAME}/image/list/${tag}.json`,
  )
  if (!response.ok) {
    throw new Error(`Cloudinary respondió ${response.status} para el tag "${tag}"`)
  }

  const data = (await response.json()) as CloudinaryListResponse
  return data.resources
}

// Aislada a propósito: si Cloudinary cambia dónde vive el nombre de la
// mascota, solo hay que ajustar esta función.
function extractPetName(resource: CloudinaryResource): string | null {
  return resource.context?.custom?.caption ?? null
}

function normalizePetName(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .split('')
    .map((char) => ACCENTED_CHARS[char] ?? char)
    .join('')
}

function buildImageUrl(publicId: string): string {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${CARD_TRANSFORM}/${encodeURIComponent(publicId)}`
}

function buildLightboxImageUrl(publicId: string): string {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${LIGHTBOX_TRANSFORM}/${encodeURIComponent(publicId)}`
}

export async function fetchGalleryPairs(): Promise<GalleryPair[]> {
  const [beforeResources, afterResources] = await Promise.all([
    getResourcesByTag(TAG_BEFORE),
    getResourcesByTag(TAG_AFTER),
  ])

  const beforeByName = new Map<string, CloudinaryResource>()
  for (const resource of beforeResources) {
    const petName = extractPetName(resource)
    if (!petName) continue

    const normalized = normalizePetName(petName)
    if (beforeByName.has(normalized)) {
      console.warn(
        `[Galería] Hay más de una foto "antes" con el nombre "${petName}" — solo se usa la última. Revisa los Title/Caption en Cloudinary.`,
      )
    }
    beforeByName.set(normalized, resource)
  }

  const pairs: GalleryPair[] = []
  for (const afterResource of afterResources) {
    const petName = extractPetName(afterResource)
    if (!petName) continue

    const normalized = normalizePetName(petName)
    const beforeResource = beforeByName.get(normalized)
    if (!beforeResource) continue

    // El id usa el public_id (garantizado unico por Cloudinary) en vez del
    // nombre de la mascota, que es texto libre y puede repetirse.
    pairs.push({
      id: afterResource.public_id,
      petName,
      beforeUrl: buildImageUrl(beforeResource.public_id),
      afterUrl: buildImageUrl(afterResource.public_id),
      beforeLightboxUrl: buildLightboxImageUrl(beforeResource.public_id),
      afterLightboxUrl: buildLightboxImageUrl(afterResource.public_id),
    })
  }

  return pairs
}
