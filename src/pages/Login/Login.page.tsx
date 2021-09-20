import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo.png";
import { auth, db } from "../../environments/environments";
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

  const validation = async () => {
    var canLogIn = false;
    await db
      .collection("empleados")
      .where("correo", "==", email)
      .get()
      .then((response) => {
        response.forEach((doc) => {
          if (doc.data().entra) {
            canLogIn = true;
          } else {
            canLogIn = false;
          }
        });
      });
    return canLogIn;
  };

  const login = async (e: any) => {
    e.preventDefault();

    let canEnter = await validation();

    if (canEnter) {
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
    } else {
      setWarning(messageError("No tienes permisos para entrar"));
    }
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
