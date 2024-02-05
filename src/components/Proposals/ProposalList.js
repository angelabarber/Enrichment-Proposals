import { useEffect, useState } from "react";
import {
  getAllProposals,
  getProposals,
  primatesProposalsWithPrimates,
} from "../../services/proposalService.js";
import { Proposal } from "./Proposal.js";
import "./Proposal.css";

export const ProposalList = ({ currentUser }) => {
  const [allProposals, setAllProposals] = useState([]);
  const [showApprovedOnly, setShowApprovedOnly] = useState(false);
  // const [showPendingApprovalOnly, setPendingApprovalOnly] = useState(true)
  const [filteredProposals, setFilteredProposals] = useState([]);
  const [primateProposals, setPrimateProposals] = useState([]);

  useEffect(() => {
    getAndSetProposals();
  }, []);

  useEffect(() => {
    if (allProposals) {
      getAndSetProposalsWithPrimates();
    }
  }, []);

  const getAndSetProposals = () => {
    getProposals().then((proposalsArray) => {
      setAllProposals(proposalsArray);
    });
  };
  const getAndSetProposalsWithPrimates = () => {
    primatesProposalsWithPrimates().then((primateProposalsArray) => {
      setPrimateProposals(primateProposalsArray);
    });
  };

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

  if (!primateProposals) {
    return <></>;
  }

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
          return (
            <Proposal
              proposal={proposalObj}
              currentUser={currentUser}
              key={proposalObj.id}
              getAndSetProposals={getAndSetProposals}
              primateProposals={primateProposals}
            />
          );
        })}
      </article>
    </div>
  );
};
