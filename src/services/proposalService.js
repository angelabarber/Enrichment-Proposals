export const getAllProposals = () => {
  return fetch(
    `http://localhost:8088/primatesProposals?_expand=primate&_expand=proposal`
  ).then((res) => res.json());
};

export const getProposals = () => {
  return fetch(`http://localhost:8088/proposals`).then((res) => res.json());
};

export const primatesProposalsWithPrimates = () => {
  return fetch(`http://localhost:8088/primatesProposals?_expand=primate`).then(
    (res) => res.json()
  );
};

export const getProposalById = (proposalId) => {
  return fetch(`http://localhost:8088/proposals/${proposalId}`).then((res) =>
    res.json()
  );
};

export const createProposal = (newProposal) => {
  return fetch("http://localhost:8088/proposals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProposal),
  }).then((res) => res.json());
};

export const editProposal = (updatedProposal, proposalId) => {
  return fetch(`http://localhost:8088/proposals/${proposalId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProposal),
  }).then((res) => res.json());
};

export const deleteProposal = (proposalId) => {
  return fetch(`http://localhost:8088/proposals/${proposalId}`, {
    method: "DELETE",
  });
};
