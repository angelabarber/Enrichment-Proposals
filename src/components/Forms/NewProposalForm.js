import { useEffect, useState } from "react"
import { getAllPrimates } from "../../services/primateService.js"


export const NewProposalForm = ( {primate}) => {
    const [primates, setPrimates] = useState([])
    const [selectedPrimateIds, setSelectedPrimateIds] = useState([])


    useEffect (() => {
        getAllPrimates().then(primatesArray => {
            setPrimates(primatesArray)
        })
    }, [])


    const checkListener = (event) => {
        const { checked, value } = event.target
        const clone = structuredClone(selectedPrimateIds);

        if (checked) {
            clone.push(parseInt(value));
            setSelectedPrimateIds(clone);
        } else {
            setSelectedPrimateIds(clone.filter((primate) => primate !== parseInt(value)))
        }
        

    };

    return (
        <form className="proposal">
            <h2>New Proposal</h2>
            <fieldset>
                <div className="form-group" >
                    {primates.map((primate) => (
                        <div key={primate.id}>
                            <label>{primate.name}</label>
                            <input
                                type="checkbox"
                                value={primate.id}
                                checked={selectedPrimateIds.includes(primate.id)}
                                onChange={checkListener}
                                />
                            </div>
                    ))}
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