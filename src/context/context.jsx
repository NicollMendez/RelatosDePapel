import { createContext, useState } from "react";
export const Context = createContext();

const ContextProvider = ({ children }) => {

    const [car, setCar] = useState([]);

    const addCar = (books) => {

        const bookExist = car.find((item) => item.index === books.index)

        //if (bookExist) {
        //setCar(car.map((item) => (item.index === books.index ? { ...books, quanty: bookExist.quanty + 1 } : item)))
        // } else {
        setCar([...car, books])
        //}

    }

    const decreaseCar = (books) => {

        const bookExist = car.find((item) => item.index === books.index)
        console.log(bookExist);

        //bookExist.quanty !== 1 &&
        //setCar(car.map((item) => (item.index === books.index ? { ...books, quanty: bookExist.quanty - 1 } : item)))

    }

    return (
        <Context.Provider value={{ car, setCar, addCar, decreaseCar }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;
