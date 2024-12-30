import { useParams } from "react-router-dom";
import { Context } from "../../context/context.jsx";
import { useContext } from "react";

export const books = [
    { name: "CIEN AÑOS DE SOLEDAD", autor: "GABRIEL GARCIA MARQUEZ", price: 89, rating: "4.8", image: "https://images.cdn1.buscalibre.com/fit-in/360x360/f2/e8/f2e8856c5f628b4b4e63065abc332c30.jpg", quanty: 1 },
    { name: "LA CIUDAD Y SUS MUROS INCIERTOS", autor: "HARUKI MURAKAMI", price: 79, rating: "3.8", image: "https://imagessl1.casadellibro.com/a/l/s7/31/9786287567931.webp", quanty: 1 },
    { name: "THE BOOK OF BILL", autor: "THE BOOK OF BILL", price: 152, rating: "4.2", image: "https://imagessl3.casadellibro.com/a/l/s7/03/9781368092203.webp", quanty: 1 },
    { name: "LA MUJER INCIERTA EBOOK", autor: "Piedad Bonnett", price: 36, rating: "3.5", image: "https://imagessl9.casadellibro.com/a/l/s7/59/9786287659759.webp", quanty: 1 },
    { name: "RECUPERA TU MENTE, RECONQUISTA TU VIDA EBOOK", autor: "Marian Rojas Estapé", price: 28, rating: "2.5", image: "https://imagessl9.casadellibro.com/a/l/s7/99/9788467073799.webp", quanty: 1 },
    { name: "UN LUGAR SOLEADO PARA GENTE SOMBRÍA", autor: "Mariana Enriquez", price: 79, rating: "4.5", image: "https://imagessl1.casadellibro.com/a/l/s7/61/9788433922861.webp", quanty: 1 },
    { name: "ALAS DE ÓNIX (EMPÍREO 3)", autor: "Rebecca Yarros", price: 105, rating: "4.0", image: "https://imagessl9.casadellibro.com/a/l/s5/79/9788408297079.webp", quanty: 1 },
    { name: "DELIRIO", autor: "LAURA RESTREPO", price: 47, rating: "4.7", image: "https://imagessl8.casadellibro.com/a/l/s5/88/9789589016688.webp", quanty: 1 },
    { name: "SER RICO ES FACIL Y MUY JODIDO", autor: "JUAN PABLO ZULUAGA", price: 45, rating: "4.3", image: "https://imagessl6.casadellibro.com/a/l/s5/86/9786287539686.webp", quanty: 1 },
];

const BookView = () => {

    const { car, setCar, addCar} = useContext(Context);

    const { index } = useParams();
    const bookIndex = parseInt(index);

    const book = books[bookIndex];

    if (!book) {
        return <div>Libro no encontrado</div>;
    }

    return (
        <div className="card">
            <h3>{book.name}</h3>
            <img src={book.image} alt={book.name} />
            <p>Autor: {book.autor}</p>
            <p>Precio: COP $ {book.price}.000</p>
            <p>Calificación: {book.rating} / 5</p>
            <button onClick={() => addCar(book)}>Añadir al carrito</button>
        </div>
    );
}

export default BookView;