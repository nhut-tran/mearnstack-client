import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Header from "./components/Header";
import Country from "./pages/Country";
import Home from './pages/Home'
import UpdateCountry from "./pages/UpdateCountry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Country />} />
          <Route path="/update/:id" element={<UpdateCountry />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
