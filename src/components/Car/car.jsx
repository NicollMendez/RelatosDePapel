import "./car.css";
import Search from "../Search/search.jsx";
import CarEle from "./carele.jsx";
import CarTotal from "./cartotal.jsx";
import { useContext } from "react";
import { Context } from "../../context/context";

const Car = () => {
    const { car } = useContext(Context);
    return (
        <div>
            <Search />
            {car.length > 0 ? (
                <>
                    <h1>Carrito</h1>
                    <CarEle />
                    <CarTotal />
                </>
            ) : (
                <h2 className="car-message-center">Carrito vacio</h2>
            )}
        </div>
    );
}

export default Car;