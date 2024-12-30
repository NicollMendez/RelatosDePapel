import Search from "../Search/search.jsx";
import PayEle from "./payele.jsx";
import PayTotal from "./paytotal.jsx";
import PayForm from "./payform.jsx";

const Pay = () => {
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