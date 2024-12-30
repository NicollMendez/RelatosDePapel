import { useContext } from "react";
import { Context } from "../../context/context.jsx";
import "./pay.css";

const PayTotal = () => {

    const { car } = useContext(Context);

    const total = car.reduce((acc, item) => acc + item.price * item.quanty, 0);

    return (
        <div className="payTotal">
            <h4>Total a pagar : COP $ {total}.000 </h4>
        </div>
    );
}

export default PayTotal;