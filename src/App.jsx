//import react
import { BrowserRouter, Routes, Route } from "react-router-dom";

//
import PageLogin from './pages/PageLogin/PageLogin'
import PageHome from './pages/PageHome/PageHome'
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
