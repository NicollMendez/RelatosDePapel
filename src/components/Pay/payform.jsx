import { Link } from "react-router";

const PayForm = () => {
    return (
        <div className="pay-form">
            <h1> 🛒 Datos de Pago 🛒 </h1>
            <form action="/my-handling-form-page" method="post">
                <ul>
                    <li>
                        <label for="name">Nombres: </label>
                        <input type="text" id="name" name="user_name" />
                    </li>
                    <li>
                        <label for="name">Apellidos: </label>
                        <input type="text" id="name" name="user_name" />
                    </li>
                    <li>
                        <label for="name">Número Tarjeta: </label>
                        <input type="text" id="name" name="user_name" />
                    </li>
                    <li>
                        <label for="name">Fecha Vencimiento: </label>
                        <input type="text" id="name" name="user_name" />
                    </li>
                    <li>
                        <label for="name">Código: </label>
                        <input type="text" id="name" name="user_name" />
                    </li>
                    <li>
                        <label for="mail">Correo electrónico: </label>
                        <input type="email" id="mail" name="user_email" />
                    </li>
                    <li>
                        <label for="mail">Confirmar Correo electrónico: </label>
                        <input type="email" id="mail" name="user_email" />
                    </li>
                    <li>
                        <label for="msg">Mensaje: </label>
                        <textarea id="msg" name="user_message"></textarea>
                    </li>

                    ...
                </ul>
            </form>

            <img src="https://cdn.kustomerhostedcontent.com/media/60880a0a850645260d030186/c0050f7d31eaa122ebb20178892da5f2.jpg" alt="Imagen Tarjeta"></img>
            <br />
            <Link to="/Home" className="pay">
                <button>Pagar</button>
            </Link>
            <br />
        </div>
    );
}

export default PayForm;