import React, { useState, useEffect } from "react";
import fire from "../../environments/environments";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Home(): JSX.Element {
  const logout = (e: any) => {
    e.preventDefault();

    fire
      .auth()
      .signOut()
      .then(() => {
        cookies.remove("email", { path: "/" });
        cookies.remove("password", { path: "/" });
        window.location.href = "./";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!cookies.get("email")) {
      window.location.href = "./";
    }
  }, []);

  return (
    <div>
      <h1>hola</h1>
      <button onClick={logout}>LogOut</button>
    </div>
  );
}

export default Home;
