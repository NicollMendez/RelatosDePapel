import { useContext } from "react";
import { Context } from "../../Context/context";
import "./car.css";
import { Link } from "react-router";

const CarTotal = () => {

    const { car } = useContext(Context);

    const total = car.reduce((acc, item) => acc + item.price * item.quanty, 0);

    return (
        <div className="carTotal">
            <h4>Total a pagar : COP $ {total}.000 </h4>
            <Link to="/RelatosDePapel/Pagar">
                <button className="Pagar">Ir a pagar</button>
            </Link>
        </div>
    );
}

export default CarTotal;