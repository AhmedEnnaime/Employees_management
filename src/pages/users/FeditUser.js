import { useParams } from "react-router-dom";
import EditUser from "./EditUser";

export default function FeditUser() {
  const { id } = useParams();

  return (
    <div>
      <EditUser id={id} />
    </div>
  );
}
