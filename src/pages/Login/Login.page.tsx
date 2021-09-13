import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo.png";
import fire from "../../environments/environments";
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Login(): JSX.Element {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (d: any) => {
    setEmail(d.email);
    setPassword(d.password);
    console.log(email, password);
  };

  const login = (e: any) => {
    e.preventDefault();
    window.location.href="./home";

   /*  fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        console.log("Succeed");
        window.location.href="./home";
      })
      .catch(function (error) {
        console.log(error);
      }); */
  };

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
          <button onClick={login}>Entrar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
