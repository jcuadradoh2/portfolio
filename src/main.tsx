import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import './tailwind.css'
import App from './App.tsx'
import Lab from './lab/Lab.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/lab" element={<Lab />} />
        {/* Home for "/" and any in-page section hash (#contact, #work, …) so a
            direct/bookmarked section link never lands on a blank no-match. */}
        <Route path="*" element={<App />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
