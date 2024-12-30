import Search from '../Search/Search';
import './book.css';
import BookView from "./bookview";

const Book = ({ }) => {

    return (
        <div>
            <>
                <Search />
                <BookView/>
            </>
        </div>
    );
}

export default Book;