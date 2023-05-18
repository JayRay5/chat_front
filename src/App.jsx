//import react
import { BrowserRouter, Routes, Route } from "react-router-dom";

//
import PageLogin from './pages/PageLogin/PageLogin'
import PageHome from './pages/PageHome/PageHome'
import PageChat from './pages/PageChat/PageChat'
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLogin/>}/>
          <Route path="/home" element={<PageHome/>}/>
          <Route path="/home/chat" element={<PageChat/>}/>
        </Routes>
      </BrowserRouter>
      );
      
}

export default App;
