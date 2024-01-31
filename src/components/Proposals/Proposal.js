import { useEffect, useState } from "react"
import { getAllUsers } from "../../services/userService.js"
import { getProposals } from "../../services/proposalService.js"

export const Proposal = ( { proposal, currentUser } ) => {
  const [users, setUsers] = useState([])
  const [proposalUser, setProposalUser] = useState ([])
  const [matchProposals, setMatchedProposals] = useState ([])


  useEffect(() => {
    getAllUsers().then((usersArray) => {
      setUsers(usersArray)
    
    })
  }, [])

  useEffect(() => {
    getProposals().then((proposalsArray) => {
      setProposalUser(proposalsArray)
    })
  } ,[])

  useEffect(() => {
    const foundUser = users.find(
      (user) => user.id === proposal.userId
    )
    setMatchedProposals(foundUser)
    

  },[])



  // const handleEdit = () => {
  //   const currentEmployee = users.find(
  //     user => 

  //   )
  // }
  if(currentUser.id === proposalUser.proposal?.id) {

    return ( 
    <section className="proposal" key={proposal.id}>
    <header className="proposal-info">#{proposal.id}</header>
    <div>{proposal.primate.name}</div>
    <div>{proposal.proposal.description}</div>
    <footer>
      <div>
        <div className="proposal-info"> Approved</div>
        <div>{proposal.proposal.approved ? "yes"  : "no" }</div>
      </div>
      <div className="btn-container">
        
          <button className="btn btn-edit">
            Edit
          </button>
      </div>
    </footer>
  </section>)

   }
  
return ( 
    <section className="proposal" key={proposal.id}>
    <header className="proposal-info">#{proposal.id}</header>
    <div>{proposal.primate.name}</div>
    <div>{proposal.proposal.description}</div>
    <footer>
      <div>
        <div className="proposal-info"> Approved</div>
        <div>{proposal.proposal.approved ? "yes"  : "no" }</div>
      </div>
      <div className="btn-container"></div>
      </footer>
      </section>
)
  }   
