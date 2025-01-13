import Search from "../Search/search";
import PayEle from "./payele.jsx";
import PayTotal from "./paytotal.jsx";
import { useContext } from "react";
import { Context } from "../../Context/context";
import PayForm from "./payform.jsx";

const Pay = () => {
    const { car } = useContext(Context);
    return (
        <div>
            <Search />
            <h1>Pasarela de pago</h1>
            <PayEle />
            <PayTotal />
            <PayForm />
        </div>
    );
}

export default Pay;