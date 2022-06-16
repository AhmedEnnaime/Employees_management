import { useParams } from "react-router-dom";
import Singleuser from "./Singleuser";

export default function Suser() {

    const { id } = useParams();


    return (
        <div>
            <Singleuser id={id} />
        </div>
    );
}