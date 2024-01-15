import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService.js";
import {
  deleteProposal,
  getProposals,
} from "../../services/proposalService.js";
import { Link, useNavigate } from "react-router-dom";

export const Proposal = ({ proposal, currentUser, getAndSetProposals }) => {
  // const [users, setUsers] = useState([]);
  // const [proposalUser, setProposalUser] = useState([]);
  // const [matchProposals, setMatchedProposals] = useState([]);

  // useEffect(() => {
  //   getAllUsers().then((usersArray) => {
  //     setUsers(usersArray);
  //   });
  // }, []);

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
    deleteProposal(proposal.proposal.id)
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
    <section className="proposal" key={proposal.id}>
      <header className="proposal-info">#{proposal.id}</header>
      <div>{proposal.primate.name}</div>
      <div>{proposal.proposal.description}</div>
      <footer>
        <div>
          <div className="proposal-info"> Approved</div>
          <div>{proposal.approved ? "yes" : "no"}</div>
        </div>
        <div className="btn-container">
          {currentUser.id === proposal.proposal.userId ? (
            <Link to={`/proposals/${proposal.id}`}>
              <button className="btn btn-edit">Edit</button>
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="btn-container">
          {currentUser.id === proposal.proposal.userId ? (
            <button className="btn btn-delete" onClick={handleDelete}>
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
