export const getAllPrimates = () => {
  return fetch(`http://localhost:8088/primates`).then((res) => res.json());
};

export const getPrimateProposalsByProposalId = (proposalId) => {
  return fetch(
    `http://localhost:8088/primatesProposals?proposalId=${proposalId}`
  ).then((res) => res.json());
};

export const getPrimateByPrimateId = (primateId) => {
  return fetch(`http://localhost:8088/primates/${primateId}`).then((res) =>
    res.json()
  );
};

// export const getPrimateProposalsByProposalId = (proposalId) => {
//   return fetch(`http://localhost:8088/primatesProposals/${proposalId}`).then(
//     (res) => res.json()
//   );
// };

export const getAllPrimateProposals = () => {
  return fetch(
    `http://localhost:8088/primatesProposals?_expand=primate&_expand=proposal`
  ).then((res) => res.json());
};

export const deletePrimateProposal = (primateProposalId) => {
  return fetch(`http://localhost:8088/primatesProposals/${primateProposalId}`);
};

export const addPrimateProposal = (newPrimateProposal) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPrimateProposal),
  };
  return fetch(`http://localhost:8088/primatesProposals`, postOptions).then(
    (res) => res.json()
  );
};
