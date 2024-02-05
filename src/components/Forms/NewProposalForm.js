import { useEffect, useState } from "react";
import {
  getAllPrimates,
  getPrimateProposalsByProposalId,
} from "../../services/primateService.js";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProposal,
  editProposal,
  getProposalById,
} from "../../services/proposalService.js";

export const NewProposalForm = ({ primate, currentUser }) => {
  const [primates, setPrimates] = useState([]);
  const [selectedPrimateIds, setSelectedPrimateIds] = useState([]);
  const [description, setDescription] = useState("");
  const [exhibit, setExhibit] = useState(false);
  const { proposalId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isNaN(parseInt(proposalId))) {
      getProposalById(parseInt(proposalId)).then((proposal) => {
        setDescription(proposal.description);
        setExhibit(proposal.exhibit);
        getPrimateProposalsByProposalId(proposal.id).then(
          (primateProposals) => {
            const primateIds = [];
            for (const primateProposal of primateProposals) {
              primateIds.push(primateProposal.primateId);
            }
            setSelectedPrimateIds(primateIds);
          }
        );
      });
    } else {
      setSelectedPrimateIds([]);
      setDescription("");
      setExhibit(false);
    }
  }, [proposalId]);

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

    const newProposal = {
      userId: currentUser.id,
      description,
      approved: false,
      exhibit,
    };

    if (event.target.innerText === "Save Proposal") {
      if (description === "") {
        return;
      }
      createProposal(newProposal)
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
    }
    if (event.target.innerText === "Edit Proposal") {
      editProposal(newProposal, proposalId).then(() => {
        navigate("/proposals");
      });
    }
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
            required
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
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
            checked={exhibit}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          {proposalId ? (
            <button className="form-btn" type="submit" onClick={handleSubmit}>
              {" "}
              Edit Proposal{" "}
            </button>
          ) : (
            <button className="form-btn" type="submit" onClick={handleSubmit}>
              {" "}
              Save Proposal{" "}
            </button>
          )}
        </div>
      </fieldset>
    </form>
  );
};
