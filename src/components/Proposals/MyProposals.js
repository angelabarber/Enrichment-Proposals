import { useEffect, useState } from "react";
import { getProposals } from "../../services/proposalService.js";

export const MyProposal = ({ currentUser }) => {
  const [myProposals, setMyProposals] = useState([]);

  const specificProposals = () => {
    getProposals().then((proposalsArray) => {
      if (currentUser.isAdmin) {
        setMyProposals(proposalsArray);
      } else {
        const userProposals = proposalsArray.filter(
          (proposal) => proposal.userId === currentUser.id
        );
        setMyProposals(userProposals);
      }
    });
  };
  useEffect(() => {
    specificProposals();
  }, [currentUser]);
};
