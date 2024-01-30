import { useEffect, useState } from "react"
import { Primate } from "../Primates/Primate.js"
import { getAllPrimates } from "../../services/primateService.js"


export const NewProposalForm = ( {primate}) => {
// const [primates, setAllPrimates] = useState([])

// useEffect(() => {
//     getAllPrimates(). t
// })

    return (
        <form className="proposal">
            <h2>New Proposal</h2>
            <fieldset>
                <div className="form-group">
                    <label>Select Species</label>
                    <select>
                        <option key={0} value={0}>
                            Select Primate/Primates
                        </option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Description:</label>
                    <input
                        type="text"
                        required
                        className="form-control" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>On Exhibit:</label>
                    <input
                        type="checkbox" />
                       </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn">Save Proposal</button>
                </div>
            </fieldset>

        </form>
    )
}