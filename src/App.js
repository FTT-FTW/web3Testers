import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/pages/Navbar";
import Home from "./components/pages/HomePage/Home";
import Footer from "./components/pages/Footer/Footer";
import FormPage from "./components/pages/FormPage/formPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <FormPage />
      <Footer />
    </>
  );
}

export default App;
