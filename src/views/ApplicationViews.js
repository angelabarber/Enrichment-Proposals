import { Route, Routes, json } from "react-router-dom";
import { NavBar } from "../components/Nav/NavBar.js";
import { Outlet } from "react-router-dom";
import { Welcome } from "../components/Welcome/Welcome.js";
import { ProposalList } from "../components/Proposals/ProposalList.js";
import { useEffect, useState } from "react";
import { PrimateList } from "../components/Primates/PrimateList.js";
import { NewProposalForm } from "../components/Forms/NewProposalForm.js";
import { ProposalForm } from "../components/Forms/ProposalForm.js";
import { getProposals } from "../services/proposalService.js";

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localPrimateUser = localStorage.getItem("primate_user");
    const primateUserObject = JSON.parse(localPrimateUser);

    setCurrentUser(primateUserObject);
  }, []);

  const [allProposals, setAllProposals] = useState([]);
  const getAndSetProposals = () => {
    getProposals().then((proposalsArray) => {
      setAllProposals(proposalsArray);
    });
  };
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
          <Route
            index
            element={
              <ProposalList
                currentUser={currentUser}
                allProposals={allProposals}
                setAllProposals={setAllProposals}
                getAndSetProposals={getAndSetProposals}
              />
            }
          />
          <Route
            path="newproposal"
            element={
              <NewProposalForm
                currentUser={currentUser}
                getAndSetProposals={getAndSetProposals}
              />
            }
          />

          <Route
            path=":proposalId"
            element={
              <NewProposalForm
                currentUser={currentUser}
                getAndSetProposals={getAndSetProposals}
              />
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};
