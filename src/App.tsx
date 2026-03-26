import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<Detail />} />
    </Routes>
  );
}