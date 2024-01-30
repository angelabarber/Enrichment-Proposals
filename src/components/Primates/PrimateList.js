import { useEffect, useState } from "react"
import { getAllPrimates } from "../../services/primateService.js"
import { Primate } from "./Primate.js"




export const PrimateList = ({primate}) => {
    const [allPrimates, SetAllPrimates] = useState([])


    useEffect (() => {
        getAllPrimates().then(primatesArray => {
            SetAllPrimates(primatesArray)
        })
    }, [])


    return (
        <div className="primates-container">
            <h2>Primates</h2>
            <article className="primates" >
                {allPrimates.map((primateObj) => {
                    return ( 
                        <Primate  primate={primateObj} key={primateObj.id}/>

                    )
                })}
            </article>
            </div>
    )
}