import React from 'react';
import Home from './pages/Home/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <div>
          {/* <Nav /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={ <About />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
