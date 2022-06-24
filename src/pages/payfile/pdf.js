import { useNavigate } from "react-router-dom";
import Paytable from "./Paytable";

export default function Pdf() {
  const { navigate } = useNavigate();

  return (
    <div>
      <Paytable navigate={navigate} />
    </div>
  );
}
