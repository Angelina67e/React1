import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Masters from "./pages/Masters";
import Prices from "./pages/Prices";
import Contacts from "./pages/Contacts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrapper">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/masters" element={<Masters/>}/>
          <Route path="/prices" element={<Prices/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </div>
      <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
