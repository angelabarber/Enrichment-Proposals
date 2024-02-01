import { useEffect, useState } from "react";
import { getAllProposals } from "../../services/proposalService.js";
import { Proposal } from "./Proposal.js";
import "./Proposal.css";

export const ProposalList = ({ currentUser }) => {
  const [allProposals, setAllProposals] = useState([]);
  const [showApprovedOnly, setShowApprovedOnly] = useState(false);
  // const [showPendingApprovalOnly, setPendingApprovalOnly] = useState(true)
  const [filteredProposals, setFilteredProposals] = useState([]);

  useEffect(() => {
    getAllProposals().then((proposalsArray) => {
      setAllProposals(proposalsArray);
    });
  }, []);

  useEffect(() => {
    if (showApprovedOnly) {
      const approvedProposals = allProposals.filter(
        (proposal) => proposal.proposal.approved === true
      );
      setFilteredProposals(approvedProposals);
    }
    // if(showPendingApprovalOnly) {
    //   const pendingProposals = allProposals.filter(
    //     (proposal) => proposal.approved === false)
    //     setFilteredProposals(pendingProposals)
    //   }
    else {
      setFilteredProposals(allProposals);
    }
  }, [showApprovedOnly, allProposals]);

  return (
    <div className="proposals-container">
      <h2> Proposals</h2>
      <div>
        <button
          className="filter-btn btn-primary"
          onClick={() => {
            setShowApprovedOnly(true);
          }}
        >
          Approved
        </button>
      </div>
      <div>
        <button
          className="filter-btn btn-info"
          onClick={() => {
            setShowApprovedOnly(false);
          }}
        >
          All Proposals
        </button>
      </div>

      <article className="proposals">
        {filteredProposals.map((proposalObj) => {
          console.log(proposalObj);
          return (
            <Proposal
              proposal={proposalObj}
              currentUser={currentUser}
              key={proposalObj.id}
            />
          );
        })}
      </article>
    </div>
  );
};
