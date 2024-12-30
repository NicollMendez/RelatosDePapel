import LoginConf from "./loginconf";
import Search from "../Search/Search";
import "./login.css";
import { Link } from "react-router";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/RelatosDePapel/Home');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <><Search />
            <div class="container">
                <h1>Inicia sesión</h1>
                <p>Serás redirigido a la página principal en 5 segundos...</p>
                <h3>Registro de Usuario</h3>
                <div className="userForm">
                    <form id="userForm">
                        <div class="input-field">
                            <input id="fullName" type="text" name="fullName" class="validate" required>
                            </input>
                            <label for="fullName">   Nombre y apellidos</label>

                            <div class="input-field">
                                <input id="username" type="text" name="username" class="validate" required>
                                </input>
                                <label for="username">  Nombre de usuario</label>
                            </div>

                            <div class="input-field">
                                <input id="password" type="password" name="password" class="validate" required>
                                </input>
                                <label for="password">  Contraseña</label>
                            </div>

                            <div class="input-field">
                                <input id="confirmPassword" type="password" name="confirmPassword" class="validate" required>
                                </input>
                                <label for="confirmPassword">  Confirmar contraseña</label>
                            </div>

                            <div class="input-field">
                                <input id="email" type="email" name="email" class="validate" required>
                                </input>
                                <label for="email">  Email</label>
                            </div>
                            <Link to="/RelatosDePapel/Home">
                                <button type="submit" class="btn waves-effect waves-light">
                                    Registrar
                                    <i class="material-icons right"></i>
                                </button>
                            </Link>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;