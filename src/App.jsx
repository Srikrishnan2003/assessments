import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BarcPage from './pages/BarcPage';
import TcsPage from './pages/TcsPage';
import CtstaPage from './pages/CtstaPage';
import HashedInPage from './pages/HashedInPage';
import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/barcoa" element={<BarcPage />} />
        <Route path="/tcsinter" element={<TcsPage />} />
        <Route path="/ctsta" element={<CtstaPage />} />
        <Route path="/hashedin" element={<HashedInPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
