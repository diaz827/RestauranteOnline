import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import CartaPage from './pages/CartaPage'
import ProductDetailPage from './pages/ProductDetailPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="carta" element={<CartaPage />} />
        <Route path="carta/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App