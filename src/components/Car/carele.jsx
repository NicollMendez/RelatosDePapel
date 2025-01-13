import { useContext } from "react";
import { Context } from "../../context/context";

const CarEle = () => {

    const { car, setCar, addCar, decreaseCar } = useContext(Context);

    const deleteProduct = (book) => {

        const foundId = car.find((element) => element.index === book.index);

        const newCar = car.filter((element) => {

            return element !== foundId;

        })

        setCar(newCar);
    }


    return car.map((books, index) => {
        return (
            <div className="product-card-content">
                <img src={books.image} alt={books.name} />
                <h3>{books.name}</h3>
                <p className="counter-button" onClick={() => addCar(books)}>+</p>
                <p>{books.quanty}</p>
                <p className="counter-button" onClick={() => decreaseCar(books)}>-</p>
                <h4>COP $ {books.price}.000</h4>
                <h3 className="car-delete-product" onClick={() => deleteProduct(books, index)}>✖️</h3>
            </div>
        )
    });
}

export default CarEle;