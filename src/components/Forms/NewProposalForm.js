import { useEffect, useState } from "react";
import { getAllPrimates } from "../../services/primateService.js";
import { Navigate, useNavigate } from "react-router-dom";

export const NewProposalForm = ({ primate, currentUser }) => {
  const [primates, setPrimates] = useState([]);
  const [selectedPrimateIds, setSelectedPrimateIds] = useState([]);
  //   const [proposals, setProposals] = useState([]);
  const [description, setDescription] = useState("");
  const [exhibit, setExhibit] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    getAllPrimates().then((primatesArray) => {
      setPrimates(primatesArray);
    });
  }, []);

  //   useEffect(() => {
  //     fetch(`http://localhost:8088/proposals`)
  //       .then((res) => res.json())
  //       .then(setProposals);
  //   }, []);

  const checkListener = (event) => {
    const { checked, value } = event.target;
    const clone = structuredClone(selectedPrimateIds);

    if (checked) {
      clone.push(parseInt(value));
      setSelectedPrimateIds(clone);
    } else {
      setSelectedPrimateIds(
        clone.filter((primate) => primate !== parseInt(value))
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (description === "") {
      return;
    }
    const newProposal = {
      userId: currentUser.id,
      description,
      approved: false,
      exhibit,
    };

    fetch("http://localhost:8088/proposals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProposal),
    })
      .then((res) => res.json())
      .then((res) => {
        const promises = selectedPrimateIds.map((primateId) => {
          return fetch("http://localhost:8088/primatesProposals", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              proposalId: res.id,
              primateId,
            }),
          });
        });
        return Promise.all(promises);
      })
      .then(() => {
        navigate("/proposals");
      });
  };

  return (
    <form className="proposal">
      <h2>New Proposal</h2>
      <fieldset>
        <div className="form-group">
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
            className="form-control"
            placeholder="Brief Description/Name of item(s)"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>On Exhibit:</label>
          <input
            type="checkbox"
            onChange={(event) => {
              setExhibit(event.target.checked);
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn" onClick={handleSubmit}>
            Save Proposal
          </button>
        </div>
      </fieldset>
    </form>
  );
};
