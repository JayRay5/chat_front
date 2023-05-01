//import react
import { BrowserRouter, Routes, Route } from "react-router-dom";

//
import PageLogin from './pages/PageLogin'
import PageHome from './pages/PageHome'
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLogin/>}/>
          <Route path="/home" element={<PageHome/>}/>
        </Routes>
      </BrowserRouter>);
}

export default App;
