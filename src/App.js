
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AnaSayfa from "./AnaSayfa"
import Musteri from "./Musteri"
import Urun from "./Urun"
import Siparis from "./Siparis";
import Odeme from "./Odeme";
import Tahsilat from "./Tahsilat";



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AnaSayfa />} />
          <Route path="/Musteri" element={<Musteri />} />
          <Route path="/Urun" element={<Urun />} />
          <Route path="/Siparis" element={<Siparis/>}/>
          <Route path="/Odeme" element={<Odeme/>}/>
          <Route path="/Tahsilat" element={<Tahsilat/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;