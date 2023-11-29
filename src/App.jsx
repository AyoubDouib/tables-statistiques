import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeLayout from "./components/layout/HomeLayout";
import HomePage from "./components/pages/HomePage";
import LoiNormale from "./components/pages/LoiNormale";
import LoiStudent from "./components/pages/LoiStudent";
import LoiKhiDeux from "./components/pages/LoiKhiDeux";

export default function App() {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/tables-statistiques/'}  
    >
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
          <Route path="loi-normale" element={<LoiNormale />} />
          <Route path="loi-du-student" element={<LoiStudent />} />
          <Route path="loi-khi-deux" element={<LoiKhiDeux />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}