import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPrimateByPrimateId } from "../../services/primateService.js";

export const PrimateDetails = () => {
  const { primateId } = useParams();
  const [primate, setPrimate] = useState({});

  useEffect(() => {
    getPrimateByPrimateId(primateId).then((data) => {
      setPrimate(data);
    });
  }, [primateId]);
  return (
    <section className="primate">
      <header className="primate-header">#{primateId}</header>
      <div className="text">
        <span className="primate-info">{primate.name}</span>
      </div>
      <div className="text">
        <span className="primate-info"> Behaviors:</span>
        {primate.behaviors}
      </div>
      <div>
        <span></span>
      </div>
    </section>
  );
};
