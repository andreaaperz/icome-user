import React from 'react';
/* import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from 'firebase/APP';
import 'firebase/auth';
import firebaseConfig from '../../environments/environments'; */
import logo from '../../assets/logo.png';

//const firebaseApp = firebase.initializeApp(firebaseConfig);

function Login(): JSX.Element {
    return (
        <div className="login-background">
            <div className="container2">
                <div className="container">
                    <img src={logo} alt="logo de la empresa" />
                    <text>Ingresar</text>
                    <text className="subtitle">Introduce tus credenciales</text><br />
                    <input type="email" className="form__input" id="name" placeholder="Correo" />
                    <input type="password" className="form__input" id="name" placeholder="Contraseña" />
                    <button>Entrar</button>
                </div>
            </div>
        </div>
    );

}

export default Login;