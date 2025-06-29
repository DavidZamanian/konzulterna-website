import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/integritetspolicy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default App
