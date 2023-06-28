import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Detail from "./components/Detail";
import DogCreate from "./components/DogCreate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/home/:id" element={<Detail />} />
        <Route exact path="/dog" element={<DogCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
