import { Route, Routes } from 'react-router-dom';
import './components/Header.js';
import { Catalog } from './pages/Catalog';
import { ProductDetails } from './pages/ProductDetails';
import {About} from './pages/About';
import {NotFound} from './pages/NotFound';
import { Header } from './components/Header';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </div>
  );
}
