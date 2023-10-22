import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";
import HomePage from "./components/pages/HomePage";
import LoiNormale from "./components/pages/LoiNormale";
import LoiStudent from "./components/pages/LoiStudent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="loi-normale" element={<LoiNormale />} />
          <Route path="loi-du-student" element={<LoiStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}