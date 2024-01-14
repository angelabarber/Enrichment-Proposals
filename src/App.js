import { Routes, Route, Outlet } from "react-router-dom"
import { ProposalList } from "./components/Proposals/ProposalList.js"
import { NavBar } from "./components/Nav/NavBar.js"
import { Login } from "./components/auth/Login.js"
import { Welcome } from "./components/Welcome/Welcome.js"


export const App = () => {
  return (
    <Routes>
      < Route path="/login" element={<Login />} />
      
    </Routes>
  )

}
