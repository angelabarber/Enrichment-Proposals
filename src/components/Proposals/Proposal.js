import { useEffect, useState } from "react";
import { getAllUsers } from "../../services/userService.js";
import {
  deleteProposal,
  getProposals,
} from "../../services/proposalService.js";
import { Link } from "react-router-dom";

export const Proposal = ({ proposal, currentUser }) => {
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

  //   )
  // }
  // if (currentUser.id === proposalUser.proposal?.id)
  const handleDelete = () => {
    deleteProposal(proposal.id).then(() => {
      proposal();
    });
  };
  return (
    <section className="proposal" key={proposal.id}>
      <header className="proposal-info">#{proposal.id}</header>
      <div>{proposal.primate.name}</div>
      <div>{proposal.description}</div>
      <footer>
        <div>
          <div className="proposal-info"> Approved</div>
          <div>{proposal.approved ? "yes" : "no"}</div>
        </div>
        <div className="btn-container">
          {currentUser.id === proposal.proposal.userId ? (
            <button className="btn btn-edit">Edit</button>
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
