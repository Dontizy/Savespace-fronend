import LandingPage from "./components/LandingPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout"
import Login from "./components/layouts/Login"
import Signup from "./components/layouts/Signup"
import Home from "./components/Home"
import AllNotes from "./components/AllNotes"
import AllBookmarks from "./components/AllBookmarks"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/notes" element={<AllNotes/>}/>
            <Route path="/bookmarks" element={<AllBookmarks/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
