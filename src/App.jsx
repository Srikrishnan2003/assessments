import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import BarcPage from './pages/BarcPage';
import TcsPage from './pages/TcsPage';
import CtstaPage from './pages/CtstaPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/barcoa" replace />} />
        <Route path="/barcoa" element={<BarcPage />} />
        <Route path="/tcsinter" element={<TcsPage />} />
        <Route path="/ctsta" element={<CtstaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
