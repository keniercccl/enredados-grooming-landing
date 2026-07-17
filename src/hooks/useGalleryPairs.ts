import { useEffect, useState } from 'react'
import { fetchGalleryPairs } from '@/utils/cloudinary'
import type { GalleryPair } from '@/types/gallery'

type GalleryStatus = 'loading' | 'success' | 'error' | 'empty'

interface CachedPairs {
  pairs: GalleryPair[]
  fetchedAt: number
}

const CACHE_KEY = 'enrededados:gallery:v1'
const CACHE_TTL_MS = 10 * 60 * 1000

function readCache(): GalleryPair[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null

    const cached = JSON.parse(raw) as CachedPairs
    if (Date.now() - cached.fetchedAt > CACHE_TTL_MS) return null

    return cached.pairs
  } catch {
    return null
  }
}

function writeCache(pairs: GalleryPair[]): void {
  try {
    const cached: CachedPairs = { pairs, fetchedAt: Date.now() }
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(cached))
  } catch {
    // sessionStorage no disponible (privacidad/almacenamiento deshabilitado): sin cache, sin problema.
  }
}

export function useGalleryPairs() {
  const [pairs, setPairs] = useState<GalleryPair[]>([])
  const [status, setStatus] = useState<GalleryStatus>('loading')

  useEffect(() => {
    let cancelled = false

    const cached = readCache()
    if (cached) {
      setPairs(cached)
      setStatus(cached.length > 0 ? 'success' : 'empty')
      return
    }

    fetchGalleryPairs()
      .then((result) => {
        if (cancelled) return
        writeCache(result)
        setPairs(result)
        setStatus(result.length > 0 ? 'success' : 'empty')
      })
      .catch(() => {
        if (cancelled) return
        setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { pairs, status }
}
