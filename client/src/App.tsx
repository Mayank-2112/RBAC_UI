import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dasboard"
import Home from "./pages/Home"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
