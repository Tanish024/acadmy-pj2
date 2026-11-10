import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from '@/hooks/useTheme'
import { HomePage } from '@/pages/HomePage'

const AdminLeadsPage = lazy(() =>
  import('@/pages/AdminLeadsPage').then((m) => ({ default: m.AdminLeadsPage }))
)

const PageFallback: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-[var(--background)] text-[var(--text)]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-[var(--primary)] border-t-transparent rounded-full animate-spin" />
      <span className="text-xs font-mono text-[var(--muted)]">Loading AI Academy...</span>
    </div>
  </div>
)

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin/leads" element={<AdminLeadsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
