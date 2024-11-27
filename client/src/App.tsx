import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dasboard"
import Home from "./pages/Home"

export default function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
