import { useEffect, useState } from "react"
import { getAllPrimates } from "../../services/primateService.js"

export const Proposal = ( {proposal, currentUser } ) => {


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
        
      </div>
    </footer>
  </section>)
}