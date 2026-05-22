import SearchResultsPage from '@/common/module/Search'
import { Suspense } from 'react'

export const metadata = {
  title: 'Search - DurianX',
  description: 'Search across all DurianX services, solutions, blog posts, and more.',
}

export default function SearchPage() {
  return (
    <div className="mt-20">
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-neutral-200 border-t-[#82C341] animate-spin" />
        </div>
      }>
        <SearchResultsPage />
      </Suspense>
    </div>
  )
}
