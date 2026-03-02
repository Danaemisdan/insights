import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationLayout from './components/NavigationLayout';
import Home from './pages/Home';
import Concept1 from './pages/Concept1';
import Concept2 from './pages/Concept2';
import Concept3 from './pages/Concept3';
import Concept4 from './pages/Concept4';
import Concept5 from './pages/Concept5';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavigationLayout />}>
                    <Route index element={<Home />} />
                    <Route path="concept1" element={<Concept1 />} />
                    <Route path="concept2" element={<Concept2 />} />
                    <Route path="concept3" element={<Concept3 />} />
                    <Route path="concept4" element={<Concept4 />} />
                    <Route path="concept5" element={<Concept5 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
