import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future routes can be added here, e.g., <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </Router>
  );
}
