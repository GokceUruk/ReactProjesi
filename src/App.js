
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AnaSayfa from "./AnaSayfa"
import Musteri from "./Musteri"
import Urun from "./Urun"
import Siparis from "./Siparis"
import Tahsilat from "./Tahsilat"
import Odeme from "./Odeme"
import SiparisDurumu from "./YeniSiparisDurum"
import Sehir from "./Sehir"
import TahsilatTipi from "./TahsilatTipi"
import UrunKategorisi from "./UrunKategorisi"

import YeniMusteri from "./YeniMusteri"
import YeniUrun from "./YeniUrun"
import YeniSiparis from "./YeniSiparis"
import YeniTahsilat from "./YeniTahsilat"
import YeniOdeme from "./YeniOdeme"
import YeniSiparisDurumu from "./YeniSiparisDurum"
import YeniSehir from "./YeniSehir"
import YeniTahsilatTipi from "./YeniTahsilatTipi"
import YeniUrunKategorisi from "./YeniUrunKategori"

import Login from "./Login"
import Logout from "./Logout"



function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AnaSayfa />} />
          <Route path="/Musteri" element={<Musteri />} />
          <Route path="/Urun" element={<Urun />} />
          <Route path="/Siparis" element={<Siparis />} />
          <Route path="/Tahsilat" element={<Tahsilat />} />
          <Route path="/Odeme" element={<Odeme />} />
          <Route path="/SiparisDurumu" element={<SiparisDurumu />} />
          <Route path="/Sehir" element={<Sehir />} />
          <Route path="/TahsilatTipi" element={<TahsilatTipi />} />
          <Route path="/UrunKategorisi" element={<UrunKategorisi />} />

          <Route path="/YeniMusteri" element={<YeniMusteri />} />
          <Route path="/YeniUrun" element={<YeniUrun />} />
          <Route path="/YeniTahsilat" element={<YeniTahsilat />} />
          <Route path="/YeniSiparis" element={<YeniSiparis />} />
          <Route path="/YeniOdeme" element={<YeniOdeme />} />
          <Route path="/YeniSiparisDurumu" element={<YeniSiparisDurumu />} />
          <Route path="/YeniSehir" element={<YeniSehir />} />
          <Route path="/YeniTahsilatTipi" element={<YeniTahsilatTipi />} />
          <Route path="/YeniUrunKategorisi" element={<YeniUrunKategorisi />} /> 


          
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;