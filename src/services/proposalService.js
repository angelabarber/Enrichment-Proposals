export const getAllProposals = () => {
    return fetch(`http://localhost:8088/primatesProposals?_expand=primate&_expand=proposal`).then(res => res.json())

}