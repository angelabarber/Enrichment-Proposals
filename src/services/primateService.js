export const getAllPrimates = () => {
  return fetch(`http://localhost:8088/primates`).then((res) => res.json());
};

export const getPrimateProposalsByProposalId = (proposalId) => {
  return fetch(
    `http://localhost:8088/primatesProposals?proposalId=${proposalId}`
  ).then((res) => res.json());
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

  
