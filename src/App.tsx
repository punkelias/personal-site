import { Routes, Route } from 'react-router-dom'
import ParticleField from './components/ParticleField'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
  return (
    <>
      <ParticleField />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/privacy-policy/football-pool-app"
          element={<PrivacyPolicy />}
        />
      </Routes>
    </>
  )
}
