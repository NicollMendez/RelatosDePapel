import { useContext } from "react";
import { Context } from "../../Context/context";

const PayEle = () => {

    const { car, setCar, addCar, decreaseCar } = useContext(Context);

    return car.map((books, index) => {
        return (
            <div className="product-pay-content">
                <h3>Libro: {books.name}</h3>
                <p>Cantidad de libros: {books.quanty}</p>
                <h4>Precio: COP $ {books.price}.000</h4>
            </div>
        )
    });
}

export default PayEle;  