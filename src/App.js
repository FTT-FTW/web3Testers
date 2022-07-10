import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import { FormPage } from "./components/pages/FormPage/formPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waitlist" element={<FormPage />} />
      </Routes>
    </>
  );
}

export default App;
