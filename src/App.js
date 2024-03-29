import { Routes, Route } from "react-router-dom"

import { Login } from "./components/auth/Login.js"
import { Authorized } from "./views/Authorized.js"
import { ApplicationViews } from "./views/ApplicationViews.js"



export const App = () => {
  return (
    <Routes>
      < Route path="/login" element={<Login />} />
      
      <Route path="*" element={
        <Authorized>
          <ApplicationViews />
        </Authorized>
      } />
    </Routes>
  )

}
