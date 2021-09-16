import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo.png";
import { auth } from "../../environments/environments";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Login(): JSX.Element {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");

  const onChange = (d: any) => {
    setEmail(d.email);
    setPassword(d.password);
    setWarning("");
  };

  const login = (e: any) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Succeed");
        cookies.set("email", email, { path: "/" });
        cookies.set("password", password, { path: "/" });
      })
      .then(() => {
        window.location.href = "./home";
      })
      .catch(function (error) {
        console.log(error);
        setWarning(messageError(error.code));
      });
  };

  function messageError(code: any) {
    console.log(code);
    let message = "";
    switch (code) {
      case "auth/wrong-password":
        message = "Contraseña Incorrecta";
        break;
      case "auth/user-not-found":
        message = "Usuario no encontrado";
        break;
      case "auth/too-many-requests":
        message = "Se ha bloqueado temporalmente, demasiadas peticiones";
        break;
      default:
        message = "Hubo un error";
    }
    return message;
  }

  useEffect(() => {
    if (cookies.get("email")) {
      window.location.href = "./home";
    }
  }, []);

  return (
    <div className="login-background">
      <form onChange={handleSubmit(onChange)}>
        <div className="container">
          <img src={logo} alt="logo de la empresa" />
          <span>Ingresar</span>
          <span className="subtitle">Introduce tus credenciales</span>
          <br />
          <input
            type="email"
            className="form__input"
            id="name"
            placeholder="Correo"
            {...register("email")}
          />
          <input
            type="password"
            className="form__input"
            id="name"
            placeholder="Contraseña"
            {...register("password")}
          />
          <span className="warning">{warning}</span>
          <button onClick={login}>Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
