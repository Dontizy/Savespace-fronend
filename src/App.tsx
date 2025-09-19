import LandingPage from "./components/LandingPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout"
import Login from "./components/layouts/Login"
import Signup from "./components/layouts/Signup"
import Home from "./components/Home"
import AllNotes from "./components/AllNotes"
import AllBookmarks from "./components/AllBookmarks"
import AddBookmarks from "./components/AddBookmarks"
import AddNote from "./components/AddNote"
import ResetPassword from "./components/ResetPassword"
import Profile from "./components/Profile"



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="/addnote" element={<AddNote/>}/>
            <Route path="/addbookmark" element={<AddBookmarks/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/notes" element={<AllNotes/>}/>
            <Route path="/bookmarks" element={<AllBookmarks/>}/>
            <Route path="/resetpassword" element={<ResetPassword/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
