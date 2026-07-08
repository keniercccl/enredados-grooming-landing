import type { ReactNode } from 'react'
import Container from '@/components/common/Container'

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <main className="bg-white py-16 lg:py-24">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-neutral-900 sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-neutral-500">
          Última actualización: {lastUpdated}
        </p>
        <div className="mt-8 space-y-8 text-neutral-700">{children}</div>
      </Container>
    </main>
  )
}

export default LegalPageLayout
