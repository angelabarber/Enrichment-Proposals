import { Route, Routes, json } from "react-router-dom";
import { NavBar } from "../components/Nav/NavBar.js";
import { Outlet } from "react-router-dom";
import { Welcome } from "../components/Welcome/Welcome.js";
import { ProposalList } from "../components/Proposals/ProposalList.js";
import { useEffect, useState } from "react";
import { PrimateList } from "../components/Primates/PrimateList.js";
import { NewProposalForm } from "../components/Forms/NewProposalForm.js";
import { ProposalForm } from "../components/Forms/ProposalForm.js";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localPrimateUser = localStorage.getItem("primate_user");
    const primateUserObject = JSON.parse(localPrimateUser);

    setCurrentUser(primateUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route path="primates" element={<PrimateList />} />
        <Route path="proposals">
          <Route index element={<ProposalList currentUser={currentUser} />} />
          <Route
            path="newproposal"
            element={<NewProposalForm currentUser={currentUser} />}
          />
          {/* <Route
            path="edit/:id?"
            element={<ProposalForm currentUser={currentUser} />}
          /> */}
          {/* <Route
            path="proposals/:id"
            element={<ProposalForm currentUser={currentUser} />}
          /> */}
        </Route>
      </Route>
    </Routes>
  );
};
