import { useParams } from "react-router-dom";

export const ProposalForm = ({ currentUser }) => {
  const something = useParams();
  console.log(something.id);
  return <>{!something.id ? "this is new form" : "this is edit"}</>;
};
