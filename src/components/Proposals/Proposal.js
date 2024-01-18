import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService.js";
import {
  deleteProposal,
  getProposals,
} from "../../services/proposalService.js";
import { Link, useNavigate } from "react-router-dom";

export const Proposal = ({
  proposal,
  currentUser,
  getAndSetProposals,
  primateProposals,
}) => {
  // const [users, setUsers] = useState([]);
  // const [proposalUser, setProposalUser] = useState([]);
  const [matchedPrimateProposals, setMatchedPrimateProposals] = useState([]);
  const [proposalWithPrimates, setProposalWithPrimates] = useState([]);

  useEffect(() => {
    // if (primateProposals && proposal) {
    setMatchedPrimateProposals(
      primateProposals.filter(
        (primateProposal) => proposal.id === primateProposal.proposalId
      )
    );
    // }
  }, [primateProposals]);

  useEffect(() => {
    // if (matchedPrimateProposals) {
    const proposalCopy = structuredClone(proposal);
    const primateNames = matchedPrimateProposals.map(
      (primateProposal) => primateProposal.primate.name
    );
    proposalCopy.primateNames = primateNames.join(", ");
    setProposalWithPrimates(proposalCopy);
    // }
  }, [matchedPrimateProposals]);

  // useEffect(() => {
  //   getProposals().then((proposalsArray) => {
  //     setProposalUser(proposalsArray);
  //   });
  // }, []);

  //match the current userId with the proposal keeperID
  //then display an edit button on their proposals
  //then display a delete button on their proposals

  // useEffect(() => {
  //   const foundUser = users.find((user) => user.id === proposal.userId);
  //   setMatchedProposals(foundUser);
  // }, []);

  // const handleEdit = () => {
  //   const currentEmployee = users.find(
  //     user =>
  const navigate = useNavigate();
  //   )
  // }
  // if (currentUser.id === proposalUser.proposal?.id)
  // const handleDelete = () => {
  //   deleteProposal(proposal.proposal.id).then(() => {
  //     getAndSetProposals().then(() => {
  //       navigate("/proposals");
  //     });
  //   });
  // };

  const handleDelete = () => {
    deleteProposal(proposal.id)
      .then(() => {
        return getAndSetProposals();
      })
      .then(() => {
        navigate("/proposals");
      })
      .catch((error) => {
        console.error("Error deleting or fetching proposals:", error);
        // Handle the error, e.g., show an error message to the user
      });
  };
  return (
    <section className="proposal" key={proposalWithPrimates.id}>
      <header className="proposal-info">#{proposalWithPrimates.id}</header>
      <div className="text">{proposalWithPrimates.primateNames}</div>
      <div className="text">{proposalWithPrimates.description}</div>
      <footer>
        <div>
          <div className="text"> Approved:</div>
          <div className="text">
            {proposalWithPrimates.approved ? "Yes" : "No"}
          </div>
        </div>
        <div className="btn-container">
          {currentUser.id === proposalWithPrimates.userId ? (
            <Link to={`/proposals/${proposalWithPrimates.id}`}>
              <button className="btn-edit">Edit</button>
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="btn-container">
          {currentUser.id === proposalWithPrimates.userId ? (
            <button className="btn-delete" onClick={handleDelete}>
              {" "}
              Delete
            </button>
          ) : (
            ""
          )}
        </div>
      </footer>
    </section>
  );
};
