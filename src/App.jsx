import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home';
import '../src/styles/global.css';

import { Header } from './components/Header/Header';
 import { Destination } from './Pages/Destination/Destination'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Header/>
        <Route path="/" element={<Home />} />
        <Route path="/destinos" element={<Destination />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;