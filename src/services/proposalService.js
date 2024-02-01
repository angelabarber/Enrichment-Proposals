export const getAllProposals = () => {
  return fetch(
    `http://localhost:8088/primatesProposals?_expand=primate&_expand=proposal`
  ).then((res) => res.json());
};

export const getProposals = () => {
  return fetch(`http://localhost:8088/proposals`).then((res) => res.json());
};

export const deleteProposal = (proposalId) => {
  return fetch(`http://localhost:8088/proposals/${proposalId}`, {
    method: "DELETE",
  });
};
