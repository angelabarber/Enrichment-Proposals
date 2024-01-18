import { useEffect, useState } from "react";
import { getAllPrimates } from "../../services/primateService.js";
import { Primate } from "./Primate.js";
import "./Primate.css";
import { Link } from "react-router-dom";

export const PrimateList = ({ primate }) => {
  const [allPrimates, SetAllPrimates] = useState([]);

  useEffect(() => {
    getAllPrimates().then((primatesArray) => {
      SetAllPrimates(primatesArray);
    });
  }, []);

  return (
    <div className="primates-container">
      <h2 className="title">Primates</h2>
      <article className="primates">
        {allPrimates.map((primateObj) => {
          return (
            <Link
              className="primate-click"
              key={primateObj.id}
              to={`/primates/${primateObj.id}`}
            >
              <Primate primate={primateObj} key={primateObj.id} />
            </Link>
          );
        })}
      </article>
    </div>
  );
};
