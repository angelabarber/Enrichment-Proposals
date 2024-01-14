import { Route } from "react-router-dom"
import { NavBar } from "../components/Nav/NavBar.js"
import { Outlet } from "react-router-dom"
import { Welcome } from "../components/Welcome/Welcome.js"
import { ProposalList } from "../components/Proposals/ProposalList.js"

export const ApplicationViews = () => {
  return <>
  <Route 
        path="/" 
        element={
          <>
            <NavBar />
            < Outlet />
          </>
      }
      >
        <Route index element={<Welcome />} />
      <Route path="proposals" element={ <ProposalList />} />
      </Route>
  
  
  </>
}
